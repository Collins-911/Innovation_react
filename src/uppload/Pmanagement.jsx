import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function Pmanagement(){
    const modules = [
        "Digital Product Management Specialization - University of Virginia",
        "Google Project Management Certificate",
        "Become a Product Manager - Learn the Skills & Get the Job",
        "Product Management 101",
        "One Month Product Management Bootcamp"
    ];
    return(
        <>
            <div className="home-content">
                <Navbar/>
                <div className="top-content">
                    <Topnav/>
                     <div className="survey-wrapper">
                            <h2>Product</h2>
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