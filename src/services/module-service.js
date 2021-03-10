const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/castanedar/courses6"
const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/castanedar/modules"


export const createModuleForCourse = (courseId, newModule) =>
    fetch(`${COURSES_URL}/${courseId}/modules`, {
      method: "POST",
      body: JSON.stringify(newModule),
      headers: {
        'content-type': 'application/json'
      }
    })
.then(response => response.json())

export const updateModuleForCourse = (moduleId, module) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
      method: "PUT",
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const deleteModuleFromCourse = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
          method: "DELETE"
    })
    .then(response => response.json())

export const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules/`)
      .then(response => response.json())

const api = {
  findModulesForCourse,
  createModuleForCourse,
  deleteModuleFromCourse,
  updateModuleForCourse
};

export default api;