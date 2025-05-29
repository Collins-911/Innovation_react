import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function Dmarketing(){
    return(
        <>
            <div className="home-content">
                <Navbar/>
                <div className="top-content">
                    <Topnav/>
                    <div className="content">
                        <h2 style={{marginTop:"5rem", textAlign:'center'}}>Digital Marketing</h2>
                    <ol style={{marginLeft:"2rem"}}>
                        <li>Google Digital Marketing & E-commerce Certificate</li>
                        <li>Meta Social Media Marketing Certificate</li>
                        <li>Digital Marketing Specialization - University of Illinois</li>
                        <li>The Complete Digital Marketing Guide</li>
                        <li>SEO Fundamentals - UC Davis</li>
                    </ol>
                    </div>
                </div>
            </div>
        </>
    )
}