import React from "react";
import '../css/course.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';
// import cybersecurity from '../assets/cybersecurity.jpg';
import Dbase from '../assets/Dbase.jpg';
import Dmarket from '../assets/Dmarket.jpg';
import Dscience from '../assets/Dscience.jpg';
import { MdMargin } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from 'axios';
import * as constant from '../utils/constants.js';
// import { getUser } from '../utils/authService.js';
import {useCookies} from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";






export default function Courses() {

  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [cookies] = useCookies(['token']);

  console.log("Cookies: ", cookies);
  const isAuthenticated = useCallback(() => {
    return cookies.token !== undefined && cookies.token !== null;
  }, [cookies.token]);

  useEffect(() => {
    const getCourses = async () => {

      try {

        if (!isAuthenticated()) {
          console.log("User not authenticated. Please login");
          navigate('/');
          return;
        }

        const response = await axios.get(`${constant.default}/courses/getCourse`, {
          withCredentials: true,
        });
        setCourses(response.data);

      } catch (error) {
        
				if (error.response.status === 401) {
					console.log("User not authenticated. Please login.");
					navigate('/');
				} else {
					console.log("Error fetching courses:", error);
					alert('Error getting all coursess: ', error);
			    }

      }

    };
    getCourses();
  }, [navigate, isAuthenticated, cookies.token]);


  return (
    <div className="home-content">
            <Sidebar />
              <div className="top-content">
                 <Topnav/>
                <section className="content">
                    <div className="courses-title">
                      <h4>All Courses</h4>
                      <p>Courses / <span>All courses</span></p>
                    </div>

            <div className="courses-grid">
            <div className="course-contain">
              {courses.map((course) => (
                <div className="course-item" key={course._id} >
                  <div className="course-content">
                    <h4>{course.name}</h4>
                    <p>Lessons: {course.lessons}</p>
                    <p>Duration: {course.duration}</p>
                  </div>
                  <img src={course.image || 'default-image.img'} alt={course.name} className="course-image" />
                </div>
              ))}

              {/* <div className="course-item">
                < div className="course-content">
                  <h4>Back-end web development</h4>
                  <p>Lessons: 41</p>
                  <p>Duration: 4 months</p>
                </div>
                <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Back-end Development" className="course-image" />
              </div>

              <div className="course-item">
                <div className="course-content">
                  <h4>Product Management</h4>
                  <p>Lessons: 25</p>
                  <p>Duration: 1.5 months</p>
                </div>
                <img src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Management" className="course-image" />
              </div>

              <div className="course-item">
                <div className="course-content">
                  <h4>Product Design</h4>
                  <p>Lessons: 30</p>
                  <p>Duration: 2 months</p>
                </div>
                <img src="https://i.pinimg.com/736x/1f/f7/3c/1ff73c0e87d459565017d07fdfa3725c.jpg" alt="Product Design" className="course-image" />
              </div>

              <div className="course-item">
                <div className="course-content">
                  <h4>Mobile App Development</h4>
                  <p>Lessons: 50</p>
                  <p>Duration: 3 months</p>
                </div>
                <img src={Dscience} alt="Mobile App Development" className="course-image" />
              </div>

              <div className="course-item">
                <div className="course-content">
                  <h4>Data Science</h4>
                  <p>Lessons: 60</p>
                  <p>Duration: 3 months</p>
                </div>
                <img src={Dmarket} alt="Data Science" className="course-image" />
              </div>

              <div className="course-item">
                <div className="course-content">
                  <h4>Digital Marketing</h4>
                  <p>Lessons: 40</p>
                  <p>Duration: 1.5 months</p>
                </div>
                <img src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg" alt="Digital Marketing" className="course-image" />
              </div>

              <div className="course-item">
                <div className="course-content">
                  <h4>DevOps Engineering</h4>
                  <p>Lessons: 35</p>
                  <p>Duration: 2 months</p>
                </div>
                <img src="https://i.pinimg.com/736x/f7/73/19/f7731997b5af048b484277ed8c0b3493.jpg" alt="DevOps Engineering" className="course-image" />
              </div>

              <div className="course-item">
                <div className="course-content">
                  <h4>Database Administration</h4>
                  <p>Lessons: 28</p>
                  <p>Duration: 1.5 months</p>
                </div>
                <img src={Dbase} alt="Database Administration" className="course-image" />
              </div>

              <div className="course-item">
                <div className="course-content">
                  <h4>Surveillance Systems</h4>
                  <p>Lessons: 30</p>
                  <p>Duration: 2 months</p>
                </div>
                <img src="https://images.pexels.com/photos/7534101/pexels-photo-7534101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Surveillance Systems" className="course-image" />
              </div>

              <div className="course-item last-course-item">
                <div className="course-content">
                  <h4>Cybersecurity</h4>
                  <p>Lessons: 10</p>
                  <p>Duration: 1 month</p>
                </div>
                <img src={cybersecurity} alt="Cybersecurity" className="course-image" />
              </div> */}
            </div>
          </div>
        </section>
          
      </div>
    </div>
  );
}