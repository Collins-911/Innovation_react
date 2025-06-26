import React from "react";
import '../css/home.css';
import '../css/course.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function FullStack(){

    const modules = [
        "The Web Developer BootCamp",
        "Full Stack Open - University of Helsinki",
        "Meta Full Stack Developer Certificate",
        "The Coplete 2024 Web Development Bootcamp",
        "Web Programming with Python and Javascript CS50"
    ];
    return(
        <>
            <div className="home-content">
                 <Sidebar />
                <div className="top-content">
                    <Topnav/>
                     <div className="survey-wrapper">
                            <h2>Full Stack Web Development</h2>
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