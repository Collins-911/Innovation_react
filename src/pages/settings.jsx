import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUser, FaLock, FaBell, FaPalette, 
  FaSignOutAlt, FaArrowLeft, FaEye, FaEyeSlash 
} from 'react-icons/fa';
import '../../src/css/settings.css';

export default function settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  
  const [profile, setProfile] = useState({
    name: 'Akpan Idara',
    email: 'excellencennamso@gmail.com',
    phone: '09092631280',
    location: 'Nigeria'
  });


  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
  };

  const saveProfile = (e) => {
    e.preventDefault();
    
  };

  const changePassword = (e) => {
    e.preventDefault();
  
    setPasswords({ current: '', new: '', confirm: '' });
  };
  

  return (
    <div className="settings-container">
      <div className="settings-sidebar">
        <Link to="/dashboard" className="back-button">
          <FaArrowLeft /> Back to Home
        </Link>
        
        <h2>Settings</h2>
        
        <button 
          className={`sidebar-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <FaUser /> Profile
        </button>
        
        <button 
          className={`sidebar-btn ${activeTab === 'password' ? 'active' : ''}`}
          onClick={() => setActiveTab('password')}
        >
          <FaLock /> Password
        </button>
        
        <button 
          className={`sidebar-btn ${activeTab === 'appearance' ? 'active' : ''}`}
          onClick={() => setActiveTab('appearance')}
        >
          <FaPalette /> Appearance
        </button>
        
        <button className="logout-btn">
          <FaSignOutAlt /> Logout
        </button>
      </div>
      
      <div className="settings-content">
        {activeTab === 'profile' && (
          <div className="profile-section">
            <h3><FaUser /> Profile Settings</h3>
            <form onSubmit={saveProfile}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                />
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                />
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleProfileChange}
                />
              </div>
              
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleProfileChange}
                />
              </div>
              
              <button type="submit" className="save-btn">
                Save Changes
              </button>
            </form>
          </div>
        )}
        
        {activeTab === 'password' && (
          <div className="password-section">
            <h3><FaLock /> Change Password</h3>
            <form onSubmit={changePassword}>
              <div className="form-group">
                <label>Current Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="current"
                    value={passwords.current}
                    onChange={handlePasswordChange}
                  />
                  <button 
                    type="button" 
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                
                  </button>
                </div>
              </div>
              
              <div className="form-group">
                <label>New Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="new"
                  value={passwords.new}
                  onChange={handlePasswordChange}
                />
              </div>
              
              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirm"
                  value={passwords.confirm}
                  onChange={handlePasswordChange}
                />
              </div>
              
              <button type="submit" className="save-btn">
                Change Password
              </button>
            </form>
          </div>
        )}
          
        {activeTab === 'appearance' && (
          <div className="appearance-section">
            <h3><FaPalette /> Appearance</h3>
            <p>Choose your theme</p>
            <div className="theme-options">
              <button className="theme-btn light">Light</button>
              <button className="theme-btn dark">Dark</button>
              <button className="theme-btn system">System Default</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}