import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor"

class CourseManager extends React.Component{
  state = {
    courses: [
      {title:"CS1234", owner:"alice", lastModified:"01/02/2021"},
      {title:"CS5610", owner:"richard", lastModified:"01/21/2021"},
      {title:"CS5200", owner:"bruce", lastModified:"01/31/2021"},
      {title:"CS5100", owner :"tony", lastModified:"01/17/2021"}
    ]
  }

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
    const newCourses = this.state.courses.filter(course => course !== courseToDelete)
    this.setState({
      courses: newCourses
    })
  }

  render() {
    return(
        <div>
          <h1>Course Manager</h1>
          <button onClick={this.addCourse}>Add Course</button>
          <CourseTable deleteCourse={this.deleteCourse} courses={this.state.courses}/>
          <CourseGrid deleteCourse={this.deleteCourse} courses={this.state.courses}/>
          <CourseEditor/>
        </div>
    )

  }
}
export default CourseManager
