import React from "react";
import { Link, useParams } from "react-router-dom";
import "@fortawesome/fontawesome-free";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, setAssignment} from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();  

  return (
    <div>
        <div className="wd-assignments btn-group">
        <button
          onClick={() => dispatch(addAssignment({ ...assignments, course: courseId}))}>
          Add
        </button>
        <button
          onClick={() => dispatch(updateAssignment(assignment))}>
          Update
        </button>
        <input
          value={assignment.name}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignments, name: e.target.value }))
          }/>
        <textarea
          value={assignment.description}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignments, description: e.target.value }))
          }/>
        </div>
      <h2>{courseId} Assignments </h2>
      <ul> 
      <div className="wd-assignments">
        {courseAssignments.map((assignment) => (
          <li className="list-group-item">
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            <i className="fa-solid fa-grip-vertical"></i>
            <i className="fas fa-book"></i>
            {assignment.title}
            <i className="fas fa-circle-check"></i>
          </Link>
          <button
            onClick={() => dispatch(setAssignment(assignment))}>
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteAssignment(assignment._id))}>
            Delete
          </button>
          </li>
        ))}
      </div>
      </ul>
    </div>
  );
}
export default Assignments;