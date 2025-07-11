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
                            </div>
                                                {/* main-content */}
                    </div>
                </div>
            </div>
        </>
  );
}
