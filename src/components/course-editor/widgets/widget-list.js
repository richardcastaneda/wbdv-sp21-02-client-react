import React, {useState, useEffect} from 'react';
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";

const WidgetList = () => {
  const {topicId} = useParams();
  console.log(topicId)
  //TODO: Move State managmement to widgest-reducer
  const [widgets, setWidgets] = useState([])
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
    .then(actualWidget => {
      setWidgets(widgets => ([...widgets, actualWidget]))
})
  return (
      <div>
        <i onClick={CreateWidgetForTopic} className="fas fa-plus fa-2x float-right"></i>
        <h2>
          Widget List ({widgets.length})
          <ul className="list-group">
            {
              widgets.map(widget =>
              <li className="list-group-item" key = {widget.id}>
                {
                  widget.type === "HEADING" &&
                  <HeadingWidget widget = {widget}/>
                }
                {
                  widget.type === "PARAGRAPH" &&
                  <ParagraphWidget widget = {widget}/>
                }
              </li>
              )
            }
          </ul>
        </h2>
      </div>
  )
}

export default WidgetList;