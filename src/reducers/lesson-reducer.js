const initialState =  {
  lessons: []
}

const lessonReducer = (state=initialState, action) => {
switch(action.type){
  case "CREATE_LESSON":
    return{
      ...state,
      lessons: [
        ...state.lessons,
        action.lesson
      ]
    }

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

  case "FIND_LESSONS_FOR_MODULE":
    return {
      ...state,
      lessons: action.lessons
    }
  default:
    return state;
  }
}

export default lessonReducer;