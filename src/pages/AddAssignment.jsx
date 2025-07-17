import React, { useState } from 'react';
import '../css/createAssignment.css';
import '../css/course.css';
import '../css/home.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';


export default function AddAssignment() {
const [assignment, setAssignment] = useState({
    title: '',
    instructions: '',
    dueDate: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setAssignment({ ...assignment, file: files[0] });
    } else {
      setAssignment({ ...assignment, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Assignment:', assignment);
    // Here you can send the data to your backend
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
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={assignment.title}
          onChange={handleChange}
          required
        />

        <label>Instructions</label>
        <textarea
          name="instructions"
          value={assignment.instructions}
          onChange={handleChange}
          rows="5"
        ></textarea>

        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={assignment.dueDate}
          onChange={handleChange}
        />

        <label>Attach File</label>
        <input type="file" name="file" onChange={handleChange} />

        <button type="submit" className="submit-btn">Assign</button>
      </form>
    </div>
                                    {/* main-content */}
                </div>
            </div>
        </div>
    
    </>
  );
}
