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
import WidgetList from "./widgets/widget-list";
import widgetReducer from "../../reducers/widget-reducer";


// Two sub reducers contributing to the overall state, super reducer
const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer,
  widgetReducer: widgetReducer
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
          <div className="col-3">
            <ModuleList/>
          </div>
          <div className="col-9">
            <LessonTabs/>
            <br/>
            <TopicTabs/>
            <br/>
            <WidgetList/>
          </div>
        </div>
      </div>
    </Provider>
  )
}
export default CourseEditor;