import React from "react";
import '../css/home.css';
import '../css/register.css';
import Swal from 'sweetalert2';
import Imageuploader from '../components/Imageuploader.jsx';
import Topnav from '../components/Topnav.jsx';
import Sidebar from '../components/Sidebar.jsx';

export default function RegisterStaff() {
  const submitstaff = () => {
    Swal.fire({
      title: "Good job!",
      text: "Registration Successful",
      icon: "success"
    });
  };

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
    "AI Development"
  ];

  return (
    <>
      <div className="home-content">
        <Sidebar />
        <div className="top-content">
          <Topnav />
          <section className="content" style={{ padding: "1rem" }}>
            <div className="register-title" style={{ marginTop: "4rem" }}>
              <h4>Register Staff</h4>
              <p>Staffs / <span>Register staffs</span></p>
            </div>
            <div className="register-form">
              <div className="list-title">
                <h3>Basic info</h3>
              </div>
              <div className="r-form">
                <form action="/register" method="post">
                  <div className="form-group">
                    <label htmlFor="fullname">Full Name:</label>
                    <input type="text" id="fullname" name="fullname" required className="form-input" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" required className="form-input" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phonenumber">Phone Number:</label>
                    <input type="text" id="phonenumber" name="phonenumber" required className="form-input" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" required className="form-input" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="course">Course:</label>
                    <select id="course" name="course" required className="form-input">
                      <option disabled selected value="">---</option>
                      {courses.map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="registration_date">Registration Date:</label>
                    <input type="date" id="registration_date" name="registration_date" required className="form-input" />
                  </div>

                  <Imageuploader />
                  <button onClick={submitstaff}>Submit</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
