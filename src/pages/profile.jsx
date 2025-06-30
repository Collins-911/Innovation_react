import React from 'react';
import { Link } from 'react-router-dom';
import '../css/profile.css'
import Change from "../pages/login/change";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as constant from '../utils/constants';
import {useCookies} from 'react-cookie';
import {useEffect} from 'react';
import useAuth from "../utils/authService";
// import { useCallback } from "react";




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
  
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth(); // Custom hook to check authentication status

    // es-lint-disable-next-line
    const [cookies, removeCookie] = useCookies(['token']);
  
      // const isAuthenticated = useCallback(() => {
      //   return cookies.token !== undefined && cookies.token !== null;
      // }, [cookies.token]);

        // if (!isAuthenticated()) {
        //   console.log("User not authenticated");
        //   alert("You are not authenticated. Please log in.");
        //   navigate('/');
        //   return;
        // }

      
    useEffect(() => {
      if (!isAuthenticated()) {
        navigate('/');
      }
    }, [navigate, isAuthenticated]);

  const userData = {
    name: "Akpan Idara",
    email: "excellencennamso@gmail.com",
    role: "Student",
    contact: "09092631280",
    location: "Nigeria",
    status: "Active",
    verified: true
  };


  const handleLogout = async () => {
  
  
      console.log('Logging out.....');
      try {

        console.log('cookie: ', cookies);
        const response = await axios.post(`${constant.default}/auth/logout`, {}, {withCredentials: true});
  
        if (response.status === 201) {

          console.log("Logout successful");
          // removeCookie('token');
          removeCookie('token', { path: '/' });
          // console.log("Logout successful");
          navigate('/');

        }
  
      } catch (error) {
        
        if (error.response?.status === 401) {
					console.log("User already logged out. Please login.");
          // removeCookie('token');
          removeCookie('token', { path: '/' });
					navigate('/');
				} else if (error.response?.status === 400) {
          console.log("No cookie sent: ", cookies.token);
          // removeCookie('token');
          removeCookie('token', { path: '/' });
					navigate('/');
        } else {
					console.log("Error loggimg out:", error.response?.data?.message || error.message);
					alert('Error logging out: ', error);
          // removeCookie('token');
          removeCookie('token', { path: '/'});
					navigate('/');
			  }

      }

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
