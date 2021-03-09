import React from 'react';
import {connect} from 'react-redux';
import EditableItem from "./editable-item";
import {Link, useParams} from "react-router-dom";

const LessonTabs = (
    {
      lessons=[],
        createLesson,
        deleteLesson,
        updateLesson,
    }) =>
    {
      const {courseId, moduleId} = useParams();

      return (<div>
        <h2>
          Lessons
        </h2>
        <ul className="nav nav-tabs">
          {
            lessons.map(lesson =>
                <li className="nav-item">
                    <EditableItem
                        to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}/`}
                        updateItem={updateLesson}
                        deleteItem={deleteLesson}
                        item={lesson}
                    />
                </li>
            )
          }
          <li className='list-group-item'>
            <i onClick={createLesson}
               className="rac-plus-icon fas fa-plus fa-2x"></i>
          </li>
        </ul>
      </div>
      )
    }

//Read from the state
const stpm = (state) => ({
  lessons: state.lessonReducer.lessons
})

//MAniupulate the state
const dtpm = (dispatch) => {
  return {
    createLesson: () => dispatch({type: "CREATE_LESSON"}),
    deleteLesson: (item) => dispatch({type: "DELETE_LESSON", lessonToDelete: item}),
    updateLesson: (lesson) => dispatch({type: "UPDATE_LESSON", lesson})
  }
}

export default connect(stpm, dtpm)
  (LessonTabs);