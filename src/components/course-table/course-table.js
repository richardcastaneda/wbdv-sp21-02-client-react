import React from 'react';
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {

  constructor(props){
    super(props);
  }

  render () {
    return(
      <div>
        <Link to="/courses/grid">
          <i className="fas float-right fa-2x fa-th"></i>
        </Link>
        <table className="table">
          <tbody>
            <thead>
              <th>Title</th>
              <th>Title</th>
              <th>Title</th>
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