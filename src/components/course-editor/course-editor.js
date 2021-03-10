import React from 'react';
import {Link, useParams} from "react-router-dom";
import './courseeditor.style.client.css';
import moduleReducer from "../../reducers/modules-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from 'react-redux';
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicTabs from "./topic-pills";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";

// Two sub reducers contributing to the overall state, super reducer
const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer
})

const store = createStore(reducer)

const CourseEditor = () => {
  const {courseId, layout} = useParams();
  return (
    <Provider store={store}>
      <div className="container">
        <h2>
          <Link to={`/courses/${layout}`}>
            <i className="fas fa-times"></i>
          </Link>
          Course Editor {}
        </h2>
        <div className="row">
          <div className="col-4">
            <ModuleList/>
          </div>
          <div className="col-8">
            <LessonTabs/>
            <TopicTabs/>
          </div>
        </div>
      </div>
    </Provider>
  )
}
export default CourseEditor;