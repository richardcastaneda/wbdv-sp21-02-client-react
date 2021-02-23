import React, {useState} from 'react';
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({
  updateCourse,
  deleteCourse,
  addCourse,
  courses
}) =>
  <div className="grid-container">
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
          <i onClick={addCourse} className="fas fa-plus fa-2x float-right"></i>
        </div>
      </div>
    </div>
    <div className="rac-grid-contents">
      <Link to="/courses/table">
        <i className="fas fa-list fa-2x float-right"></i>
      </Link>
    </div>
    <div className="row">
      {
        courses.map(course =>
            <CourseCard updateCourse={updateCourse}
                        course={course}
                        deleteCourse={deleteCourse}
            />
        )
      }
    </div>
  </div>

export default CourseGrid;