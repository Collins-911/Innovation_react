import { useState } from 'react';
import Navigation from './Navigation.jsx';
import '../css/home.css';
import { FaMoon } from "react-icons/fa";
import NI_Blue from '../assets/NI_Blue.png'
import { RiUserAddLine } from 'react-icons/ri';




import {
  FaHome,
  FaUserGraduate,
  FaBook,
  FaClipboardList,
  FaChalkboardTeacher,
  FaUserPlus,
  FaTasks,
  FaFileAlt,
  FaMoneyBillWave,
  FaMoneyBill,
  FaUser,
  FaCog
} from 'react-icons/fa';

export default function Sidebar({ isOpen, onClose }) {
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
        { name: 'Dashboard', icon: <FaHome />, onClick: dashboardClick, roles: ['student', 'staff', 'admin'] },
        { name: 'Students', icon: <FaUserGraduate />, onClick: studentClick, roles: ['admin'] },
        { name: 'Courses', icon: <FaBook />, onClick: coursesClick, roles: ['admin']},
        { name: 'Curriculum', icon: <FaClipboardList />, onClick: curriculumClick, roles: ['admin'] },
        { name: 'Staffs', icon: <FaChalkboardTeacher />, onClick: staffClick, roles: ['admin'] },
      ],
    },
    {
      title: 'Tools',
      items: [
         { name: 'Register Staff', icon: < RiUserAddLine  />, onClick: registerstaffClick, roles: ['admin']},
        { name: 'Register Students', icon: <FaUserPlus />, onClick: registerClick, roles: ['admin']},
        { name: 'Add Courses', icon: <FaBook />, onClick: addcoursesClick, roles: ['admin']},
        { name: 'Assignment', icon: <FaTasks />, onClick: assignmentClick, roles: ['admin']},
        { name: 'Report', icon: <FaFileAlt />, onClick: reportClick, roles: ['admin']},
         { name: 'Student Payment', icon: <FaMoneyBillWave />, onClick: studentPayment, roles: ['admin']},
        { name: 'Payment', icon: <FaMoneyBill />, onClick: paymentClick, roles: ['admin']},
         
      ],
    },
    {
      title: 'My Account',
         items: [
        { name: 'Profile', icon: <FaUser />, onClick: profileClick },
        
      ],
    },
  ];

  const [openSectionIndex, setOpenSectionIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  const toggleTheme = () => {
  document.body.classList.toggle('dark');
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
// CHECK