import { useState } from 'react';
import Navigation from './Navigation.jsx';
import '../css/home.css';

import NI_Blue from '../assets/NI_Blue.png'
import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaMoneyBill,
  FaUserPlus,
  FaClipboardList,
  FaTasks,
  FaFileAlt,
  FaCog,
  FaUser,
  FaMoneyBillWave,
} from 'react-icons/fa';

export default function Navbar({ isOpen, onClose }) {
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
        { name: 'Settings', icon: <FaCog />, onClick: settingsClick },  
      ],
    },
  ];

  const [openSectionIndex, setOpenSectionIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  return (

  <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
			<img src={NI_Blue} alt="" />
		</div>    

      {navSections.map((section, index) => (
        <section className="sidebar-section" key={index}>
          <h3
            className={`sidebar-heading ${openSectionIndex === index ? 'open' : ''}`}
            onClick={() => toggleSection(index)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') toggleSection(index);
            }}
          >
            {section.title}
          </h3>

          <ul className={`dropdown-list ${openSectionIndex === index ? 'open' : ''}`}>
            {section.items.map((item, i) => (
              <li key={i}>
                <a
                  href="#!"
                  onClick={item.onClick}
                  style={{ cursor: item.onClick ? 'pointer' : 'default', display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  {item.icon}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </aside>
  );
}
