import React from "react";
import '../css/home.css';
import '../css/course.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function(){

    const modules = [
        "Google UX Design Certificate",
        "UI/UX Design Specialization - California Institute of the Arts",
        "Product Design for Beginners",
        "UX & Web Design Master Course: Strategy, Design, Development",
        "Figma UI/UX Design Essetial Training"
    ];
    return(
        <>
            <div className="home-content">
                <Sidebar />
                <div className="top-content">
                    <Topnav/>
                     <div className="survey-wrapper">
                            <h2>Product Design</h2>
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