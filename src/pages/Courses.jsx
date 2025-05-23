import React from "react";
import '../css/course.css';
import Navbar from '../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';
import cybersecurity from '../assets/cybersecurity.jpg';
import Dbase from '../assets/Dbase.jpg';
import Dmarket from '../assets/Dmarket.jpg';
import Dscience from '../assets/Dscience.jpg';
import { MdMargin } from "react-icons/md";






export default function Courses() {
  return (
    <div className="home-content">
            <Navbar/>
              <div className="top-content">
                 <Topnav/>
                <section className="content">
                    <div className="courses-title">
                      <h4>All Courses</h4>
                      <p>Courses / <span>All courses</span></p>
                    </div>

            <div className="courses-grid">
            <div className="course-contain">
              <div className="course-item" >
                <div className="course-content">
                  <h4>Front-end web development</h4>
                  <p>Lessons: 163</p>
                  <p>Duration: 2 months</p>
                </div>
                <img src="https://i.pinimg.com/736x/b9/1a/50/b91a501d1e7745e2d6301bed895bd272.jpg" alt="Front-end Development" className="course-image" />
              </div>

              <div className="course-item">
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
                <img src="https://www.cyberark.com/wp-content/uploads/2019/06/DevOps.jpg" alt="DevOps Engineering" className="course-image" />
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}