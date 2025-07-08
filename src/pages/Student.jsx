import React, { useEffect, useState } from "react";
import '../css/home.css';
import '../css/student.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';
import dummy from '../assets/dummy.webp';
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { getToken } from "../utils/authService.js";

export default function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/student`, {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        });
        setStudents(res.data);
      } catch (err) {
        console.error("Failed to fetch students", err);
      }
    };

    fetchStudents();
  }, []);

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
                  {students.length === 0 ? (
                    <tr><td colSpan="7">No students found.</td></tr>
                  ) : (
                    students.map((student, index) => (
                      <tr key={index}>
                        <td><img src={dummy} alt="profile" /></td>
                        <td>{student.fullname || student.name}</td>
                        <td>{student.course || "N/A"}</td>
                        <td>{student.phonenumber}</td>
                        <td>{student.email}</td>
                        <td>{student.admissionDate || student.date}</td>
                        <td><button>Delete</button></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
