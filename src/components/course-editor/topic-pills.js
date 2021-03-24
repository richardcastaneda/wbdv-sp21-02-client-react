import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {Link, useParams} from 'react-router-dom';
import topicService from "../../services/topic-service";

const TopicPills = (
    {
      topics=[],
      createTopic,
      deleteTopic,
      findTopic,
      updateTopic,
    }) =>
  {
    const {courseId, moduleId, lessonId, topicId, layout} = useParams();

    useEffect(() => {
      if(typeof lessonId !== undefined && typeof lessonId !== "undefined")
        findTopic(lessonId)
    }, [lessonId, moduleId, topicId])

    return (
      <div>
        <h2>
          Topics
        </h2>
        <ul className="nav nav-pills">
          {
            topics.map(topic =>
              <li className={`rac-selectable-group nav-item ${topic._id === topicId ? 'active' : ''}`}>
              <EditableItem
                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/ABC123/`}
                updateItem={updateTopic}
                deleteItem={deleteTopic}
                item={topic}
              />
              </li>
            )
          }
          <li className='list-group-item'>
            <i onClick={() => createTopic(lessonId)}
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
  createTopic: (lessonId) =>
      topicService.createTopic(lessonId, {title: "New Topic"})
      .then(theActualTopic =>
          dispatch({
            type: "CREATE_TOPIC",
            topic: theActualTopic
          })),
  deleteTopic: (item) =>
      topicService.deleteTopic(item._id)
      .then(status =>
          dispatch({
            type: "DELETE_TOPIC",
            topicToDelete: item
          })),
  updateTopic: (topic) => topicService.updateTopic(topic._id, topic)
  .then(status =>
      dispatch({
        type: "UPDATE_TOPIC",
        topic
      })),

  findTopic: (lessonId) => {
    topicService.findTopic(lessonId)
    .then(topics => dispatch ({
      type: "FIND_TOPICS_FOR_LESSON",
      topics
    }))
  },
})

export default connect(stpm, dtpm)
(TopicPills);