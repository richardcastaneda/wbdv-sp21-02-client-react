const initialState = {
 modules: [
   {_id: 123, title: 'Module 123'},
   {_id: 234, title: 'Module 234'},
   {_id: 345, title: 'Module 345'}
 ]
}

const moduleReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_MODULE":
      const newState = {
        modules:
        [
            ...state.modules,
          {
            title: "New Module",
            _id: (new Date().getTime()) //To be removed
          }
        ]
      }
      return newState;
    case "DELETE_MODULE":
    case "UPDATE_MODULE": 
    default:
      return state
  }
}

export default moduleReducer