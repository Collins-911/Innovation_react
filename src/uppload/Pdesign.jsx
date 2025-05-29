import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function(){
    return(
        <>
            <div className="home-content">
                <Navbar/>
                <div className="top-content">
                    <Topnav/>
                    <div className="content">
                        <h2 style={{marginTop:"5rem", textAlign:'center'}}>Product Design</h2>
                    <ol style={{marginLeft:"2rem"}}>
                        <li>Google UX Design Certificate</li>
                        <li>UI/UX Design Specialization - California Institute of the Arts</li>
                        <li>Product Design for Beginners</li>
                        <li>UX & Web Design Master Course: Strategy, Design, Development</li>
                        <li>Figma UI/UX Design Essential Training</li>
                    </ol>
                    </div>
                </div>
            </div>
        </>
    )
}