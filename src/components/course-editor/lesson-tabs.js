import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {Link, useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service';

const LessonTabs = (
    {
      lessons=[],
      deleteLesson,
      updateLesson,
      findLessonsForModule,
      createLessonForModule
    }) =>
    {
      const {layout, courseId, moduleId, lessonId} = useParams();

      useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== undefined)
        findLessonsForModule(moduleId)
      }, [moduleId])

      return (
        <div>
        <h2>
          Lessons
        </h2>
        <ul className="nav nav-tabs">
          {
            lessons.map(lesson =>
              <li className={`rac-selectable-group nav-link ${lesson._id === lessonId ? 'active' : ''}`}>
                <EditableItem
                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}/`}
                  updateItem={updateLesson}
                  deleteItem={deleteLesson}
                  item={lesson}
                />
              </li>
            )
          }
          <li className='list-group-item'>
            <i onClick={() => createLessonForModule(moduleId)}
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
const dtpm = (dispatch) => ({
    createLessonForModule: (moduleId) =>
        lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
        .then(theActualLesson =>
        dispatch({
          type: "CREATE_LESSON",
          lesson: theActualLesson
        })),
    deleteLesson: (item) =>
        lessonService.deleteLesson(item._id)
    .then(status =>
      dispatch({
        type: "DELETE_LESSON",
        lessonToDelete: item
      })),
    updateLesson: (lesson) => lessonService.updateLessonForModule(lesson._id, lesson)
  .then(status =>
    dispatch({
      type: "UPDATE_LESSON",
      lesson
    })),

    findLessonsForModule: (moduleId) => {
      lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch ({
          type: "FIND_LESSONS_FOR_MODULE",
          lessons
        }))
    },
})

export default connect(stpm, dtpm)
  (LessonTabs);