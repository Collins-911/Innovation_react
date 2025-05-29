import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function MobileApp(){
    return(
        <>
            <div className="home-content">
                <Navbar/>
                <div className="top-content">
                    <Topnav/>
                    <div className="content">
                        <h2 style={{marginTop:"5rem", textAlign:'center'}}>Mobile App Development</h2>
                    <ol style={{marginLeft:"2rem"}}>
                        <li>Flutter & Dart - The Complete Guide</li>
                        <li>Android App Development with Kotlin</li>
                        <li>iOS App Development with Swift</li>
                        <li>React Native - The Practical Guide</li>
                        <li>Build Native Mobile Apps with Flutter</li>
                    </ol>
                    </div>
                </div>
            </div>
        </>
    )
}