import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions";

const Quiz = () => {

  const {cid, qid} = useParams();
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    //MOVE THIS TO A SERVICE FILE
    fetch(`http://localhost:4000/api/quizzes/${qid}/questions`)
    .then(response => response.json())
    .then((questions) => {
      setQuestions(questions)
    })
  }, [])
  return(
      <div>
        <h3>Quiz {qid}</h3>
        <ul>
          {
            questions.map((question) => {
              return(
                  <li>
                    <Question question={question}/>
                  </li>
              )
            })
          }
        </ul>

      </div>
  )
}

export default Quiz