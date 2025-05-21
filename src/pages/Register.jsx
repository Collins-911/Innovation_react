import React from "react";
import '../css/home.css';
import '../css/register.css';
import Swal from 'sweetalert2'
import Imageuploader  from '../components/Imageuploader.jsx';
import Navbar from '../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';







export default function Register(){
	
	const submit = () => {
		Swal.fire({
		  	title: "Good job!",
		  	text: "Registration Successful",
		  	icon: "success"
		});
	}

	const courses = [
		"Product Management",
	    "Product Design",
	    "Mobile App Development",
	    "Full Stack Development",
	    "Data Science",
	    "Digital Marketing",
	    "Devops Engineering",
	    "Database Administration",
	    "Surveillance Systems",
	    "Cybersecurity",
	    "AI Development",
	]

	return(
		<>
			<div className="home-content">
				<Navbar/>
		        <div className="top-content">
		          	<Topnav/>
			        <section className="content">
			        	<div className="register-title">
			           		<h4>Register Student</h4>
			           		<p>Students / <span>Register student</span></p>
			           	</div>
			           	<div className="register-form">
			           		<div className="list-title">
			           			<h3>Basic info</h3>
			           		</div>
					       <div className="r-form">
					       		<form action="/register" method="post">
									<div className="form-group">
										<label htmlFor="fullname">Full Name:</label>
										<input type="text" id="fullname" name="fullname" required />
									</div>

									<div className="form-group">
										<label htmlFor="email">Email Address:</label>
										<input type="email" id="email" name="email" required />
									</div>

									<div className="form-group">
										<label htmlFor="phonenumber">Phone Number:</label>
										<input type="text" id="phonenumber" name="phonenumber" required />
									</div>

									<div className="form-group">
										<label htmlFor="address">Address:</label>
										<input type="address" id="address" name="address" required />
									</div>

									<div className="form-group">
										<label htmlFor="course">Course:</label>
										<select defaultValue="---">
										    {
										    	courses.map((item) => (
										        <option value={item}>
										          {item}
										        </option>
										      ))
											}
									    </select>
									</div>

									<div className="form-group">
										<label htmlFor="registration_date">Registration Date:</label>
										<input type="date" id="registration_date" name="registration_date" required />
									</div>
									<Imageuploader/>
									<button onClick={submit}>Submit</button>
								</form>
					       </div>
			           	</div>
			        </section>
		        </div>
	      	</div>
		</>
	)
}