import React from 'react';
import {connect} from 'react-redux';
import EditableItem from "./editable-item";

const LessonTabs = (
    {
      lessons=[
        {_id: '123', title: "Lesson 123"},
        {_id: '234', title: "Lesson 234"},
        {_id: '345', title: "Lesson 345"},
      ]
    }) =>
    <div>
      <h2>
        Lessons
      </h2>
        <ul className="nav nav-tabs">
          {
            lessons.map(lesson =>
            <li className="nav-item">
            <a className="nav-link" href="#">
              <EditableItem item={lesson}/>
            </a>
            </li>
            )
          }
        </ul>
    </div>
//Read from the state
const stpm = (state) => ({
  lessons: state.lessonReducer().lessons
})
//MAniupulate the state
const dtpm = (dispatch) => ({

})

export default connect() (LessonTabs)