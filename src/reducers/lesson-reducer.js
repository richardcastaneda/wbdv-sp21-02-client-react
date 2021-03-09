const initialState =  {
  lessons: [
    {_id: '123', title: "Lesson 123"},
    {_id: '234', title: "Lesson 234"},
    {_id: '345', title: "Lesson 345"},
  ]
}

const lessonReducer = (state=initialState, action) => {
switch(action.type){
  case "CREATE_LESSON":
    const newState = {
      lessons:
        [
            ...state.lessons,
          {
            title: "New Lesson",
            _id: (new Date().getTime()) //to be removed
          }
        ]
    }
    return newState;

  case "DELETE_LESSON":
    const newState2 = {
      lessons:
        state.lessons.filter(lesson => {
          if(lesson._id === action.lessonToDelete._id) {
            return false
          } else {
            return true
          }
        })
    }
    return newState2;

  case "UPDATE_LESSON":
    return {
      lessons:
        state.lessons.map(lesson => {
          if(lesson._id === action.lesson._id) {
            return action.lesson;
          } else {
            return lesson;
          }
        })
    }
  default:
    return state;
}
}

export default lessonReducer;