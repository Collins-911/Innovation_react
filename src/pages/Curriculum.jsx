import React from "react";
import '../css/curriculum.css';
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

  // Dummy functions to avoid errors from undefined click handlers
  const studentClick = (e) => { e.preventDefault(); console.log("Student clicked"); };
  const curriculumClick = (e) => { e.preventDefault(); console.log("Curriculum clicked"); };
  const registerClick = (e) => { e.preventDefault(); console.log("Register clicked"); };
  const paymentClick = (e) => { e.preventDefault(); console.log("Payment clicked"); };
  const assignment = (e) => { e.preventDefault(); console.log("Assignment clicked"); };

  return (
    <div className="home-container">
      {/* Top Bar */}
        {/* <Topnav /> */}

      {/* Sidebar */}
      <div className="home">
      
         <Navbar/>
        {/* Curriculum Section */}
        <div className="Curriculum-container">
          <div className="curriculum-title">
			           		<h4>Our Curriculum</h4>
			           		<p>Students / <span>Curriculum</span></p>
			           	</div>

          {/* First Row */}
          <div className="Curriculum-first-row">
            <div className="row1"><img src={pmanage} alt="UIUX" className="image-fit" /></div>
            <div className="row2"><img src={Pdesign} alt="Cybersecurity" className="image-fit" /></div>
            <div className="row3"><img src={Mobile} alt="Database" className="image-fit" /></div>
          </div>
          <div className="Curriculum-first-row-title">
            <div className="row1-title"><h3>Product Management</h3>
               <p>
                 Focuses on guiding the development of a product from concept to launch. It involves market research, planning, and coordinating between cross-functional teams to ensure product success.
               </p>
            </div>
            <div className="row2-title"><h3>Product Design</h3>
                <p>
                    The process of imagining, creating, and iterating products that solve user problems. It includes UI/UX design, prototyping, and user testing to ensure usability and aesthetics.
                </p>
            </div>
            <div className="row3-title"><h3>Mobile App Development</h3>
                <p>
                    Involves creating applications for mobile devices using platforms like Android (Java/Kotlin) and iOS (Swift). It focuses on performance, user interface, and compatibility.
                </p>
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
                <p>
                    Covers both front-end (HTML, CSS, JavaScript) and back-end (Node.js, Python, etc.) development. Full stack developers build complete web applications and manage databases, servers, and APIs.
                </p>
            </div>
            <div className="row5-title"><h3>Data Science</h3>
                 <p>
                    Combines statistics, programming, and domain expertise to extract insights from data. It involves data analysis, machine learning, and data visualization.
                 </p>
            </div>
            <div className="row6-title"><h3>Digital Marketing</h3>
                <p>
                    The practice of promoting products or services using digital channels such as SEO, social media, email marketing, and paid advertising to reach and engage customers.
                </p>
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
                <p>
                    Bridges development and operations by automating and streamlining software delivery. It includes CI/CD pipelines, infrastructure as code, and monitoring.
                </p>
            </div>
            <div className="row8-title"><h3>Database Administration</h3>
                <p>
                    Involves managing databases to ensure performance, security, and availability. DBAs handle backups, indexing, user access, and query optimization.
                </p>
            </div>
            <div className="row9-title"><h3>Cybersecurity</h3>
                <p>
                    Focuses on protecting systems, networks, and data from cyber threats. It involves firewalls, encryption, penetration testing, and security protocols.


                </p>
            </div>
          </div>

           {/* Third Row */}
          <div className="Curriculum-third-row">
            <div className="row7"><img src={AI} alt="DevOps" className="image-fit" /></div>
            <div className="row9"><img src={survey} alt="Cybersecurity" className="image-fit" /></div>
          </div>
          <div className="Curriculum-third-row-title">
            <div className="row7-title"><h3> A.I Development</h3>
                <p>
                   Simulates human intelligence in machines. Includes fields like machine learning, natural language processing (NLP), computer vision, and robotics. Used in recommendation systems, chatbots, autonomous vehicles etc.
                </p>
            </div>
            <div className="row9-title"><h3>Surveillance System</h3>
                <p>
                    Refers to technologies like CCTV and networked cameras used for monitoring and security purposes. These systems often include video analytics and remote access.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// The above code is a React component that represents a curriculum page for a dashboard application.