import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {Link, useParams} from 'react-router-dom';
import topicService from "../../services/topic-service";

const TopicPills = (
    {
      topics=[],
      createTopics,
      deleteTopics,
      findTopics,
      updateTopics,
    }) =>
  {
  const {courseId, moduleId, lessonId, layout, topicId} = useParams();
  useEffect(() => {
    if(lessonId !== "undefined" && typeof lessonId !== "undefined")
      findTopics(lessonId)
  }, [lessonId])

  return (
      <div>
        <h2>
          Topics {topics.length}
        </h2>
        <ul className="nav nav-tabs">
          {
            topics.map(topic =>
                <li className={`rac - selectable - group nav-item ${topic._id === topicId ? 'active' : ''}`}>
                  <a className="nav-link" href="#">
                    <EditableItem
                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/${topic._id}/`}
                        updateItem={updateTopics}
                        deleteItem={deleteTopics}
                        item={topic}
                    />
                  </a>
                </li>
            )
          }
          <li className='list-group-item'>
            <i onClick={createTopics}
               className="rac-plus-icon fas fa-plus fa-2x"></i>
          </li>
        </ul>
      </div>
  )
}

//Read from the state
const stpm = (state) => ({
  topics: state.topicReducer.topics
})

//MAniupulate the state
const dtpm = (dispatch) => ({
  createTopics: (lessonId) =>
      topicService.createTopics(lessonId, {title: "New Topics"})
      .then(theActualTopic =>
          dispatch({
            type: "CREATE_TOPIC",
            topic: theActualTopic
          })),
  deleteTopics: (item) =>
      topicService.deleteTopics(item._id)
      .then(status =>
          dispatch({
            type: "DELETE_TOPIC",
            topicToDelete: item
          })),
  updateTopics: (topic) => topicService.updateTopics(topic._id, topic)
  .then(status =>
      dispatch({
        type: "UPDATE_TOPIC",
        topic
      })),

  findTopics: (lessonId) => {
    topicService.findTopics(lessonId)
    .then(topics => dispatch ({
      type: "FIND_TOPICS",
      topics
    }))
  },
})
export default connect(stpm, dtpm)
(TopicPills);