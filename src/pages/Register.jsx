import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';
import '../css/register.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';
import ImageUploader from '../components/Imageuploader.jsx';
import * as constant from '../utils/constants';



export default function Register() {
  const [cookies] = useCookies(['token']);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.token) {
      alert("You are not authenticated. Please log in.");
      navigate('/');
    }
  }, [cookies.token, navigate]);

  const courses = [
    "Product Management",
    "Product Design",
    "Mobile App Development",
    "Full Stack Development",
    "Data Science",
    "Digital Marketing",
    "Devops Engineering",
    "Database Administration",
    "Surveillance Systems",
    "Cybersecurity",
    "AI Development",
  ];

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phonenumber: '',
    address: '',
    image: null
  });

  const handleImageChange = (file) => {
    setFormData({ ...formData, image: file });
  };

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

     try {
      const response = await axios.post(`${constant.default}/students/register`, data, {
        withCredentials: true
      });

      Swal.fire({
        title: "Good job!",
        text: "Registration Successful",
        icon: "success"
      });

      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration error:', error);
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || "Registration failed",
        icon: "error"
      });
    }
  };

  return (
    <>
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
                <h3>Basic info</h3>
              </div>
              <div className="r-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullname">Full Name:</label>
                    <input className="form-input" type="text" id="fullname" name="fullname" required onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input className="form-input" type="email" id="email" name="email" required onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phonenumber">Phone Number:</label>
                    <input className="form-input" type="text" id="phonenumber" name="phonenumber" required onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input className="form-input" type="text" id="address" name="address" required onChange={handleChange} />
                  </div>

                  <ImageUploader onChange={handleImageChange} />

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
