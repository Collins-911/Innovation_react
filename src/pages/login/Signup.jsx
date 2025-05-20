import React from "react";
import '../../css/signup.css';
import { useNavigate } from 'react-router-dom';
import nugilogo from '../../assets/nugilogo.svg'


export default function Signup(){

	const navigate = useNavigate();

    const press = () => {
        navigate('/login')
    }


	return (
		<>
			<div className="container">
				<div className="box-1">
				</div>
				<div className="box-2">
					<div className="logo1">
						<img className="image1" src={nugilogo}/>
					</div>
					<h1>Sign up</h1>
					<div className="sign-btn">
						<button className="admin-btn">Admin</button>
						<button className="student-btn">Student</button>
					</div>
					<form action="/signup" method="post">
						<div className="form-group">
							<label htmlFor="fullname">Full Name:</label>
							<input type="text" id="fullname" name="fullname" required />
						</div>

						<div className="form-group">
							<label htmlFor="email">Email Address:</label>
							<input type="email" id="email" name="email" required />
						</div>

						<div className="form-group">
							<label htmlFor="username">Username:</label>
							<input type="text" id="username" name="username" required />
						</div>

						<div className="form-group">
							<label htmlFor="password">Password:</label>
							<input type="password" id="password" name="password" required />
						</div>

						<div className="form-group">
							<label htmlFor="confirm_password">Confirm Password:</label>
							<input type="password" id="confirm_password" name="confirm_password" required />
						</div>
						<button>Create Account</button>
					</form>
					<p>Already have an account? <span onClick={press}>Login</span></p>
				</div>
			</div>

		</>
	)
}