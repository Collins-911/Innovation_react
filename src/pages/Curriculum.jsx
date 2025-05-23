import React from "react";
import '../css/curriculum.css';
import '../css/course.css';
import '../css/home.css';
import Navbar from '../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';
import payment from '../assets/payment.png';
import cybersecurity from '../assets/cybersecurity.jpg';
import Dbase from '../assets/Dbase.jpg';
import Dmarket from '../assets/Dmarket.jpg';
import Dscience from '../assets/Dscience.jpg';
import Mobile from '../assets/Mobile.jpg';
import pmanage from '../assets/pmanage.jpg';
import survey from '../assets/survey.jpg';
import webdev from '../assets/webdev.jpg';
import Pdesign from '../assets/Pdesign.jpg';
import Devops from '../assets/Devops.jpg';
import AI from '../assets/AI.jpg';

export default function Curriculum() {

  const studentClick = (e) => { e.preventDefault(); console.log("Student clicked"); };
  const curriculumClick = (e) => { e.preventDefault(); console.log("Curriculum clicked"); };
  const registerClick = (e) => { e.preventDefault(); console.log("Register clicked"); };
  const paymentClick = (e) => { e.preventDefault(); console.log("Payment clicked"); };
  const assignment = (e) => { e.preventDefault(); console.log("Assignment clicked"); };

  return (
    <div className="home-content">
      <Navbar />

      <div className="top-content">
        <Topnav />

        <section className="content">
          <div className="courses-title">
            <h4>Our Curriculum</h4>
            <p>Student / <span>Curriculum</span></p>
          </div>

          {/* First Row */}
          <div className="Curriculum-first-row">
            <div className="row1"><img src={pmanage} alt="UIUX" className="image-fit" /></div>
            <div className="row2"><img src={Pdesign} alt="Cybersecurity" className="image-fit" /></div>
            <div className="row3"><img src={Mobile} alt="Database" className="image-fit" /></div>
          </div>
          <div className="Curriculum-first-row-title">
            <div className="row1-title"><h3>Product Management</h3>
              <p>Focuses on guiding the development of a product from concept to launch...</p>
            </div>
            <div className="row2-title"><h3>Product Design</h3>
              <p>The process of imagining, creating, and iterating products that solve user problems...</p>
            </div>
            <div className="row3-title"><h3>Mobile App Development</h3>
              <p>Involves creating applications for mobile devices using platforms like Android and iOS...</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="Curriculum-second-row">
            <div className="row4"><img src={webdev} alt="Digital Marketing" className="image-fit" /></div>
            <div className="row5"><img src={Dscience} alt="Data Science" className="image-fit" /></div>
            <div className="row6"><img src={Dmarket} alt="Mobile Dev" className="image-fit" /></div>
          </div>
          <div className="Curriculum-second-row-title">
            <div className="row4-title"><h3>Full Stack Web Development</h3>
              <p>Covers both front-end and back-end development...</p>
            </div>
            <div className="row5-title"><h3>Data Science</h3>
              <p>Combines statistics, programming, and domain expertise...</p>
            </div>
            <div className="row6-title"><h3>Digital Marketing</h3>
              <p>The practice of promoting products or services using digital channels...</p>
            </div>
          </div>

          {/* Third Row */}
          <div className="Curriculum-third-row">
            <div className="row7"><img src={Devops} alt="DevOps" className="image-fit" /></div>
            <div className="row8"><img src={Dbase} alt="DB Admin" className="image-fit" /></div>
            <div className="row9"><img src={cybersecurity} alt="Cybersecurity" className="image-fit" /></div>
          </div>
          <div className="Curriculum-third-row-title">
            <div className="row7-title"><h3>DevOps Engineering</h3>
              <p>Bridges development and operations by automating and streamlining software delivery...</p>
            </div>
            <div className="row8-title"><h3>Database Administration</h3>
              <p>Involves managing databases to ensure performance, security, and availability...</p>
            </div>
            <div className="row9-title"><h3>Cybersecurity</h3>
              <p>Focuses on protecting systems, networks, and data from cyber threats...</p>
            </div>
          </div>

          {/* Fourth Row */}
          <div className="Curriculum-third-row">
            <div className="row7"><img src={AI} alt="AI" className="image-fit" /></div>
            <div className="row9"><img src={survey} alt="Surveillance" className="image-fit" /></div>
          </div>
          <div className="Curriculum-third-row-title">
            <div className="row7-title"><h3>A.I Development</h3>
              <p>Simulates human intelligence in machines including fields like ML, NLP, and robotics...</p>
            </div>
            <div className="row9-title"><h3>Surveillance System</h3>
              <p>Refers to technologies like CCTV and networked cameras used for monitoring...</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
