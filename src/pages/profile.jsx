import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaSignOutAlt, FaArrowLeft } from 'react-icons/fa';
import '../css/profile.css';

export default function Profile() {
  const navigate = useNavigate();

  const userData = {
    firstName: "Akpan",
    lastName: "Idara",
    email: "excellencennamso@gmail.com",
    phone: "09092631280",
    dob: "12-10-1990",
    role: "Admin",
    location: "Lagos, Nigeria",
    country: "Nigeria",
    city: "Lagos",
    HouseAddress: "-",
    avatar: "https://i.ytimg.com/vi/DEGvXTJ5JPA/maxresdefault.jpg"
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("userRole");
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="profile-wrapper">
      <button className="back-btn" onClick={handleBack}>
        <FaArrowLeft /> Back
      </button>

      <div className="profile-header">
        <h2>My Profile</h2>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <div className="card profile-summary">
        <img src={userData.avatar} alt="Profile" className="profile-avatar" />
        <div className="profile-info">
          <h3>{userData.firstName} {userData.lastName}</h3>
          <p className="role">{userData.role}</p>
          <p className="location">{userData.location}</p>
        </div>
      </div>

      <div className="card section-card">
        <div className="section-header">
          <h4>Personal Information</h4>
          <button className="edit-btn"><FaEdit /> Edit</button>
        </div>
        <div className="info-grid">
          <div className="info-block"><label>First Name</label><span>{userData.firstName}</span></div>
          <div className="info-block"><label>Last Name</label><span>{userData.lastName}</span></div>
          <div className="info-block"><label>Date of Birth</label><span>{userData.dob}</span></div>
          <div className="info-block"><label>Email Address</label><span>{userData.email}</span></div>
          <div className="info-block"><label>Phone Number</label><span>{userData.phone}</span></div>
          <div className="info-block"><label>User Role</label><span>{userData.role}</span></div>
        </div>
      </div>

      <div className="card section-card">
        <div className="section-header">
          <h4>Address</h4>
          <button className="edit-btn"><FaEdit /> Edit</button>
        </div>
        <div className="info-grid">
          <div className="info-block"><label>Country</label><span>{userData.country}</span></div>
          <div className="info-block"><label>City</label><span>{userData.city}</span></div>
  <div className="info-block"><label>House Address</label><span>{userData. HouseAddress}</span></div>
        </div>
      </div>
    </div>
  );
}
