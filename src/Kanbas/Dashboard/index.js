import {React, useState} from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "@fortawesome/fontawesome-free";
import "./index.css";
import yellow1 from "../Images/yellow1.jpg";
import yellow2 from "../Images/yellow2.jpg";
import yellow3 from "../Images/yellow3.jpg";

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const imgs = [yellow1, yellow2, yellow3, yellow1, yellow2, yellow3  ];
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses,
              { ...course,
                _id: new Date().getTime() }]);
  };
  const deleteCourse = (index) => {
    const newCourses = courses.filter((course, i) => i !== index);
    setCourses(newCourses);
  }
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
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
      <button onClick={addNewCourse} className="btn btn-light">Add Course</button>
      <button onClick={updateCourse} >
        Update
      </button>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 wd-course-card-grid">
        {courses.map((course, index) => (
          <div className="col">
            <div className="card h-100">
            <img className="card-img-top" src={imgs[index]} alt="yellow rectangle"></img>
              <div className="card-body">
                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}>
                    <h5 className="card-title">{course.name}</h5>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                      Edit
                    </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>
                  </Link>
                  <p className="card-text">{course.number}</p>
                  <p className="card-text"><small className="text-muted">{course.startDate}</small></p>

                  <i className="far fa-pen-to-square"></i> 
                  <i className="far fa-comments"></i> 
                  <i className="far fa-folder-closed"></i>
                  {/* <i className="far fa-trash-alt" onClick={() => deleteCourse(index)}></i> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;