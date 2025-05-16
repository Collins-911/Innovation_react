import React from 'react';
import './profile.css';
import { FaUser, FaEdit, FaPhone, FaIdCard, FaRedoAlt, FaHistory } from 'react-icons/fa';


export default function Profile() {
  const userData = {
    name: "Akpan Idara",
    email: "excellencennamso@gmail.com",
    role: "Student",
    contact: "09092651280",
    location: "United States",
    status: "Active",
    verified: false
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        
        <div className="profile-tabs">
          <button className="tab active">
            <FaUser className="icon" />
            <span>Profile</span>
          </button>
          <button className="tab">
            <FaEdit className="icon" />
            <span>Edit Profile</span>
          </button>
          <button className="tab">
            <FaPhone className="icon" />
            <span>Phone Verification</span>
          </button>
          <button className="tab">
            <FaIdCard className="icon" />
            <span>ID Verification</span>
          </button>
          <button className="tab">
            <FaRedoAlt className="icon" />
            <span>Reset Password</span>
          </button>
          <button className="tab">
            <FaHistory className="icon" />
            <span>Activity Log</span>
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
                <strong className={userData.verified ? "verified" : "unverified"}>
                  {userData.verified ? "Verified" : "Pending"}
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