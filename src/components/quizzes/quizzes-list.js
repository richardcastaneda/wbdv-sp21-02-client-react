import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import "./quizzes-list.css";

const QuizzesList = () => {

  const {cid} = useParams();
  const [quizzes, setQuizzes] = useState([])
  useEffect(() => {
    fetch("https://pure-shore-12573.herokuapp.com/api/quizzes")
    .then(response => response.json())
    .then((quizzes) => {
      setQuizzes(quizzes)
    })
  }, [])

    return(
      <div>
        <h2>
          Quizzes ({quizzes.length})
        </h2>
        <ul className="list-group">
          {
            quizzes.map((quiz) => {
              return(
                  <li className="list-group-item">
                    {quiz.title}
                    <button className="btn btn-primary rac-button float-right"> <Link to={`/courses/${cid}/quizzes/${quiz._id}`}>
                      Start
                    </Link></button>
                  </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  export default QuizzesList