import { Link } from "react-router-dom";
import db from "../Database";
import "@fortawesome/fontawesome-free";
import "./index.css";
import yellow1 from "../Images/yellow1.jpg";
import yellow2 from "../Images/yellow2.jpg";
import yellow3 from "../Images/yellow3.jpg";

function Dashboard() {
  const courses = db.courses;
  const imgs = [yellow1, yellow2, yellow3];
  return (
    <div>
      <h1>Dashboard</h1>
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
                </Link>
                <p className="card-text">{course.number}</p>
                <p className="card-text"><small className="text-muted">{course.startDate}</small></p>

                <i className="far fa-pen-to-square"></i> 
                <i className="far fa-comments"></i> 
                <i className="far fa-folder-closed"></i>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;