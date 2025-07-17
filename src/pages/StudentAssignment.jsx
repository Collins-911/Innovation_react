import React, { useEffect, useState } from 'react';
import '../css/studentAssignments.css';
import '../css/course.css';
import '../css/home.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';


export default function StudentAssignments() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('assignments')) || [];
    setAssignments(data);
  }, []);

  return (
        <>
            <div className="home-content">
                <Sidebar/>
                <div className="top-content">
                    <Topnav/>
                    <div className="content">
                        <div className="courses-title">
                            <h4>Our Assignment</h4>
                        </div>
                        {/* main-content */}
                        <div className="student-assignments">
                            <h2>Available Assignments</h2>
                            {assignments.length === 0 ? (
                                <p>No assignments available</p>
                            ) : (
                                <ul>
                                {assignments.map((a) => (
                                    <li key={a.id} className="assignment-card">
                                    <h3>{a.title}</h3>
                                    <p>{a.description}</p>
                                    <small>Due: {a.dueDate}</small>
                                    <br />
                                    <button>Start Assignment</button> {/* You can link to a submission page */}
                                    </li>
                                ))}
                                </ul>
                            )}
                            {/* note on assignment */}
                             <p style={{ textAlign: 'left', marginTop: 30, marginBottom: 20, color: 'red', fontSize: 10 }}>
                                The Important for Submiting your Assignment is for your tuitor to know how far
                                you have learn and understand what he or she has teach you so please always submit your's
                                if your giving assignment please enable to submit it thanks for your Cooperaton.
                                Nugi Innovation loves you all and mean the best for you all.
                            </p>
                            {/* note on assignment */}
                            </div>
                                                {/* main-content */}
                    </div>
                </div>
            </div>
        </>
  );
}
