import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className='wd-modules'>
      <ul className="list-group">
        {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <i className="fa-solid fa-grip-vertical"></i>
              <i className='fas fa-circle-check'></i>
              <h3>{module.name}</h3>
            </li>
        ))
        }
      </ul>
    </div>
  );
}
export default ModuleList;