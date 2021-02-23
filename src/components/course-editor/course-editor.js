import React from 'react';
import {Link} from "react-router-dom";
import './courseeditor.style.client.css';

const CourseEditor = ({history}) =>
    <div>
      <body>
      <div className="rac-background-color">
        <div className="row">
          <div className="col-1 center rac-vertical-align">
            <Link to="/courses/table">
              <i onClick={() => history.goBack()}
                 className="fas fa-2x fa-times"></i>
            </Link>
          </div>
          <div
              className="col-3 rac-no-wrap center rac-white rac-vertical-align">
            <h3>CS5610 - Web Dev</h3>
          </div>
          <div className="col-7">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active rac-large" href="#">
                  Build
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link rac-large" href="#">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link rac-large" href="#">
                  Theme
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link rac-large" href="#">
                  Store
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link rac-large" href="#">
                  Apps
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link rac-large" href="#">
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="col-1 center rac-vertical-align">

            <i className="fas fa-plus fa-2x"></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-5 rac-black-background-color">
            <div className="nav flex-column nav-pills"
                 id="v-pills-tab"
                 role="tablist"
                 aria-orientation="vertical">
              <a className="nav-link active rac-pill-formatting"
                 id="v-module11"
                 data-toggle="pill"
                 href=""
                 role="tab"
                 aria-controls="v-pills-home"
                 aria-selected="true">
                Module 1 - jQuery
                <i className="fas fa-times fa-2x float-right"></i>
              </a>
              <a className="nav-link rac-pill-formatting"
                 id="v-module22"
                 data-toggle="pill"
                 href=""
                 role="tab"
                 aria-controls="v-pills-profile"
                 aria-selected="false">
                Module 2 - React
                <i className="fas fa-times fa-2x float-right"></i>
              </a>
              <a className="nav-link rac-pill-formatting"
                 id="v-module33"
                 data-toggle="pill"
                 href=""
                 role="tab"
                 aria-controls="v-pills-messages"
                 aria-selected="false">
                Module 3- Redux
                <i className="fas fa-times fa-2x float-right"></i>
              </a>
              <a className="nav-link rac-pill-formatting"
                 id="v-module44"
                 data-toggle="pill"
                 href=""
                 role="tab"
                 aria-controls="v-pills-settings"
                 aria-selected="false">
                Module 5 - Angular
                <i className="fas fa-times fa-2x float-right"></i>
              </a>
              <a className="nav-link rac-pill-formatting"
                 id="v-module55"
                 data-toggle="pill"
                 href=""
                 role="tab"
                 aria-controls="v-pills-settings"
                 aria-selected="false">
                Module 6 - Node
                <i className="fas fa-times fa-2x float-right"></i>
              </a>
              <a className="nav-link rac-pill-formatting"
                 id="v-module66"
                 data-toggle="pill"
                 href=""
                 role="tab"
                 aria-controls="v-pills-settings"
                 aria-selected="false">
                Module 7 - Mongo
                <i className="fas fa-times fa-2x float-right"></i>
              </a>
              <a className="nav-link"
                 id="v-module77"
                 data-toggle="pill"
                 href=""
                 role="tab"
                 aria-controls="v-pills-settings"
                 aria-selected="false"><i
                  className="fas fa-plus fa-2x float-right"></i></a>
            </div>
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-module1"
                   role="tabpanel" aria-labelledby="v-module1">...
              </div>
              <div className="tab-pane fade" id="v-module2" role="tabpanel"
                   aria-labelledby="v-module2">...
              </div>
              <div className="tab-pane fade" id="v-module3" role="tabpanel"
                   aria-labelledby="v-module3">...
              </div>
              <div className="tab-pane fade" id="v-module4" role="tabpanel"
                   aria-labelledby="v-module4">...
              </div>
              <div className="tab-pane fade" id="v-module5" role="tabpanel"
                   aria-labelledby="v-module5">...
              </div>
              <div className="tab-pane fade" id="v-module6" role="tabpanel"
                   aria-labelledby="v-module6">...
              </div>
              <div className="tab-pane fade" id="v-module7" role="tabpanel"
                   aria-labelledby="v-module7">...
              </div>
            </div>
          </div>
          <div className="col-6 rac-white-background-color">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Topic 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Topic 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Topic 3
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Topic 4
                </a>
              </li>
            </ul>
            Content Intentionally left blank
          </div>
        </div>
      </div>
      </body>
    </div>

export default CourseEditor;