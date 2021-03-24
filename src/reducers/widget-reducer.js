const initialState = {
  widgets: []
}

const widgetReducer = (state=initialState, action) => {
  switch(action.type){
    case "CREATE_WIDGET":
      return{
        ...state,
        widgets: [
            ...state.widgets,
            action.theActualWidget
        ]
      }

    case "DELETE_WIDGET":
      const newState2 = {
        widgets:
            state.widgets.filter(widget => {
              if(widget.id === action.widgetToDelete) {
                return false
              } else {
                return true
              }
            })
      }
      return newState2;

    case "UPDATE_WIDGET":
      return {
        widgets:
            state.widgets.map(widget => {
              if(widget.id === action.theNewWidget.id) {
                return action.theNewWidget;
              } else {
                return widget;
              }
            })
      }

    case "FIND_ALL_WIDGETS_FOR_TOPIC":
      return {
        ...state,
        widgets: action.widgets
      }

    default:
      return state;
  }
}

export default widgetReducer;