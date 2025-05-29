import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';
import survey from '../assets/survey.jpg';

export default function FullStack(){
    return(
        <>
            <div className="home-content">
                <Navbar/>
                <div className="top-content">
                    <Topnav/>
                    <div className="content">
                        <h2 style={{marginTop:"5rem", textAlign:'center'}}>Full Stack Web Development</h2>
                    <ol style={{marginLeft:"2rem"}}>
                        <li>The Web Developer Bootcamp</li>
                        <li>Full Stack Open - University of Helsinki</li>
                        <li>Meta Full Stack Developer Certificate</li>
                        <li>The Complete 2024 Web Development Bootcamp</li>
                        <li>Web Programming with Python and JavaScript  CS50</li>
                    </ol>

                    <div className="Curriculum-first-row">
                                <div className="row1">
                                  <div className="image-container">
                                    <img src={survey} alt="UIUX" className="image-fit" />
                                  </div>
                                  <div className="row1-title">
                                    <h3>Product Management</h3>
                                     <p>Focuses on guiding the development of a product from concept to launch...</p> 
                                  </div>
                                </div>
                                <div className="row2">
                                  <div className="image-container">
                                    {/* <img src={Pdesign} alt="Cybersecurity" className="image-fit" /> */}
                                  </div>
                                  <div className="row2-title">
                                    <h3>Product Design</h3>
                                     <p>The process of imagining, creating, and iterating products that solve user problems...</p>
                                  </div>
                                </div>
                                <div className="row3">
                                  <div className="image-container">
                                    {/* <img src={Mobile} alt="Database" className="image-fit" /> */}
                                  </div>
                                  <div className="row3-title">
                                    <h3>Mobile App Development</h3>
                                        <p>Involves creating applications for mobile devices using platforms like Android and iOS...</p>
                                  </div>
                                </div>
                              </div>

                              {/* second row */}
                              <div className="Curriculum-first-row">
                                          <div className="row1">
                                            <div className="image-container">
                                              <img src={survey} alt="UIUX" className="image-fit" />
                                            </div>
                                            <div className="row1-title">
                                              <h3>Product Management</h3>
                                               <p>Focuses on guiding the development of a product from concept to launch...</p> 
                                            </div>
                                          </div>
                                          <div className="row2">
                                            <div className="image-container">
                                              {/* <img src={Pdesign} alt="Cybersecurity" className="image-fit" /> */}
                                            </div>
                                            <div className="row2-title">
                                              <h3>Product Design</h3>
                                               <p>The process of imagining, creating, and iterating products that solve user problems...</p>
                                            </div>
                                          </div>
                                         
                                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}