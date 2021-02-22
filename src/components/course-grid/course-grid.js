import React from 'react';
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({
  updateCourse,
  deleteCourse,
  courses
}) =>
  <div class="grid-container">
    <div>
    <Link to="/courses/table">
      <i className="fas fa-list fa-2x float-right"></i>
    </Link>
    </div>
    <div className="row">
    {
      courses.map(course =>
      <CourseCard updateCourse={updateCourse}
                  course = {course}
                  deleteCourse={deleteCourse}
      />
      )
    }
    </div>
  </div>

export default CourseGrid;