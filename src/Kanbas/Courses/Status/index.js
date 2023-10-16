import db from "../../Database";
import { useParams } from "react-router-dom";

function Status() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div className='col-3 d-none d-lg-block'>
            <h5>Course Status</h5>
                <div className="btn-group">
                  <button className="btn btn-light">Unpublish</button>
                  <button className="btn btn-success">Published
                      <i className="fa-solid fa-circle-check"></i></button>
                </div>
                <div className="btn-group-vertical">
                    <button className="btn btn-outline-secondary">
                      <i className="fa-solid fa-file-import"></i>
                      Import Existing Content</button>
                    <button className="btn btn-outline-secondary">
                      <i className="fa-regular fa-circle-right"></i>
                      Import from Commons</button>
                    <button className="btn btn-outline-secondary">
                      <i className="fa-solid fa-bullseye"></i>
                      Choose Home Page</button>
                    <button className="btn btn-outline-secondary">
                      <i className="fa-solid fa-chart-simple"></i>
                      View Course Stream</button>
                    <button className="btn btn-outline-secondary">
                      <i className="fa-solid fa-bullhorn"></i>
                      New Announcement</button>
                    <button className="btn btn-outline-secondary">
                      <i className="fa-solid fa-chart-simple"></i>
                      New Analytics</button>
                    <button className="btn btn-outline-secondary">
                      <i className="fa-regular fa-bell"></i>
                      View Course Notifications</button>
                </div>
                <h5>Coming Up</h5>
                <ul>
                  <li>
                    <p>Lecture {course._id}</p>
                    <p>Sep 11 at 11:45am</p>
                  </li>
                  <li>
                    <p>Assignment 3</p>
                    <p>Sep 18 at 12pm</p>
                  </li>
                </ul>
        </div>
    );
}

export default Status;