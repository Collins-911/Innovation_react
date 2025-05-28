import { useState } from 'react';
import Topnav from '../components/Topnav.jsx';
import Navbar from '../components/Navbar.jsx';
import '../css/add_courses.css';

export default function AddCourses() {
    function show() {
        document.getElementById("popAdd").style.display = "block";
    }

    return (
        <>
            <div className="home-content">
                <Navbar />
                <div className="top-content">
                    <Topnav />
                    <section className="content">
                        <div className="addCourse-header">
                            <button className="addCourse" onClick={show}>
                                ADD COURSE
                            </button>
                        </div>
                        <div className="popAdd" id="popAdd">
                            <div className="popAddinner">
                                <h2>Add Course Details</h2>
                                <input type="text" placeholder="Course Name" />
                                <input type="text" placeholder="No. of Lessons" />
                                <input type="date" placeholder="Duration" />
                                <button className="submit-btn">Submit</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
