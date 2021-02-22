import React from 'react';
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor"
import {Route} from "react-router-dom";
import courseService from "../services/course-service";
import './coursemanager.style.client.css'

class CourseManager extends React.Component{
  state = {
    courses: [],
  }

  updateCourse = (course) => {
    console.log(course);
    courseService.updateCourse(course._id, course)
    .then(status => this.setState((prevState) => ({
      ...prevState,
      courses: prevState.courses.map(c => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    })));
  }

  componentDidMount = () =>
    courseService.findAllCourses()
      .then(courses => this.setState({courses}));

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "New Owner",
      lastModified: "Never"
    };
    courseService.createCourse(newCourse)
    .then(course => this.setState(
        (prevState) => ({
          ...prevState,
        courses: [
            course,
          ...prevState.courses
      ]
    })));
  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
    .then(status => {
      this.setState((prevState) => {
        let newState = {...prevState}
        newState.courses =
          prevState.courses.filter(course => course !== courseToDelete)
          return newState;
      })
    });
  }

  render() {
    return(
        <div class="container">
          <Route path="/courses/table">
            <div className="rac-sticky-nav-bar">
              <div className="row">
                <div className="col-1 center">
                  <i className="fas fa-bars fa-2x"></i>
                </div>
                <div className="col-2.5  d-none d-lg-block rac-no-wrap">
                  <h4>Course Manager</h4>
                </div>
                <div className="col-8">
                  <input type="text"
                         id="newCourseTitle"
                         className="form-control"
                         placeholder="New Course Title"/>
                </div>
                <div className="col-0.7 center rac-reduced-padding">
                  <i className="fas fa-plus fa-2x"></i>
                </div>
              </div>
            </div>
            <CourseTable
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
          </Route>
          <Route path="/courses/grid">
            <div className="rac-sticky-nav-bar">
              <div className="row">
                <div className="col-1 center">
                  <i className="fas fa-bars fa-2x"></i>
                </div>
                <div className="col-2.5  d-none d-lg-block rac-no-wrap">
                  <h4>Course Manager</h4>
                </div>
                <div className="col-8">
                  <input type="text"
                         id="newCourseTitle"
                         className="form-control"
                         placeholder="New Course Title"/>
                </div>
                <div className="col-0.7 center rac-reduced-padding">
                  <i className="fas fa-plus fa-2x"></i>
                </div>
              </div>
            </div>
            <CourseGrid
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
          </Route>
          <Route path="/courses/editor"
                 render={(props) =>
                   <CourseEditor {...props}/>}>
          </Route>
          <i onClick={this.addCourse}className="fas fa-plus fa-2x float-right"></i>
        </div>
    );
  }
}
export default CourseManager;
