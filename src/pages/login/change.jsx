import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/change.css';
import { FaArrowLeft, FaUser, FaRedoAlt } from 'react-icons/fa';

export default function ChangePassword() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        
        <div className="profile-tabs">
          <Link to="/profile" className="clean-link">
            <button className="tab">
              <FaArrowLeft className="icon" />
              <span>Go back</span>
            </button>
          </Link>

          <Link to="/profile" className="clean-link">
            <button className="tab">
              <FaUser className="icon" />
              <span>Profile</span>
            </button>
          </Link>

          <button className="tab active">
            <FaRedoAlt className="icon" />
            <span>Reset Password</span>
          </button>

          <button className="tab-red">
            LOGOUT
          </button>
        </div>

        <div className="profile-content">
          <div className="password-reset-form">
            <h2>Change Your Password</h2>
            <p>Enter your current and new password below.</p>
            
            <form>
              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                />
              </div>

              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  name="newPassword"
                />
              </div>

              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                />
              </div>
<Link to="/profile"className="clean-link">
<button type="submit" className="submit-btn">
                Change Password
              </button>
</Link>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}