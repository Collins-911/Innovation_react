import React from "react";
import '../css/home.css';
import '../css/course.css';
import '../css/curriculum_upload.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function Survey() {
    const modules = [
        "CCTV System Installation & Maintenance",
        "IP CCTV System Design & Installation",
        "Introduction to CCTV and Surveillance Systems",
        "Access Control & CCTV Fundamentals",
        "Video Surveillance System Basics"
    ];

    return (
        <div className="home-content">
            <Sidebar />
            <div className="top-content">
                <Topnav />
                <div className="survey-wrapper">
                    <h2>Surveillance System</h2>
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
    );
}
