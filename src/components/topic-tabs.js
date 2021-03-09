import React from 'react';
import {connect} from 'react-redux';
import EditableItem from "./editable-item";

const TopicTabs = (
    {
      topics=[],
      createTopic,
      deleteTopic,
      updateTopic,
    }) =>
    <div>
      <h2>
        Topics {topics.length}
      </h2>
      <ul className="nav nav-tabs">
        {
          topics.map(topic =>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <EditableItem
                      updateItem = {updateTopic}
                      deleteItem = {deleteTopic}
                      item = {topic}
                  />
                </a>
              </li>
          )
        }
        <li className='list-group-item'>
          <i onClick={createTopic} className="rac-plus-icon fas fa-plus fa-2x"></i>
        </li>
      </ul>
    </div>

//Read from the state
const stpm = (state) => ({
  topics: state.topicReducer.topics
})

//MAniupulate the state
const dtpm = (dispatch) => {
  return {
    createTopic: () => dispatch({type: "CREATE_TOPIC"}),
    deleteTopic: (item) => dispatch({type: "DELETE_TOPIC", topicToDelete: item}),
    updateTopic: (topic) => dispatch({type: "UPDATE_TOPIC", topic})
  }
}

export default connect(stpm, dtpm)
(TopicTabs);