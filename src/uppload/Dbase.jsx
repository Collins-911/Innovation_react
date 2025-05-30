import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function Dbase(){

    const modules = [
        "Databases and SQL for Data Science",
        "MYSQL for Data Analystics and Business Intelligence",
        "Database Management Essentials",
        "Microsoft SQL Server Database Administration",
        "Oracle Database Administration"
    ];
    return(
        <>
            <div className="home-content">
                <Navbar/>
                <div className="top-content">
                    <Topnav/>
                     <div className="survey-wrapper">
                            <h2>Database Administration</h2>
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