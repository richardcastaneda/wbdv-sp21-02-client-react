import React from 'react'
import CourseRow from "./course-row";

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
        <button onClick={this.addCourse}>Add Course</button>
        <table className="table">
          <tbody>
          <thead>

          </thead>
          {
            this.props.courses.map((course, ndx) =>
                <CourseRow
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