import React from "react";
import '../css/home.css';
import '../css/staff.css';
import '../css/student.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';
import dummy from '../assets/dummy.webp'






export default function Staff(){

	return(
		<>
			<div className="home-content">
		      	<Sidebar/>
		        <div className="top-content">
			       <Topnav/>
		          	<section className="content" style={{padding: "1rem"}}>
		          		<div className="staff-title" style={{marginTop: "4rem"}}>
			           		<h4>All Staffs</h4>
			           		<p>Staffs / <span>All staffs</span></p>
			           	</div>
			           	<div className="staff-list">
			           		<div className="list-title">
			           			<h3>All Staffs list</h3>
			           		</div>
			           		<div className="staff-table">
			           			<table >
			           				<thead>
			           					<tr>
				           					<th>Profile</th>
				           					<th>Staff Name</th>
				           					<th>Course Name</th>
				           					<th>Phone Number</th>
				           					<th>Email Address</th>
				           					<th>Action</th>
				           				</tr>
			           				</thead>
			           				<tbody>
			           					<tr>
			           					<td><img src={dummy} /></td>
			           					<td>Jacinta Ada Bisong</td>
			           					<td>Web Development</td>
			           					<td>12345678900</td>
			           					<td>emailaddress@gmail.com</td>
			           					<td><button>Delete</button></td>
			           				</tr>
			           				<tr>
			           					<td><img src={dummy} /></td>
			           					<td>person2</td>
			           					<td>course2</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td><button>Delete</button></td>
			           				</tr>
			           				<tr>
			           					<td><img src={dummy} /></td>
			           					<td>person3</td>
			           					<td>course3</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td><button>Delete</button></td>
			           				</tr>
			           				<tr>
			           					<td><img src={dummy} /></td>
			           					<td>person4</td>
			           					<td>course4</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td><button>Delete</button></td>
			           				</tr>
			           				<tr>
			           					<td><img src={dummy} /></td>
			           					<td>person5</td>
			           					<td>course5</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td><button>Delete</button></td>
			           				</tr>
			           				<tr>
			           					<td><img src={dummy} /></td>
			           					<td>person6</td>
			           					<td>course6</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td><button>Delete</button></td>
			           				</tr>
			           				<tr>
			           					<td><img src={dummy} /></td>
			           					<td>person7</td>
			           					<td>course7</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td><button>Delete</button></td>
			           				</tr>
			           				<tr>
			           					<td><img src={dummy} /></td>
			           					<td>person8</td>
			           					<td>course8</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td><button>Delete</button></td>
			           				</tr>
			           				<tr>
			           					<td><img src={dummy} /></td>
			           					<td>person9</td>
			           					<td>course9</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td><button>Delete</button></td>
			           				</tr>
			           				<tr>
			           					<td><img src={dummy} /></td>
			           					<td>person10</td>
			           					<td>course10</td>
			           					<td>123456789</td>
			           					<td>email address</td>
			           					<td><button>Delete</button></td>
			           				</tr>
			           				</tbody>
			           			</table>
			           			<div className="list-btn">
			           				<button style={{backgroundColor: "rgba(200, 200, 200, 0.7)"}}>Previous</button>
			           				<button style={{backgroundColor: "rgba(15, 1, 122)", color: "white", width: "40px"}}>1</button>
			           				<button style={{backgroundColor: "rgba(200, 200, 200, 0.7)", width: "40px"}}>2</button>
			           				<button style={{backgroundColor: "rgba(15, 1, 122)", color: "white"}}>Next</button>
			           			</div>
			           		</div>
			           	</div>
		          	</section>
		        </div>
				
		    </div>
		</>
	)
}