import { Link } from 'react-router-dom';
import icon2 from '../assets/icon2.svg';
import icon7 from '../assets/icon7.jpg';
import '../css/top.css';
import React, { useState } from 'react';
import Navigation from './Navigation';
import {
  FaHome, FaUserGraduate, FaBook, FaClipboardList, FaChalkboardTeacher,
  FaUserPlus, FaTasks, FaFileAlt, FaMoneyBillWave, FaMoneyBill, FaUser
} from 'react-icons/fa';
import { RiUserAddLine } from 'react-icons/ri';
import { CiMenuFries } from "react-icons/ci";
import { Outlet } from 'react-router-dom';

export default function TopNav() {
  const w3School = 'https://www.w3schools.com/';
  const nugi = 'https://nugitech.com/';
  const front = 'https://www.frontendmentor.io/home';
  const free = 'https://www.freecodecamp.org/';

  const [showSidebar, setShowSidebar] = useState(false);
  const [openSectionIndex, setOpenSectionIndex] = useState(null);

  const toggleSidebar = () => setShowSidebar(prev => !prev);
  const toggleSection = index => setOpenSectionIndex(prev => (prev === index ? null : index));

  const {
    dashboardClick,
    studentClick,
    registerClick,
    paymentClick,
    staffClick,
    coursesClick,
    reportClick,
    profileClick,
    curriculumClick,
    assignmentClick,
    settingsClick,
    addcoursesClick,
    studentPayment,
    registerstaffClick
  } = Navigation();

  const navSections = [
    {
      title: 'General',
      items: [
        { name: 'Dashboard', icon: <FaHome />, onClick: dashboardClick },
        { name: 'Students', icon: <FaUserGraduate />, onClick: studentClick },
        { name: 'Courses', icon: <FaBook />, onClick: coursesClick },
        { name: 'Curriculum', icon: <FaClipboardList />, onClick: curriculumClick },
        { name: 'Staffs', icon: <FaChalkboardTeacher />, onClick: staffClick },
      ],
    },
    {
      title: 'Tools',
      items: [
        { name: 'Register Staff', icon: <RiUserAddLine />, onClick: registerstaffClick },
        { name: 'Register Students', icon: <FaUserPlus />, onClick: registerClick },
        { name: 'Add Courses', icon: <FaBook />, onClick: addcoursesClick },
        { name: 'Assignment', icon: <FaTasks />, onClick: assignmentClick },
        { name: 'Report', icon: <FaFileAlt />, onClick: reportClick },
        { name: 'Student Payment', icon: <FaMoneyBillWave />, onClick: studentPayment },
        { name: 'Payment', icon: <FaMoneyBill />, onClick: paymentClick },
      ],
    },
    {
      title: 'Profile',
      items: [
        { name: 'Profile', icon: <FaUser />, onClick: profileClick },
      ],
    },
  ];

  return (
    <div className="topnav-container">
      <div className="top">
        <div className="hamburger" onClick={toggleSidebar}>
          <CiMenuFries size={30} color="#fff" style={{ cursor: 'pointer' }} />
        </div>

        <div className="right-section">
          <div className="searchInput">
            <input type="text" placeholder="Search..." className="search" />
            <button className="searchBtn">
              <img src={icon2} alt="Search" />
            </button>
          </div>

          <Link to="/profile/profile">
            <img src={"https://i.ytimg.com/vi/DEGvXTJ5JPA/maxresdefault.jpg"} alt="Profile" className="pfp" />
          </Link>
        </div>

        <div className={`sidebar ${showSidebar ? 'show' : 'hidden'}`}>
          {navSections.map((section, index) => (
            <section className="sidebar-section" key={index}>
              <h3
                className={`sidebar-heading ${openSectionIndex === index ? 'open' : ''}`}
                onClick={() => toggleSection(index)}
              >
                {section.title}
              </h3>
              <ul className={`dropdown-list ${openSectionIndex === index ? 'open' : ''}`}>
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a href="#!" onClick={item.onClick} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      {item.icon}
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <Outlet />
      </div>
    </div>
  );
}
