import { useState } from 'react';
import Navigation from './Navigation.jsx';
import '../css/home.css';
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
	FaUser
} from 'react-icons/fa';

export default function Navbar() {
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
	} = Navigation();

	const navItems = [
		{
			menuTitle: "General",
			menuItems: [
				{ name: "Dashboard", onClick: dashboardClick, icon: <FaHome /> },
				{ name: "Students", onClick: studentClick, icon: <FaUserGraduate /> },
				{ name: "Courses", onClick: coursesClick, icon: <FaBook /> },
				{ name: "Curriculum", onClick: curriculumClick, icon: <FaClipboardList /> },
				{ name: "Staffs", onClick: staffClick, icon: <FaChalkboardTeacher /> },
			],
		},
		{
			menuTitle: "Tools",
			menuItems: [
				{ name: "Register Students", onClick: registerClick, icon: <FaUserPlus /> },
				{ name: "Add Courses", icon: <FaBook /> },
				{ name: "Assignment", onClick: assignmentClick, icon: <FaTasks /> },
				{ name: "Report", onClick: reportClick, icon: <FaFileAlt /> },
				{ name: "Payment", onClick: paymentClick, icon: <FaMoneyBill /> },
			],
		},
		{
			menuTitle: "My Profile",
			menuItems: [
				{ name: "Profile", onClick: profileClick, icon: <FaUser /> },
				{ name: "Settings", icon: <FaCog /> },
			],
		},
	];

	const [openIndex, setOpenIndex] = useState(null);

	const toggleDropdown = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="sidebar">
			<div className="logo">LOGO</div>
			
			{navItems.map((item, index) => (
				<div className="sidebar-section" key={index}>
					<p
						className={`sidebar-heading ${openIndex === index ? 'open' : ''}`}
						onClick={() => toggleDropdown(index)}
					>
						{item.menuTitle}
					</p>
					<ul className={`dropdown-list ${openIndex === index ? 'open' : ''}`}>
						{item.menuItems.map((menuItem, subIndex) => (
							<li key={subIndex}>
								<a
									onClick={menuItem.onClick}
									style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
								>
									{menuItem.icon}
									{menuItem.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
