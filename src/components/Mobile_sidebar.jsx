import React, { useState } from 'react';
import Navigation from './Navigation.jsx';
import '../css/home.css';
import '../css/Mobile_sidebar.css';

export default function MobileSidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => setSidebarVisible(true);
  const hideSidebar = () => setSidebarVisible(false);

  return (
    <>
      <div className="menu-button" onClick={showSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
      </div>

      <div className={`sidebar ${sidebarVisible ? 'show' : ''}`}>
        <ul>
          <li onClick={hideSidebar}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </a>
          </li>
          {[
            'Add_courses', 'Assignment', 'Courses', 'Curriculum', 'Payment', 'Profile',
            'Register', 'Report', 'Setting', 'Staff', 'Student', 'Student_payment'
          ].map((item, index) => (
            <li key={index}>
              <a href="#">
                <img src="Co-movies (2).png" alt="icon" />
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
