import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function Cybersecurity(){
    return(

        <>
            <div className="home-content">
                <Navbar/>
                <div className="top-content">
                    <Topnav/>
                    <div className="content">
                        <h2 style={{marginTop:"5rem", textAlign:'center'}}>Cybersecurity
</h2>
                            <ol style={{marginLeft:"2rem"}}>
                                <li>IBM Cybersecurity Analyst Professional Certificate</li>
                                <li>Google Cybersecurity Certificate </li>
                                <li>Introduction to Cybersecurity - NYU</li>
                                <li>The Complete Cybersecurity Course</li>
                                <li>Cybersecurity for Business - University of Colorado</li>
                            </ol>
                    </div>
                </div>
            </div>
        </>
    )
}