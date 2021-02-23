import React from 'react';
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import './coursetable.style.client.css'

export default class CourseTable extends React.Component {

  constructor(props){
    super(props);
  }

  render () {
    return(
        <div className="rac-sticky-nav-bar">
          <div className="row">
            <div className="col-1 center">
              <i className="fas fa-bars fa-2x"></i>
            </div>
            <div className="col-2.5  d-none d-lg-block rac-no-wrap">
              <h4>Course Manager</h4>
            </div>
            <div className="col-8">
              <input
                  value="Course Title"
                  id = "newCourseTitle"
                  className="form-control"/>
            </div>
            <div className="col-0.7 center rac-reduced-padding">
              <i onClick={this.props.addCourse} className="fas fa-plus fa-2x float-right"></i>
            </div>
          </div>
        <Link to="/courses/grid">
          <i className="fas icon float-right fa-2x fa-th"></i>
        </Link>
        <table className="table">
          <tbody>
            <thead>
            </thead>
            {
            this.props.courses.map((course, ndx) =>
              <CourseRow
                  updateCourse={this.props.updateCourse}
                  deleteCourse={this.props.deleteCourse}
                  key={ndx}
                  course = {course}
                  title={course.title}
                  owner={course.owner}
                  lastModified={course.lastModified}
              />
            )
          }
          </tbody>
        </table>
      </div>
    )
  }
}