import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {

  constructor(props){
    super(props)
  }

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "New Owner",
      lastModified: "Last Modified:"
    }
    this.props.courses.push(newCourse)
    this.setState(this.state)
  }

  render () {
    return(
      <div>
        <h2>CourseTable</h2>
        <Link to="/courses/grid">
          <i className="fas float-right fa-2x fa-th"></i>
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