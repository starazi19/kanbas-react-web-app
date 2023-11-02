import {React, useState} from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free";
import "./index.css";
import db from "../Database";
import yellow1 from "../Images/yellow1.jpg";
import yellow2 from "../Images/yellow2.jpg";
import yellow3 from "../Images/yellow3.jpg";

function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }
) {
  const imgs = [yellow1, yellow2, yellow3];

  return (
    <div>
      <h1>Dashboard</h1>
      <h5>Course Editor</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} className="btn btn-outline-danger">
        <i className = "fa-regular fa-plus"></i>
        Add Course</button>
      <button className="btn btn-outline-secondary" onClick={updateCourse} >
        Update
      </button>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 wd-course-card-grid">
        {courses.map((course, index) => (
          <div className="col">
            <div className="card h-100">
            <img className="card-img-top" src={imgs[index % 3]} alt="yellow rectangle"></img>
              <div className="card-body">
                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}>
                    <h5 className="card-title">{course.name}</h5>
                  </Link>
                  <p className="card-text">{course.number}</p>
                  <p className="card-text"><small className="text-muted">{course.startDate}</small></p>
                   <i className="fa-solid fa-square-pen fa-lg"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                    </i>
                    <i className="fa-solid fa-trash fa-lg"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                    </i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;