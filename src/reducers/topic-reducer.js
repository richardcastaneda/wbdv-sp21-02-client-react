const initialState =  {
  topics: [
    {_id: '123', title: "topic 123"},
    {_id: '234', title: "topic 234"},
    {_id: '345', title: "topic 345"},
  ]
}

const topicReducer = (state=initialState, action) => {
  switch(action.type){
    case "CREATE_TOPIC":
      const newState = {
        topics:
            [
              ...state.topics,
              {
                title: "New Topic",
                _id: (new Date().getTime()) //to be removed
              }
            ]
      }
      return newState;

    case "DELETE_TOPIC":
      const newState2 = {
        topics:
            state.topics.filter(topic => {
              if(topic._id === action.topicToDelete._id) {
                return false
              } else {
                return true
              }
            })
      }
      return newState2;

    case "UPDATE_TOPIC":
      return {
        topics:
            state.topics.map(topic => {
              if(topic._id === action.topic._id) {
                return action.topic;
              } else {
                return topic;
              }
            })
      }
    default:
      return state;
  }
}

export default topicReducer;