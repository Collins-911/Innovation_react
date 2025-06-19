import React from "react";
import '../css/home.css';
import '../css/course.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';
import { CgEnter } from 'react-icons/cg';

export default function Ai(){
    const modules = [
        "Machine Learning - Stanford University",
        "Deep Learning S[ecialization - Andrew Ng",
        "AI for Everyone - Andrew Ng",
        "Tensorflow Developer Certificate",
        "Build AI-Powered Apps with OpenAI and Langchain"
    ];
    return(

        <>
        <div className="home-content">
             <Sidebar />
            <div className="top-content">
                <Topnav/>
                <div className="survey-wrapper">
                    <h2>Artificial Intelligence (AI)</h2>
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