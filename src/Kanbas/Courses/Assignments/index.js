import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "@fortawesome/fontawesome-free";
import "./index.css";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
        <div className="wd-assignments btn-group">
            <input type="text" placeholder="Search for Assignment" className="form-control"/>
            <button className="btn btn-outline-secondary">
              <i className="fa-solid fa-search"></i></button>
            <button className="btn btn-outline-secondary">
              <i className="fa-solid fa-plus"></i>
              Group</button>
            <button className="btn btn-danger">
              <i className="fa-solid fa-plus"></i>
              Assignment</button> 
        </div>
      <h2>{courseId} Assignments </h2>
      <div className="wd-assignments">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            <i className="fa-solid fa-grip-vertical"></i>
            <i className="fas fa-book"></i>
            {assignment.title}
            <i className="fas fa-circle-check"></i>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;