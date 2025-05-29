import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function Dscience(){
    return(
        <>
            <div className="home-content">
                <Navbar/>
                <div className="top-content">
                    <Topnav/>
                    <div className="content">
                        <h2 style={{marginTop:"5rem", textAlign:'center'}}>Data Science</h2>
                    <ol style={{marginLeft:"2rem"}}>
                        <li>IBM Data Science Professional Certificate</li>
                        <li>Data Science Specialization - Johns Hopkins University</li>
                        <li>Applied Data Science with Python - University of Michigan</li>
                        <li>Introduction to Data Science in Python</li>
                        <li>Data Science Career Track - DataCamp</li>
                    </ol>
                    </div>
                </div>
            </div>
        </>
    )
}