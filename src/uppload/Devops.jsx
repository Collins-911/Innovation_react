import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function(){
    return(
        <>
            <div className="home-content">
                <Navbar/>
                <div className="top-content">
                    <Topnav/>
                    <div className="content">
                        <h2 style={{marginTop:"5rem", textAlign:'center'}}>DevOps Engineering</h2>
                    <ol style={{marginLeft:"2rem"}}>
                        <li>DevOps on AWS Specialization</li>
                        <li>The Complete DevOps Engineer Course</li>
                        <li>Docker & Kubernetes - The Practical Guide</li>
                        <li>DevOps Foundations</li>
                        <li>CI/CD Pipeline with Jenkins</li>
                    </ol>
                    </div>
                </div>
            </div>
        </>
    )
}