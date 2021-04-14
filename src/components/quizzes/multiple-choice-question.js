import React, {useState} from "react";
import {Link} from "react-router-dom";

const MultipleChoiceQuestion = ({question}) => {
  const [userAnswer, setUserAnswer] = useState([])
  const [submit, setSubmit] = useState([])
  return(
      <div>
        <h5>{question.question}
        {
          submit === true &&
          question.correct === userAnswer &&
          <i className="fas fa-check"></i>
        }
        {
          submit == true && question.correct !== userAnswer &&
          <i className="fas fa-times"></i>
        }
      </h5>
      <ul className="list-group">
        {
          question.choices.map((choice) => {
            return(
                <li className={`list-group-item
                ${submit === true && userAnswer === question.correct ? 'list-group-item' : 'list-group-item'}`}>
                  <label><input
                      onClick={()=> {
                        setUserAnswer(choice)
                      }}
                      type="radio"
                      name={question._id}/>{choice}
                  </label>
                </li>
            )
          })
        }
      </ul>
      <p>
        Your answer: {userAnswer}
      </p>
        <button onClick={() => {
          setSubmit(true);
          document.getElementsByName(userAnswer._id).attribute = 'list-group-item-success'
        }}
        className="btn btn-primary rac-button float-right">Submit</button>
  </div>
  )
}

export default MultipleChoiceQuestion