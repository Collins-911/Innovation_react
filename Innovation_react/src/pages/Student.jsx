import React from "react";
import '../css/home.css';
import '../css/student.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';
import dummy from '../assets/dummy.webp'
import { useEffect } from "react";
// import axios from 'axois';
import * as constant from '../utils/constants';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";



export default function Student(){

 	const [cookies, setCookie] = useCookies(['user']);
 	const navigate = useNavigate();
	useEffect(() => {
		getStudents();
	}, []);

	const getStudents = async () => {
		const studentsListContainer = document.querySelector('#student-list-body');
		try {
			const response = await fetch(`${constant.default}/students/getStudent`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json',
				//   'Authorization': `Bearer ${cookies.user}`,
				},
				// credentials: 'include'
			});

			if (!response.ok) {
				console.error(`HTTP error! status: ${response.status}`);
				const errorData = await response.json();
				if (response.status === 401) {
				navigate('/');
				} else {
				throw new Error(`HTTP error!! status: ${response.status}, message: ${errorData.message}`);
				}
			}
				const data = await response.json();
			console.log('Students data:', data);
			studentsListContainer.innerHTML = ''; // Clear existing content

			if (data) {
				data.forEach((student) => {
							const row = document.createElement('tr');
							row.className = 'studentElement';
							row.dataset.studentId = student._id; //Store student id as a data attribute
							row.dataset.studentName = student.fullname; //Store student name

							row.innerHTML = `
							<td><img src="${student.profileImage || dummy}" alt="Profile" /></td>
							<td>${student.fullname}</td>
							<td>${student.course[0] ? student.course[0].name : 'N/A'}</td>
							<td>${student.phone}</td>
							<td>${student.email}</td>
							<td>${new Date(student.registrationDate).toLocaleDateString()}</td>
							<td><button  className="deleteBtn">Delete</button></td>
							`;
							studentsListContainer.appendChild(row);
							// onClick={() => deleteStudent(student._id)}

							// const deleteButton = row.querySelector('.deleteBtn');
							// deleteButton.addEventListener('click', deleteStudent.bind(null, student._id));
						});

			} else {

				const noDataRow = document.createElement('tr');
				noDataRow.innerHTML = '<td colspan="7">No students found</td>';
				studentsListContainer.appendChild(noDataRow);

			}
			
		} catch (error) {

			console.error('Error fetching students:', error);
			alert('Failed to fetch students. Please try again later.');

		}
  	};

  document.addEventListener('DOMContentLoaded', () => getStudents())

	return (
		<>
			<div className="home-content">
		     	<Sidebar/>
		        <div className="top-content">
		           <Topnav/>
			        <section className="content" style={{padding: "1rem"}}>
			           	<div className="student-title" style={{marginTop: "4rem"}}>
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
			           				<tbody id="student-list-body">
			           					{/* <tr>
				           					<td><img src={dummy} /></td>
				           					<td>Jacinta Ada Bisong</td>
				           					<td>Web Development</td>
				           					<td>12345678900</td>
				           					<td>emailaddress@gmail.com</td>
				           					<td>12/10/2024</td>
				           					<td><button>Delete</button></td>
				           				</tr>
										<tr>
				           					<td><img src={dummy} /></td>
				           					<td>Jacinta Ada Bisong</td>
				           					<td>Web Development</td>
				           					<td>12345678900</td>
				           					<td>emailaddress@gmail.com</td>
				           					<td>12/10/2024</td>
				           					<td><button>Delete</button></td>
				           				</tr>
										<tr>
				           					<td><img src={dummy} /></td>
				           					<td>Jacinta Ada Bisong</td>
				           					<td>Web Development</td>
				           					<td>12345678900</td>
				           					<td>emailaddress@gmail.com</td>
				           					<td>12/10/2024</td>
				           					<td><button>Delete</button></td>
				           				</tr>
										<tr>
				           					<td><img src={dummy} /></td>
				           					<td>Jacinta Ada Bisong</td>
				           					<td>Web Development</td>
				           					<td>12345678900</td>
				           					<td>emailaddress@gmail.com</td>
				           					<td>12/10/2024</td>
				           					<td><button>Delete</button></td>
				           				</tr>
										<tr>
				           					<td><img src={dummy} /></td>
				           					<td>Jacinta Ada Bisong</td>
				           					<td>Web Development</td>
				           					<td>12345678900</td>
				           					<td>emailaddress@gmail.com</td>
				           					<td>12/10/2024</td>
				           					<td><button>Delete</button></td>
				           				</tr>
										<tr>
				           					<td><img src={dummy} /></td>
				           					<td>Jacinta Ada Bisong</td>
				           					<td>Web Development</td>
				           					<td>12345678900</td>
				           					<td>emailaddress@gmail.com</td>
				           					<td>12/10/2024</td>
				           					<td><button>Delete</button></td>
				           				</tr>
										<tr>
				           					<td><img src={dummy} /></td>
				           					<td>Jacinta Ada Bisong</td>
				           					<td>Web Development</td>
				           					<td>12345678900</td>
				           					<td>emailaddress@gmail.com</td>
				           					<td>12/10/2024</td>
				           					<td><button>Delete</button></td>
				           				</tr>
										<tr>
				           					<td><img src={dummy} /></td>
				           					<td>Jacinta Ada Bisong</td>
				           					<td>Web Development</td>
				           					<td>12345678900</td>
				           					<td>emailaddress@gmail.com</td>
				           					<td>12/10/2024</td>
				           					<td><button>Delete</button></td>
				           				</tr>
										<tr>
				           					<td><img src={dummy} /></td>
				           					<td>Jacinta Ada Bisong</td>
				           					<td>Web Development</td>
				           					<td>12345678900</td>
				           					<td>emailaddress@gmail.com</td>
				           					<td>12/10/2024</td>
				           					<td><button>Delete</button></td>
				           				</tr>
										<tr>
				           					<td><img src={dummy} /></td>
				           					<td>Jacinta Ada Bisong</td>
				           					<td>Web Development</td>
				           					<td>12345678900</td>
				           					<td>emailaddress@gmail.com</td>
				           					<td>12/10/2024</td>
				           					<td><button>Delete</button></td>
				           				</tr> */}
			           				</tbody>
			           			</table>
			           			{/* <div className="list-btn">
			           				<button style={{backgroundColor: "rgba(200, 200, 200, 0.7)"}}>Previous</button>
			           				<button style={{backgroundColor: "rgba(15, 1, 122)", color: "white", width: "40px"}}>1</button>
			           				<button style={{backgroundColor: "rgba(200, 200, 200, 0.7)", width: "40px"}}>2</button>
			           				<button style={{backgroundColor: "rgba(200, 200, 200, 0.7)", width: "40px"}}>3</button>
			           				<button style={{backgroundColor: "rgba(15, 1, 122)", color: "white"}}>Next</button>
			           			</div> */}
			           		</div>
			           	</div>
		          </section>
				  
		        </div>
			
	      	</div>
			
		</>
	)
}