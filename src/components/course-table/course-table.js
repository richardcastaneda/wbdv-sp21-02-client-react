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
      <div>
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