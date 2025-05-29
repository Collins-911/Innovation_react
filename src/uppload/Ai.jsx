import React from "react";
import '../css/home.css';
import '../css/course.css';
import Navbar from'../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';
import { CgEnter } from 'react-icons/cg';

export default function Ai(){
    return(

        <>
        <div className="home-content">
            <Navbar/>
            <div className="top-content">
                <Topnav/>
                <div className="content">
                    <h2 style={{marginTop:"5rem", textAlign:'center'}}> Artificial Intelligence (AI)</h2>
                    <ol style={{marginLeft:"2rem"}}>
                        <li>Machine Learning - Stanford University</li>
                        <li>Deep Learning Specialization - Andrew Ng</li>
                        <li>AI For Everyone - Andrew Ng</li>
                        <li>TensorFlow Developer Certificate</li>
                        <li>Build AI-Powered Apps with OpenAI and LangChain</li>
                    </ol>
                </div>
            </div>
        </div>
        </>
    )
}