import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function Survey(){
    return(
        <>
            <div className="home-content">
                <Navbar/>
                <div className="top-content">
                    <Topnav/>
                    <div className="content">
                         <h2 style={{marginTop:"5rem", textAlign:'center'}}>Surveillance System</h2>
                    <ol style={{marginLeft:"2rem"}}>
                        <li>CCTV System Installation & Maintenance</li>
                        <li>IP CCTV System Design & Installation</li>
                        <li>Introduction to CCTV and Surveillance Systems</li>
                        <li>Access Control & CCTV Fundamentals</li>
                        <li>Video Surveillance System Basics</li>
                    </ol>
                    </div>
                </div>
            </div>
        </>
    )
}