// src/pages/Register.jsx

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../css/home.css";
import "../css/register.css";

import Sidebar from "../components/Sidebar.jsx";
import Topnav from "../components/Topnav.jsx";

import BASE_URL from "../utils/constants";
import { isAuthenticated, getUser, getToken } from "../utils/authService";

export default function RegisterStaff() {
  const navigate = useNavigate();
  const token = getToken();
  const user = getUser();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    address: ""
  });

  useEffect(() => {
    if (!isAuthenticated() || !token || !user) {
      Swal.fire({
        icon: "warning",
        title: "Not Authenticated",
        text: "Please log in to continue."
      }).then(() => navigate("/"));
    } else if (!(user && user.role && user.role.toLowerCase() === "admin")) {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Only admins can register staffs."
      }).then(() => navigate("/"));
    }
  }, [navigate, token, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Missing Token",
        text: "Please log in again."
      });
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/staffss/register`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    console.log("Register API response:", response.data); // ✅ now it's used



      Swal.fire({
        title: "Success!",
        text: "Student registered successfully.",
        icon: "success"
      });

      setFormData({
        fullname: "",
        email: "",
        phonenumber: "",
        address: ""
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || "Registration failed.",
        icon: "error"
      });
    }
  };

  return (
    <div className="home-content">
      <Sidebar />
      <div className="top-content">
        <Topnav />
        <section className="content" style={{ padding: "1rem" }}>
          <div className="register-title" style={{ marginTop: "4rem" }}>
            <h4>Register Staff</h4>
            <p>Staffs / <span>Register staffs</span></p>
          </div>

          <div className="register-form">
            <div className="list-title">
              <h3>Basic Info</h3>
            </div>

            <div className="r-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullname">Full Name:</label>
                  <input
                    className="form-input"
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address:</label>
                  <input
                    className="form-input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phonenumber">Phone Number:</label>
                  <input
                    className="form-input"
                    type="text"
                    id="phonenumber"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <input
                    className="form-input"
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
