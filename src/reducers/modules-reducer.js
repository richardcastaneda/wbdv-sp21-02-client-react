const initialState = {
 modules: []
}

const moduleReducer = (state=initialState, action) => {
  switch (action.type) {
    case "FIND_MODULES_FOR_COURSE":
      return {
        ...state,
        modules: action.modules
      }
    case "CREATE_MODULE":
      const newState = {
        modules:
        [
          ...state.modules,
          action.module
        ]
      }
      return newState;

    case "DELETE_MODULE":
      const newState2 = {
        modules:
            state.modules.filter(module => {
              if(module._id === action.moduleToDelete._id) {
                return false
              } else {
                return true
              }
            })
      }
      return newState2;

    case "UPDATE_MODULE":
      return {
        modules:
          state.modules.map(module => {
            if (module._id === action.module._id){
              return action.module;
            } else {
              return module;
            }
          })
      }
    default:
      return state
  }
}
export default moduleReducer