import React, { useEffect, useState } from "react";
import '../css/home.css';
import '../css/student.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';
import dummy from '../assets/dummy.webp';
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { getToken } from "../utils/authService.js";

export default function Staff() {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    fetchStaffs();
  }, []);

  const fetchStaffs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/staff`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      });
      setStaffs(res.data);
    } catch (err) {
      console.error("Failed to fetch staff list", err);
    }
  };

  return (
    <div className="home-content">
      <Sidebar />
      <div className="top-content">
        <Topnav />
        <section className="content" style={{ padding: "1rem" }}>
          <div className="student-title" style={{ marginTop: "4rem" }}>
            <h4>All Staffs</h4>
            <p>Staffs / <span>All staffs</span></p>
          </div>

          <div className="student-list">
            <div className="list-title">
              <h3>All staffs list</h3>
            </div>

            <div className="student-table">
            <table>
  <thead>
    <tr>
      <th>Profile</th>
      <th>Staff Name</th>
      <th>Phone Number</th>
      <th>Email Address</th>
      <th>Address</th>
      <th>Registration</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {staffs.length === 0 ? (
      <tr>
        <td colSpan="7">No staff found.</td>
      </tr>
    ) : (
      staffs.map((staff, index) => (
        <tr key={index}>
          <td><img src={dummy} alt="profile" /></td>
          <td>{staff.fullname}</td>
          <td>{staff.phonenumber}</td>
          <td>{staff.email}</td>
          <td>{staff.address}</td>
          <td>{staff.date}</td>
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
