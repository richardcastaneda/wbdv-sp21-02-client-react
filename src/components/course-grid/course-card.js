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
        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-2 col-xs-1">
          <div className="card">
            <div className="card-body">
              <img className="card-img-top" src="https://miro.medium.com/max/4800/1*yjH3SiDaVWtpBX0g_2q68g.png" alt="Card image cap">
              </img>
              {!editing &&<i onClick={() => {setNewTitle(course.title); setEditing(true)}} className="icon fas fa-edit float-right"></i>}
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">Class Description</p>
              {
                !editing &&
              <Link to="/courses/editor" onClick={() => editing === true}
                className="btn btn-primary float-left">{course.title}</Link>
              }
              {
                editing &&
                <input
                    onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
              }
              <div id="rac-action-icons">
              {editing && <button onClick={() => deleteCourse(course)}className="btn btn-danger rac-delete fas fa-trash float-right"></button>}
              {editing && <button onClick={() => saveTitle()} className="btn btn-success fas fa-check rac-check float-left"></button>}
              </div>
            </div>
          </div>
        </div>
      )
    }

export default CourseCard;