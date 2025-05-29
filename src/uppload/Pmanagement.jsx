import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function Pmanagement(){
    return(
        <>
            <div className="home-content">
                <Navbar/>
                <div className="top-content">
                    <Topnav/>
                    <div className="content">
                         <h2 style={{marginTop:"5rem", textAlign:'center'}}>Product Management</h2>
                    <ol style={{marginLeft:"2rem"}}>
                        <li>Digital Product Management Specialization - University of Virginia</li>
                        <li>Google Project Management Certificate</li>
                        <li>Become a Product Manager - Learn the Skills & Get the Job</li>
                        <li>Product Management 101</li>
                        <li>One Month Product Management Bootcamp</li>
                    </ol>
                    </div>
                </div>
            </div>
        </>
    )
}