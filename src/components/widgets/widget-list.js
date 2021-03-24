import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from "../../services/widget-service";

const WidgetList = (
    {
      widgets=[],
        createWidget,
        deleteWidget,
        findWidget,
        updateWidget,
    }) =>
{
  const {topicId} = useParams();
  const [selectedWidget, setSelectedWidget] = useState({});
  useEffect(() => {
    if(typeof topicId !== undefined && topicId !== "undefined")
      findWidget(topicId)
  }, [topicId])

  return (
      <div>
        <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
        <h2>
          Widget List
          <ul className="list-group">
            {
              widgets.map(widget =>
              <li className="list-group-item" key={widget.id}>
                {
                  selectedWidget.id === widget.id &&
                      <>
                        <i onClick={() => {
                          updateWidget(widget.id, selectedWidget)
                          setSelectedWidget({})}} className="fas fa-check float-right"></i>
                        <i onClick={() => {
                          deleteWidget(widget.id)
                          setSelectedWidget({})}}className="fas fa-trash float-right"></i>
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

//Read from the state
const stpm = (state) => ({
  widgets: state.widgetReducer.widgets
})

//Manipulate the state
const dtpm = (dispatch) => ({
  createWidget: (topicId) =>
    widgetService.createWidget(topicId, {type: "HEADING", text: "New Widget", size: 1})
    .then(theActualWidget =>
        dispatch({
          type: "CREATE_WIDGET",
          theActualWidget: theActualWidget
        })),

  deleteWidget:(wid) =>
    widgetService.deleteWidget(wid)
    .then(status =>
        dispatch({
          type: "DELETE_WIDGET",
          widgetToDelete: wid
        })),

  updateWidget: (wid, widget) => widgetService.updateWidget(wid, widget)
  .then(theNewWidget =>
      dispatch({
        type: "UPDATE_WIDGET",
        theNewWidget: theNewWidget
      })),

  findWidget: (topicId) => {
    widgetService.findWidgetsForTopic(topicId)
    .then(theWidgets => dispatch ({
      type: "FIND_ALL_WIDGETS_FOR_TOPIC",
      widgets: theWidgets
    }))
  }
})

export default connect(stpm, dtpm)
(WidgetList);