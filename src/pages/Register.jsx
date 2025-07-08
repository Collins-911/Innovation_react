import React, { useState } from "react";
import Swal from "sweetalert2";
import "../css/home.css";
import "../css/register.css";
import Sidebar from "../components/Sidebar.jsx";
import Topnav from "../components/Topnav.jsx";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { getToken } from "../utils/authService.js";

export default function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    address: "",
    date: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${BASE_URL}/student`, formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "application/json"
        }
      });

      Swal.fire({
        title: "Success!",
        text: "Student registered successfully.",
        icon: "success"
      });

      setFormData({
        fullname: "",
        email: "",
        phonenumber: "",
        address: "",
        date: ""
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response?.data?.message || "Registration failed.",
        icon: "error"
      });
      console.error("Register error:", error);
    }
  };

  return (
    <div className="home-content">
      <Sidebar />
      <div className="top-content">
        <Topnav />
        <section className="content" style={{ padding: "1rem" }}>
          <div className="register-title" style={{ marginTop: "4rem" }}>
            <h4>Register Student</h4>
            <p>Students / <span>Register student</span></p>
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

                <div className="form-group">
                  <label htmlFor="date">Registration Date:</label>
                  <input
                    className="form-input"
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
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
