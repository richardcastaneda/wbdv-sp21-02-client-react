import CourseManager from "./components/course-manager/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz-component";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Route path="/courses" exact={true}>
          <CourseManager/>
        </Route>
        <Route path="/courses/:cid/quizzes" exact={true}>
          <QuizzesList/>
        </Route>
        <Route path="/courses/:cid/quizzes/:qid" exact={true}>
          <Quiz/>
        </Route>
        <CourseManager/>
      </div>
    </BrowserRouter>
  );
}
export default App;
