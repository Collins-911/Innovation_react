import React, { useEffect, useState } from "react";
import '../css/home.css';
import '../css/student.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';
import dummy from '../assets/dummy.webp';
import axios from 'axios';
import * as constant from '../utils/constants.js';
import { useNavigate } from "react-router-dom";
import { getUser, getToken, isAuthenticated } from '../utils/authService';

export default function Student() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      if (!isAuthenticated()) {
        alert("You are not authenticated. Please log in.");
        navigate('/');
        return;
      }

      try {
        const token = getToken();
        const response = await axios.get(`${constant.default}/students/getStudent`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setStudents(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          alert("Unauthorized. Please log in again.");
          navigate('/');
        } else {
          console.error("Error fetching students:", error);
          alert("Error fetching students.");
        }
      }
    };

    getStudents();
  }, [navigate]);

  return (
    <div className="home-content">
      <Sidebar />
      <div className="top-content">
        <Topnav />
        <section className="content" style={{ padding: "1rem" }}>
          <div className="student-title" style={{ marginTop: "4rem" }}>
            <h4>All Students</h4>
            <p>Students / <span>All students</span></p>
          </div>

          <div className="student-list">
            <div className="list-title">
              <h3>All students list</h3>
            </div>

            <div className="student-table">
              <table>
                <thead>
                  <tr>
                    <th>Profile</th>
                    <th>Student Name</th>
                    <th>Course Name</th>
                    <th>Phone Number</th>
                    <th>Email Address</th>
                    <th>Admission</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student._id} className="studentData">
                      <td><img src={dummy} alt="Profile" /></td>
                      <td>{student.fullname}</td>
                      <td>{student.course[0]?.name || 'N/A'}</td>
                      <td>{student.phone}</td>
                      <td>{student.email}</td>
                      <td>{new Date(student.registrationDate).toLocaleDateString()}</td>
                      <td><button>Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="list-btn">
                <button style={{ backgroundColor: "rgba(200, 200, 200, 0.7)" }}>Previous</button>
                <button style={{ backgroundColor: "rgba(15, 1, 122)", color: "white", width: "40px" }}>1</button>
                <button style={{ backgroundColor: "rgba(200, 200, 200, 0.7)", width: "40px" }}>2</button>
                <button style={{ backgroundColor: "rgba(200, 200, 200, 0.7)", width: "40px" }}>3</button>
                <button style={{ backgroundColor: "rgba(15, 1, 122)", color: "white" }}>Next</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
