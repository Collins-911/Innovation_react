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
    <div className="profileWrapper">
      <button className="backBtn" onClick={handleBack}>
        <FaArrowLeft /> Back
      </button>

      <div className="profileHeader">
        <h2>My Profile</h2>
        <button className="logoutBtn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <div className="card profileSummary">
        <img src={userData.avatar} alt="Profile" className="profileAvatar" />
        <div className="profileInfo">
          <h3>{userData.firstName} {userData.lastName}</h3>
          <p className="role">{userData.role}</p>
          <p className="location">{userData.location}</p>
        </div>
      </div>

      <div className="card sectionCard">
        <div className="sectionHeader">
          <h4>Personal Information</h4>
          <button className="editBtn"><FaEdit /> Edit</button>
        </div>
        <div className="infoGrid">
          <div className="infoBlock"><label>First Name</label><span>{userData.firstName}</span></div>
          <div className="infoBlock"><label>Last Name</label><span>{userData.lastName}</span></div>
          <div className="infoBlock"><label>Date of Birth</label><span>{userData.dob}</span></div>
          <div className="infoBlock"><label>Email Address</label><span>{userData.email}</span></div>
          <div className="infoBlock"><label>Phone Number</label><span>{userData.phone}</span></div>
          <div className="infoBlock"><label>User Role</label><span>{userData.role}</span></div>
        </div>
      </div>

      <div className="card sectionCard">
        <div className="sectionHeader">
          <h4>Address</h4>
          <button className="editBtn"><FaEdit /> Edit</button>
        </div>
        <div className="infoGrid">
          <div className="infoBlock"><label>Country</label><span>{userData.country}</span></div>
          <div className="infoBlock"><label>City</label><span>{userData.city}</span></div>
          <div className="infoBlock"><label>House Address</label><span>{userData.HouseAddress}</span></div>
        </div>
      </div>
    </div>
  );
}
