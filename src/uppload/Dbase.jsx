import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function Dbase(){
    return(
        <>
            <div className="home-content">
                <Navbar/>
                <div className="top-content">
                    <Topnav/>
                    <div className="content">
                        <h2 style={{marginTop:"5rem", textAlign:'center'}}>Database Administration
</h2>
                    <ol style={{marginLeft:"2rem"}}>
                        <li>Databases and SQL for Data Science</li>
                        <li>MySQL for Data Analytics and Business Intelligence</li>
                        <li>Database Management Essentials</li>
                        <li>Microsoft SQL Server Database Administration</li>
                        <li>Oracle Database Administration</li>
                    </ol>
                    </div>
                </div>
            </div>
        </>
    )
}