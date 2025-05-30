import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function(){
    const modules = [
        "Devops on AWS Specialization",
        "The Complete Devops Engineer Course",
        "Docker & Kubernetes - The Pratical Guide",
        "Devops Foundations",
        "CI/CD Pipeline with Jenkins"
    ];
    return(
        <>
            <div className="home-content">
                <Navbar/>
                <div className="top-content">
                    <Topnav/>
                     <div className="survey-wrapper">
                            <h2>Devops Engineering</h2>
                            <p>
                                Learn the essentials of CCTV and surveillance in this hands-on course:
                            </p>
                            <div className="module-list">
                                {modules.map((item, index) => (
                                    <div key={index} className="module-item">
                                        {item}
                                    </div>
                                ))}
                    </div>
                </div>
                   
                </div>
            </div>
        </>
    )
}