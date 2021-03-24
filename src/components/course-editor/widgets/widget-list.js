import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import HeadingWidget from "../../widgets/heading-widget";
import ParagraphWidget from "../../widgets/paragraph-widget";
import {useParams} from "react-router-dom";

const WidgetList = () =>
{
  const {topicId} = useParams();

  //TODO: Move State management to widget-reducer
  const [widgets, setWidgets] = useState([])
  const [selectedWidget, setSelectedWidget] = useState({});
  useEffect( () => {
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
    .then(response => response.json())
    .then(widgets => setWidgets(widgets))

  },[topicId])


  //GOING TO REDUCER
  const CreateWidgetForTopic = () =>
  fetch(`http://localhost:8080/api/topics/${topicId}/widgets`,{
  method: "POST",
  body: JSON.stringify({type: "HEADING", size: 1, text: "new Widget"}),
  headers: {
    'content-type': 'application/json'
    }
  })
    .then(response => response.json)
    .then(actualWidget => {
      setWidgets(widgets => ([...widgets, actualWidget]))
})

  const deleteWidget = (wid) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
     method: "DELETE",
    }).then(response => {
      setWidgets((widgets) =>
        widgets.filter(w => w.id !== wid))
    })

  const updateWidget = (wid, widget) => {
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
      method: "PUT",
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      setWidgets((widgets) => widgets.map(w => w.id !== wid ? w: widget))
    })
  }
  return (
      <div>
        <i onClick={CreateWidgetForTopic} className="fas fa-plus fa-2x float-right"></i>
        <h2>
          Widget List ({selectedWidget.id})
          <ul className="list-group">
            {
              widgets.map(widget =>
              <li className="list-group-item" key = {widget.id}>
                {
                  selectedWidget.id === widget.id &&
                      <>
                        <i onClick={() => {
                          updateWidget(widget.id, selectedWidget)
                          setSelectedWidget({})}} className="fas fa-check float-right"></i>
                        <i onClick={() => {
                          deleteWidget(widget.id)
                          setSelectedWidget({})}} className="fas fa-trash float-right"></i>
                      </>
                }
                {
                  selectedWidget.id !== widget.id &&
                      <>
                        <i onClick={() => setSelectedWidget(widget)} className="fas fa-cog float-right"></i>
                      </>
                }
                {
                  widget.type === "HEADING" &&
                  <HeadingWidget
                      editing={selectedWidget.id === widget.id}
                      widget = {widget}/>
                }
                {
                  widget.type === "PARAGRAPH" &&
                  <ParagraphWidget
                      editing={selectedWidget.id === widget.id}
                      widget = {widget}/>
                }
              </li>
              )
            }
          </ul>
        </h2>
      </div>
  )
}
/*
//Read from the state
const stpm = (state) => ({
  widgets: state.widgetReducer.widgets
})

//Manipulate the state
const dtpm = (dispatch) => ({
  createWidget: (topicId) =>
    widgetService.createTopic(topicId, {title: "New Widget"})
    .then(theActualWidget =>
        dispatch({
          type: "CREATE_WIDGET",
          topic: theActualWidget
        })),

  deleteWidget:(item) =>
    widgetService.deleteWidget(item._id)
    .then(status =>
        dispatch({
          type: "DELETE_WIDGET",
          widgetToDelete: item
        })),

  updateWidget: (widget) => widgetService.updateWidget(widget._id, widget)
  .then(status =>
      dispatch({
        type: "UPDATE_WIDGET",
        widget
      })),

  findWidget: (topicId) => {
    widgetService.findWidget(topicId)
    .then(widgets => dispatch ({
      type: "FIND_WIDGETS_FOR_TOPIC",
      widgets
    }))
  }
})**/

export default WidgetList;