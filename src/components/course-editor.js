import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
    <div>
        <h2>
            <Link to="/courses/table">
                <i onClick={() => history.goBack()}
                   className="fas fa-arrow-left"></i>
            </Link>
            Course Editor
        </h2>
        //COPY OF WHATEVER YOU HAVE IN THE BODY
    </div>

export default CourseEditor;