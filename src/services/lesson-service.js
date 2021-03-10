const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/castanedar/modules";
const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/castanedar/lessons";

export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
    .then(response => response.json())

export const createLessonForModule = (moduleId, newLesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
    method: "POST",
    body: JSON.stringify(newLesson),
    headers: {
    'content-type': 'application/json'
    }
})
.then(response => response.json())

export const updateLessonForModule = (lessonId, lesson) =>
    fetch(`${LESSONS_URL}/${lessonId}`, {
      method: "PUT",
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
.then(response => response.json())

export const deleteLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}`, {
      method: "DELETE"
    })
.then(response => response.json())

export default {
  findLessonsForModule,
  createLessonForModule,
  updateLessonForModule,
  deleteLesson
}
