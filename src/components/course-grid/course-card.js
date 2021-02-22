import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './coursecard.style.client.css'

const CourseCard = (
    {
      deleteCourse,
      updateCourse,
      course,
      title,
      owner,
      lastModified,
    }) => {

      const [editing, setEditing] = useState(false);
      const [newTitle, setNewTitle] = useState(title);

      const saveTitle =() => {
        setEditing(false);
        const newCourse = {
          ...course,
          title: newTitle
        }
        updateCourse(newCourse);
      }

      return (
        <div className={"col-3"}>
          <div className="card">
            <div className="card-body">
              <img src={'../src/logo.svg'}/>
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">Class Description</p>
              {
                !editing &&
              <i onClick={() => editing === true}
                className="btn btn-primary float-left">{course.title}</i>
              }
              {
                editing &&
                <input
                    onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
              }
              <div id="rac-action-icons">
              {!editing && <i onClick={() => deleteCourse(course)}className="icon delete fas fa-trash float-right"></i>}
              {editing && <i onClick={() => saveTitle()} className="icon fas fa-check float-left"></i>}
              {!editing &&<i onClick={() => setEditing(true)} className="icon fas fa-edit float-right"></i>}

              </div>
            </div>
          </div>
        </div>
      )
    }

export default CourseCard;