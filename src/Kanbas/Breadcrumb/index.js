import React from "react";
import db from "../Database";
import { Link, useParams, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free";
import "./index.css";

function Breadcrumb() {
    const pages = ["Modules", "Assignments", "Grades", "Home"]
    const courses = db.courses;
    const { pathname } = useLocation();
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const assignments = db.assignments;
    const { assignmentId } = useParams();
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);

    return (
        <div className="wd-breadcrumb">
            <Link to={`/Kanbas/Courses/${courseId}`}>
                {course.number}
            </Link>
            <i className="fa-solid fa-chevron-right"></i>
            {pages.map((page) => (
                pathname.includes(page) && 
                <Link to={`/Kanbas/Courses/${courseId}/${page}`}>
                   <h2>{page}</h2>
                </Link>
            ))}
            {/* {assignments.map((assignment) => (
                pathname.includes(assignmentId) &&
                <div>
                    <i className="fa-solid fa-chevron-right"></i>
                    <h2>{assignment.title}</h2>
                </div>
            ))} */}
            {assignment && pathname.includes(assignmentId) && (
                <div>
                    <i className="fa-solid fa-chevron-right"></i>
                    <h2>{assignment.title}</h2>
                </div>
            )}
        </div>
    );
}

export default Breadcrumb;