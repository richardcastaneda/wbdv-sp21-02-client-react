import React from 'react';
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import CourseEditor from "../course-editor/course-editor"
import {Route, useParams} from "react-router-dom";
import courseService from "../../services/course-service";
import './coursemanager.style.client.css'
import QuizzesList from '../quizzes/quizzes-list.js';

class CourseManager extends React.Component{
  state = {
    courses: [],
  };

  updateCourse = (course) => {
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

  addCourse = (courseTitle = "New Course") => {
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
      });
    });
  }

  render() {
    return(
        <div className="container">
          <Route exact path="/courses/table">
            <CourseTable
              addCourse={this.addCourse}
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
            <i onClick={this.addCourse} className="fas fa-plus fa-2x float-right"></i>
          </Route>
          <Route exact path="/courses/grid">
            <CourseGrid
              addCourse={this.addCourse}
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
            <i onClick={this.addCourse} className="fas fa-plus fa-2x float-right"></i>
          </Route>
          <Route exact path={["/courses/:layout/edit",
                        "/courses/:layout/edit/:courseId/",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widget/:widgetId"]}
                 render={(props) =>
                   <CourseEditor {...props}/>}>
          </Route>
        </div>
    );
  }
}
export default CourseManager;
