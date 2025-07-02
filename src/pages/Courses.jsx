import React, { useEffect, useState } from "react";
import '../css/course.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';
import Dbase from '../assets/Dbase.jpg';
import Dmarket from '../assets/Dmarket.jpg';
import Dscience from '../assets/Dscience.jpg';
import axios from 'axios';
import * as constant from '../utils/constants.js';
import { useNavigate } from "react-router-dom";
import { isAuthenticated, getToken } from '../utils/authService';

export default function Courses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      if (!isAuthenticated()) {
        alert("You are not authenticated. Please log in.");
        navigate('/');
        return;
      }

      try {
        const token = getToken();

        const response = await axios.get(`${constant.default}/courses/getCourse`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setCourses(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          console.log("User not authenticated. Please login.");
          navigate('/');
        } else {
          console.error("Error fetching courses:", error);
          alert('Error fetching courses.');
        }
      }
    };

    getCourses();
  }, [navigate]);

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

          <div className="courses-grid">
            <div className="course-contain">
              {courses.map((course) => (
                <div className="course-item" key={course._id}>
                  <div className="course-content">
                    <h4>{course.name}</h4>
                    <p>Lessons: {course.lessons}</p>
                    <p>Duration: {course.duration}</p>
                  </div>
                  <img src={course.image || Dbase} alt={course.name} className="course-image" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
