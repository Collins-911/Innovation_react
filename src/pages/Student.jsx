import React from "react";
import '../css/home.css';
import '../css/student.css';
import Navbar from '../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';



export default function Student(){


	return (
		<>
			<div className="home-container">
		     	<Topnav/>
		        <div className="home">
		           <Navbar/>
			        <section className="student-home">
			           	<div className="student-title">
			           		<h4>All Students</h4>
			           		<p>Students / <span>All students</span></p>
			           	</div>
			           	<div className="student-list">
			           		<div className="list-title">
			           			<h3>All students list</h3>
			           		</div>
			           		<div className="student-table">
			           			<table >
			           				<thead>
			           					<tr>
				           					<th>Profile</th>
				           					<th>Student Name</th>
				           					<th>Course Name</th>
				           					<th>Phone Number</th>
				           					<th>Email Address</th>
				           					<th>Admission</th>
				           					<th>Action</th>
				           				</tr>
			           				</thead>
			           				<tbody>
			           					<tr>
				           					<td>image</td>
				           					<td>Jacinta Ada Bisong</td>
				           					<td>Web Development</td>
				           					<td>12345678900</td>
				           					<td>emailaddress@gmail.com</td>
				           					<td>12/10/2024</td>
				           					<td><button>Delete</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person2</td>
				           					<td>course2</td>
				           					<td>123456789</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button>Delete</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person3</td>
				           					<td>course3</td>
				           					<td>123456789</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button>Delete</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person4</td>
				           					<td>course4</td>
				           					<td>123456789</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button>Delete</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person5</td>
				           					<td>course5</td>
				           					<td>123456789</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button>Delete</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person6</td>
				           					<td>course6</td>
				           					<td>123456789</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button>Delete</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person7</td>
				           					<td>course7</td>
				           					<td>123456789</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button>Delete</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person8</td>
				           					<td>course8</td>
				           					<td>123456789</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button>Delete</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person9</td>
				           					<td>course9</td>
				           					<td>123456789</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button>Delete</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person10</td>
				           					<td>course10</td>
				           					<td>123456789</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button>Delete</button></td>
				           				</tr>
			           				</tbody>
			           			</table>
			           			<div className="list-btn">
			           				<button style={{backgroundColor: "rgba(200, 200, 200, 0.7)"}}>Previous</button>
			           				<button style={{backgroundColor: "rgba(15, 1, 122)", color: "white", width: "40px"}}>1</button>
			           				<button style={{backgroundColor: "rgba(200, 200, 200, 0.7)", width: "40px"}}>2</button>
			           				<button style={{backgroundColor: "rgba(200, 200, 200, 0.7)", width: "40px"}}>3</button>
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