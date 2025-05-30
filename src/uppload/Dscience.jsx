import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function Dscience(){

    const modules = [
        "IBM Data Science Professional Certificate",
        "Data Science Specialization - Johns Hopkins University",
        "Applied Data Science with Python - University of Michigan",
        "Introduction to Data Science in Python",
        "Data Science Career Track - DataCamp"
    ];
    return(
        <>
            <div className="home-content">
                <Navbar/>
                <div className="top-content">
                    <Topnav/>
                     <div className="survey-wrapper">
                            <h2>Data Science</h2>
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