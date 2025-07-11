import React, { useEffect, useState } from "react";
import '../css/home.css';
import '../css/student.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';
import dummy from '../assets/dummy.webp';
import axios from "axios";
import BASE_URL from "../utils/constants";
import { getToken } from "../utils/authService";
import Swal from "sweetalert2";

export default function Student() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const token = getToken();
      const response = await axios.get(`${BASE_URL}/students`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data?.status) {
        setStudents(response.data.data); 
      } else {
        Swal.fire("Error", response.data?.message || "Failed to load students", "error");
      }
    } catch (err) {
      console.error("Fetch students error:", err);
      Swal.fire("Error", err.response?.data?.message || "Could not fetch students", "error");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This student will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    });

    if (confirm.isConfirmed) {
      try {
        const token = getToken();
        await axios.delete(`${BASE_URL}/students/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        Swal.fire("Deleted", "Student has been deleted.", "success");
        setStudents((prev) => prev.filter((student) => student._id !== id));
      } catch (err) {
        Swal.fire("Error", "Failed to delete student.", "error");
      }
    }
  };

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
                    <th>Phone Number</th>
                    <th>Email Address</th>
                    <th>Address</th>
                    <th>Admission</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.length === 0 ? (
                    <tr><td colSpan="7">No students found.</td></tr>
                  ) : (
                    students.map((student) => (
                      <tr key={student._id}>
                        <td><img src={dummy} alt="profile" /></td>
                        <td>{student.fullname}</td>
                        <td>{student.phonenumber}</td>
                        <td>{student.email}</td>
                        <td>{student.address}</td>
                        <td>{new Date(student.date).toLocaleDateString()}</td>
                        <td><button onClick={() => handleDelete(student._id)}>Delete</button></td>
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
