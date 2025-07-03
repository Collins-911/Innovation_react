
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../css/home.css";
import "../css/register.css";
import Sidebar from "../components/Sidebar.jsx";
import Topnav from "../components/Topnav.jsx";


 const success = () => {
    Swal.fire({
    title: "Success!",
    text: "Student registered successfully.",
    icon: "success"
  });
}

export default function Register() {
 
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
              <form>
                <div className="form-group">
                  <label htmlFor="fullname">Full Name:</label>
                  <input
                    className="form-input"
                    type="text"
                    id="fullname"
                    name="fullname"
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
                    required
                  />
                </div>

                <button onClick={success} type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
