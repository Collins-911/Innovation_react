import React from "react";
import '../css/curriculum.css';
import '../css/course.css';
import '../css/home.css';
import Sidebar from '../components/Sidebar.jsx';
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
import Navigation from '../components/Navigation.jsx';





export default function Curriculum() {

  const {
      aiClick,
      cyberClick,
      dbaseClick,
      devopsClick,
      dmarketingClick,
      dscienceClick,
      fullstackClick,
      mobileappClick,
      pdesignClick,
      pmanagementClick,
      surveyClick
    } = Navigation();
  

  
  return (
    <div className="home-content">
      <Sidebar />

      <div className="top-content">
        <Topnav />

        <section className="content">
          <div className="courses-title">
            <h4>Our Curriculum</h4>
            <p>Student / <span>Curriculum</span></p>
          </div>

          
                
                {/* First Row */}
          <div className="Curriculum-first-row">
            <div onClick={pmanagementClick} className="row1">
              <div className="image-container">
                <img src={pmanage} alt="UIUX" className="image-fit" />
              </div>
              <div className="row1-title">
                <h3>Product Management</h3>
                 <p>Product management is the process of planning, developing, and managing a product throughout its lifecycle. Product managers ensure the product meets user needs and aligns with business goals by coordinating with design, development, and marketing teams.</p> 
              </div>
            </div>
            <div onClick={pdesignClick} className="row2">
              <div className="image-container">
                <img src={Pdesign} alt="Cybersecurity" className="image-fit" />
              </div>
              <div className="row2-title">
                <h3>Product Design</h3>
                 <p>Product design involves creating user-centered solutions that are both functional and visually appealing. It combines UX (User Experience) and UI (User Interface) design to ensure that products are intuitive and enjoyable to use.</p>
              </div>
            </div>
            <div onClick={mobileappClick} className="row3">
              <div className="image-container">
                <img src={Mobile} alt="Database" className="image-fit" />
              </div>
              <div className="row3-title">
                <h3>Mobile App Development</h3>
                    <p>Mobile app development is the creation of software applications for mobile devices (smartphones and tablets). Developers use native technologies like Kotlin (Android) or Swift (iOS), or cross-platform tools like Flutter and React Native.

</p>
              </div>
            </div>
          </div>
          
            {/* second row */}
          <div className="Curriculum-second-row">
            <div onClick={fullstackClick} className="row4">
              <div className="image-container">
                <img src={webdev} alt="Digital Marketing" className="image-fit" />
              </div>
              <div className="row4-title">
                <h3>Full Stack Web Development</h3>
                <p>Fullstack developers build both the frontend (user interface) and backend (server, database) of web applications. Common tools include HTML, CSS, JavaScript, React, Node.js, Express, Django, and MongoDB/MySQL.</p>
              </div>
            </div>
            <div onClick={dscienceClick} className="row5">
              <div className="image-container">
                 <img src={Dscience} alt="Data Science" className="image-fit" />
              </div>
              <div className="row5-title">
                 <h3>Data Science</h3>
                <p>Data science involves analyzing large sets of data to discover patterns, generate insights, and support decision-making. It includes data analysis, visualization, machine learning, and statistical modeling using tools like Python, R, Pandas, and SQL.</p>
              </div>
            </div>
            <div onClick={dmarketingClick} className="row6">
              <div className="image-container">
                <img src={Dmarket} alt="Digital Marketing" className="image-fit" />
              </div>
              <div className="row6-title">
                 <h3>Digital Marketing</h3>
                 <p>Digital marketing is the promotion of products or services using digital channels like Google Ads, social media, email, SEO (Search Engine Optimization), and content marketing. It aims to attract and retain customers online.

</p>
              </div>
            </div>
          </div>
          
            {/* third row */}
          <div className="Curriculum-third-row">
            <div onClick={devopsClick} className="row7">
              <div className="image-container">
                <img src={Devops} alt="DevOps" className="image-fit" />
              </div>
              <div className="row7-title">
                 <h3>DevOps Engineering</h3>
                  <p>DevOps engineering integrates software development and IT operations. It emphasizes automation, continuous integration (CI), continuous delivery (CD), and infrastructure as code (IaC) using tools like Docker, Jenkins, Git, and Kubernetes.

</p>
              </div>
            </div>
            <div onClick={dbaseClick} className="row8">
              <div className="image-container">
                 <img src={Dbase} alt="DB Admin" className="image-fit" />
              </div>
              <div className="row8-title">
                 <h3>Database Administration</h3>
                 <p>Database administrators (DBAs) manage databases to ensure performance, security, and reliability. Tasks include backups, tuning, access control, and using database software like MySQL, PostgreSQL, Oracle, and MongoDB.</p>
              </div>
            </div>
            <div onClick={cyberClick} className="row9">
              <div className="image-container">
                <img src={cybersecurity} alt="Cybersecurity" className="image-fit" />
              </div>
              <div className="row9-title">
                 <h3>Cybersecurity</h3>
                 <p>Cybersecurity protects computer systems and networks from attacks, damage, or unauthorized access. It involves network security, encryption, ethical hacking, firewalls, and incident response to protect data and digital infrastructure.</p>
              </div>
            </div>
          </div>
          
 
             

             {/* fouth row */}
              <div className="Curriculum-third-row">
            <div onClick={aiClick} className="row7">
              <div className="image-container">
                <img src={AI} alt="AI" className="image-fit" />
              </div>
              <div className="row7-title">
                 <h3>A.I Development</h3>
                 <p>Artificial Intelligence refers to the simulation of human intelligence in machines. AI systems can learn, reason, and make decisions. Applications include chatbots, facial recognition, recommendation systems, self-driving cars, and tools like machine learning, deep learning, and natural language processing (NLP).</p>
              </div>
            </div>
            <div onClick={surveyClick} className="row8">
              <div className="image-container">
                 <img src={survey} alt="Surveillance" className="image-fit" />
              </div>
              <div className="row8-title">
                <h3>Surveillance System</h3>
                <p>Surveillance systems monitor environments using technologies like CCTV cameras, motion detectors, and cloud storage. They are used for security, monitoring, and evidence collection in both public and private spaces.

</p>
              </div>
            </div>
           
          </div>
            
          
        </section>
      </div>

    </div>
  );
}
