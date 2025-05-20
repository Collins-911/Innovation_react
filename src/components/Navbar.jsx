import { useState } from 'react';
import Navigation from './Navigation.jsx';
import '../css/home.css';

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
	} = Navigation();

	const navItems = [
		{
			menuTitle: "General",
			menuItems: [
				{ name: "Dashboard", onClick: dashboardClick },
				{ name: "Students", onClick: studentClick },
				{ name: "Courses", onClick: coursesClick },
				{ name: "Curriculum" },
				{ name: "Staffs", onClick: staffClick },
			],
		},
		{
			menuTitle: "Tools",
			menuItems: [
				{ name: "Register Students", onClick: registerClick },
				{ name: "Add Courses" },
				{ name: "Assignment" },
				{ name: "Report", onClick: reportClick },
				{ name: "Payment", onClick: paymentClick },
			],
		},
		{
			menuTitle: "My Profile",
			menuItems: [
				{ name: "Profile", onClick: profileClick },
				{ name: "Settings" },
			],
		},
	];

	const [openIndex, setOpenIndex] = useState(null);

	const toggleDropdown = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (

		<div className="sidebar">
			
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
									style={{ cursor: 'pointer' }}
								>
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
