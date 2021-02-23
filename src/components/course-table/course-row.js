import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './courserow.style.client.css';

const CourseRow = (
    {
      deleteCourse,
      updateCourse,
      course,
      title,
      owner,
      lastModified
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

    return(
      <tr>
      <td>
        {
          !editing &&
          <i className="icon file fas fa-file"></i>
        }
        {
          !editing &&
          <Link to="/courses/editor">
            {title}
          </Link>
        }{
          editing &&
          <input
            onChange={(event) => setNewTitle(event.target.value)}
            value={newTitle}
            className="form-control"/>
        }
      </td>
      <td class="d-none d-md-table-cell">{owner}</td>
      <td class="d-none d-lg-table-cell">{lastModified}</td>
      <td>
        {editing && <button onClick={() => saveTitle()} className="rac-custom-button btn btn-success fas fa-check"></button>}
        {editing && <button onClick={() => deleteCourse(course)} className="rac-custom-button btn btn-danger fas fa-trash"></button>}
        {!editing && <i onClick={() => {setNewTitle(title); setEditing(true)}} className="icon fas fa-edit"></i>}
      </td>
    </tr>)
    }

export default CourseRow;
