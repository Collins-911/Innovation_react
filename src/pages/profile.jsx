import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/profile.css';
import {
  FaUser,
  FaRedoAlt,
  FaArrowLeft
} from 'react-icons/fa';
import axios from 'axios';
import * as constant from '../utils/constants';
import { useCookies } from 'react-cookie';
import { isAuthenticated } from "../utils/authService";

export default function Profile() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(['token']);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      console.log('Logging out...');

      const response = await axios.post(`${constant.default}/auth/logout`, {}, {
        withCredentials: true
      });

      if (response.status === 201) {
        removeCookie('token', { path: '/' });
        navigate('/');
      }
    } catch (error) {
      if ([401, 400].includes(error.response?.status)) {
        removeCookie('token', { path: '/' });
        navigate('/');
      } else {
        console.error("Logout error:", error.response?.data?.message || error.message);
        removeCookie('token', { path: '/' });
        navigate('/');
      }
    }
  };

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
          <Link to="/general/dashboard" className="clean-link">
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

          <button className="tab-red" onClick={handleLogout}>
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
                <strong className="verified">
                  {userData.verified ? "Verified" : "Not Verified"}
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
