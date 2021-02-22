import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor"
import {Route} from "react-router-dom";
import {findAllCourses, deleteCourse} from "../services/course_service";

class CourseManager extends React.Component{
  state = {
    courses: [
      {title:"CS1234", owner:"alice", lastModified:"01/02/2021"},
      {title:"CS5610", owner:"richard", lastModified:"01/21/2021"},
      {title:"CS5200", owner:"bruce", lastModified:"01/31/2021"},
      {title:"CS5100", owner :"tony", lastModified:"01/17/2021"}
    ]
  }

  componentDidMount = () =>
    findAllCourses()
      .then(courses => this.setState({courses}))

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "New Owner",
      lastModified: "Last Modified:"
    }
    this.state.courses.push(newCourse)
    this.setState(this.state)
  }

  deleteCourse = (courseToDelete) => {
    deleteCourse(courseToDelete._id)
    .then(status => {
      const newCourses = this.state.courses
        .filter(course => course !== courseToDelete)
        this.setState({
          courses: newCourses
        })
    })
  }

  render() {
    return(
        <div>
          <h1>Course Manager</h1>
          <button onClick={this.addCourse}>Add Course</button>
          <Route path="/courses/table">
            <CourseTable
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
          </Route>
          <Route path="/courses/grid">
            <CourseGrid
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
          </Route>
          <Route path="/courses/editor"
                 render={(props) =>
                   <CourseEditor {...props}/>}>
          </Route>
        </div>
    )
  }
}
export default CourseManager
