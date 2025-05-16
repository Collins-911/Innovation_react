import Navigation  from './Navigation.jsx';
import icon2 from '../assets/icon2.svg';
import icon7 from '../assets/icon7.jpg';
import '../css/home.css';

export default function Navbar(){

	const { dashboardClick, studentClick, registerClick, paymentClick, staffClick, coursesClick, reportClick, profileClick} = Navigation();

	const navItems = [
		{
			menuTitle: "General",
			menuItems: [
				{name: "Dashboard", onClick: dashboardClick},
				{name: "Students", onClick: studentClick},
				{name: "Courses", onClick: coursesClick },
				{name: "Curriculum"},
				{name: "Staffs", onClick: staffClick},
			]
		},
		{
			menuTitle: "Tools",
			menuItems: [
				{name: "Register Students", onClick: registerClick},
				{name: "Add Courses"},
				{name: "Assignment"},
				{name: "Report", onClick: reportClick},
				{name: "Payment", onClick: paymentClick},
			]
		},
		{
			menuTitle: "My Profile",
			menuItems: [
				{name: "Profile", onClick: profileClick},
				{name: "Settings"},
			]
		},
	]

	return (
		<>

          	<div className="sidebar">
				{
				    navItems.map((item, index) => (
					    <div key={index}>
					        <p className="sidebar-heading">{item.menuTitle}</p>
					        <ul>
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
				    ))
				}
			</div>

		</>
	)
}