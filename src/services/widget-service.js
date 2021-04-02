const remoteURL = "https://wbdv-generic-server.herokuapp.com/api/castanedar"
const localURL = "http://localhost:8080/api/widgets"

const findWidgetsForTopic = (topicId) =>
  fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
  .then(response => response.json())


const deleteWidget = (wid) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
      method: "DELETE",
    }).then(response => response.json())


const updateWidget = (wid, widget) =>
  fetch(`http://localhost:8080/api/widgets/${wid}`, {
    method: "PUT",
    body: JSON.stringify(widget),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())


const createWidget = (topicId) =>
  fetch(`http://localhost:8080/api/topics/${topicId}/widgets`,{
    method: "POST",
    body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response1 => response1.json)

export default {
  findWidgetsForTopic,
  createWidget,
  updateWidget,
  deleteWidget
}
