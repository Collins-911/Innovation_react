import React, { useState } from 'react';
import '../css/createAssignment.css';
import '../css/course.css';
import '../css/home.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';


export default function CreateAssignment() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAssignment = {
      id: Date.now(),
      title,
      description,
      dueDate,
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('assignments')) || [];
    existing.push(newAssignment);
    localStorage.setItem('assignments', JSON.stringify(existing));

    alert('Assignment Created!');
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <>
        <div className="home-content">
            <Sidebar/>
            <div className="top-content">
                <Topnav/>
                <div className="content">
                    <div className="courses-title">
                        <h4>Our CreateAssignment</h4>
                    </div>
                    {/* main-content */}
                    <div className="assignment-container">
                    <h2>Create Assignment</h2>
                    <form onSubmit={handleSubmit} className="assignment-form">
                        <label>Title:</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} required />

                        <label>Description:</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

                        <label>Due Date:</label>
                        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />

                        <button type="submit">Create Assignment</button>
                    </form>
                    </div>
                                    {/* main-content */}
                </div>
            </div>
        </div>
    
    </>
  );
}
