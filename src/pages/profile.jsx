import React from 'react';
import { Link } from 'react-router-dom';
import '../css/profile.css'
import Change from "../pages/login/change";
import {
  FaUser,
  FaEdit,
  FaPhone,
  FaIdCard,
  FaRedoAlt,
  FaHistory,
  FaArrowLeft
} from 'react-icons/fa';

export default function Profile() {
  const userData = {
    name: "Akpan Idara",
    email: "excellencennamso@gmail.com",
    role: "Student",
    contact: "09092631280",
    location: "Nigeria",
    status: "Active",
    verified: true
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        
        <div className="profile-tabs">
          <Link to="/dashboard" className="clean-link">
  <button className="tab">
    <FaArrowLeft className="icon" />
    <span>Go back</span>
  </button>
</Link>
          <button className="tab active">
            <FaUser className="icon" />
            <span>Profile</span>
          </button>

<Link to="/change" className="clean-link">
 <button className="tab">
            <FaRedoAlt className="icon" />
            <span>Reset Password</span>
          </button>
</Link>
         

          <button className="tab-red">
            LOGOUT
          </button>
        </div>

        <div className="profile-content">
          <div className="profile-info">
            <div className="avatar-section">
              <img 
                src="https://i.ytimg.com/vi/DEGvXTJ5JPA/maxresdefault.jpg" 
                alt="Profile" 
                className="avatar"
              />
              <h2>{userData.name}</h2>
              <p>{userData.email}</p>
              <p>{userData.location}</p>
            </div>

            <div className="details-section">
              <div className="detail-row">
                <span>Name:</span>
                <strong>{userData.name}</strong>
              </div>
              <div className="detail-row">
                <span>Role:</span>
                <strong>{userData.role}</strong>
              </div>
              <div className="detail-row">
                <span>Email:</span>
                <strong>{userData.email}</strong>
              </div>
              <div className="detail-row">
                <span>Email Verification:</span>
                <strong className={userData.verified ? "verified" : "verified"}>
                  {userData.verified ? "Verified" : "verified"}
                </strong>
              </div>
              <div className="detail-row">
                <span>Contact:</span>
                <strong>{userData.contact}</strong>
              </div>
              <div className="detail-row">
                <span>Status:</span>
                <strong className="active">{userData.status}</strong>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
