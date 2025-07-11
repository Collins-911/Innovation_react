import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/course.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';
import BASE_URL from "../utils/constants.js";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("user"));
        const token = userData?.token;

        if (!token) {
          console.error("No token found. Please login.");
          setLoading(false);
          return;
        }

        const response = await axios.get(`${BASE_URL}/courses/68593873e6ffbdaf335ead02/getCourse`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCourses(response.data.courses || []);
        console.log("Fetched courses:", response.data.courses);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="home-content">
      <Sidebar />
      <div className="top-content">
        <Topnav />
        <section className="content">
          <div className="courses-title">
            <h4>All Courses</h4>
            <p>Courses / <span>All courses</span></p>
          </div>

          {loading ? (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading courses...</p>
          ) : courses.length === 0 ? (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>No courses available.</p>
          ) : (
            <div className="courses-grid">
              <div className="course-contain">
                {courses.map((course, index) => (
                  <div key={index} className="course-item">
                    <div className="course-content">
                      <h4>{course.name}</h4>
                      <p>Lessons: {course.lessons}</p>
                      <p>Duration: {course.duration}</p>
                      <p>{course.description}</p>
                    </div>
                    <img
                      src={course.image || "https://via.placeholder.com/300x160.png?text=No+Image"}
                      alt={course.name}
                      className="course-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
