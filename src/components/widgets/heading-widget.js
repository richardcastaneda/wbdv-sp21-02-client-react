import React, {useState} from 'react'
import widgetService from "../../services/widget-service";
import {connect} from "react-redux";

const HeadingWidget = (
    {
  widget,
  editing,
  item={},
  updateWidget,
    }) => {
  const [cachedHeading, setCachedHeading] = useState(item);
  return(
      <>
        {
          editing &&
          <>
            <input
                onChange = {(edits) => setCachedHeading({
                ...cachedHeading,
                title: edits.target.value
                })}
                placeholder={widget.text} className="form-control"></input>
            <select className="form-control">
              <option value={1}>Heading 1</option>
              <option value={2}>Heading 2</option>
              <option value={3}>Heading 3</option>
              <option value={4}>Heading 4</option>
              <option value={5}>Heading 5</option>
              <option value={6}>Heading 6</option>
            </select>
          </>
        }
        {
          !editing &&
            <>
              {widget.size === 1 && <h1>{widget.text}</h1>}
              {widget.size === 2 && <h2>{widget.text}</h2>}
              {widget.size === 3 && <h3>{widget.text}</h3>}
              {widget.size === 4 && <h4>{widget.text}</h4>}
              {widget.size === 5 && <h5>{widget.text}</h5>}
              {widget.size === 6 && <h6>{widget.text}</h6>}
            </>
        }
      </>
  )
}

// //Read from the state
// const stpm = (state) => ({
//   widgets: state.widgetReducer.widgets
// })
//
// //Manipulate the state
// const dtpm = (dispatch) => ({
//
//   deleteWidget:(wid) =>
//       widgetService.deleteWidget(wid)
//       .then(status =>
//           dispatch({
//             type: "DELETE_WIDGET",
//             widgetToDelete: wid
//           })),
//
//   updateWidget: (wid, widget) => widgetService.updateWidget(wid, widget)
//   .then(theNewWidget =>
//       dispatch({
//         type: "UPDATE_WIDGET",
//         theNewWidget: theNewWidget
//       }))
// })

export default HeadingWidget

