import React from "react";
import '../css/home.css';
import '../css/course.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function Dmarketing(){
    const modules = [
        "Googlemdigital Marketing & E-commeerce Certificate",
        "Meta Social Media Marketing Certificate",
        "Digital Marketing Specialization - University of Illinois",
        "the Complete Digital Marketing Guide",
        "SEO Fundamentals - UC Davis"
    ];
    return(
        <>
            <div className="home-content">
                <Sidebar />
                <div className="top-content">
                    <Topnav/>
                     <div className="survey-wrapper">
                            <h2>Digital Marketing</h2>
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