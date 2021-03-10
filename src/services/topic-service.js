const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/castanedar/lessons";
const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/castanedar/topics";

export const findTopics = (moduleId) =>
    fetch(`${LESSONS_URL}/${moduleId}/lessons`)
    .then(response => response.json())

export const createTopics = (moduleId, newLesson) =>
    fetch(`${LESSONS_URL}/${moduleId}/lessons`, {
      method: "POST",
      body: JSON.stringify(newLesson),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const updateTopics = (lessonId, lesson) =>
    fetch(`${TOPICS_URL}/${lessonId}`, {
      method: "PUT",
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const deleteTopic = (lessonId) =>
    fetch(`${TOPICS_URL}/${lessonId}`, {
      method: "DELETE"
    })
    .then(response => response.json())

export default {
  findTopics,
  createTopics,
  updateTopics,
  deleteTopic
}