import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../css/home.css";
import "../css/register.css";
import Sidebar from "../components/Sidebar.jsx";
import Topnav from "../components/Topnav.jsx";
import axios from "axios";
import BASE_URL from "../utils/constants";
import { getToken, getUser } from "../utils/authService";
import { useNavigate } from "react-router-dom";

export default function RegisterStaff() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = getToken();
    const user = getUser();

    if (!token || !user || user.role !== "admin") {
      Swal.fire("Access Denied", "Only admins can access this page", "warning").then(() => {
        navigate("/general/dashboard");
      });
    } else {
      setAuthorized(true);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (!formData.role.trim()) newErrors.role = "Role is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;
    setIsSubmitting(true);

    try {
      const token = getToken();

      if (!token) {
        Swal.fire("Unauthorized", "Please log in again.", "warning");
        setIsSubmitting(false);
        return;
      }

      const response = await axios.post(`${BASE_URL}/staff/register`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data?.status) {
        Swal.fire("Success!", "Staff registration successful.", "success");
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          password: "",
          role: "",
        });
        setErrors({});
        navigate("/general/staff");
      } else {
        Swal.fire("Registration Failed", response.data?.message || "Unknown error", "error");
      }
    } catch (error) {
      Swal.fire("Error", error.response?.data?.message || "An error occurred", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!authorized) return null;

  return (
    <div className="home-content">
      <Sidebar />
      <div className="top-content">
        <Topnav />
        <section className="content" style={{ padding: "1rem" }}>
          <div className="register-title" style={{ marginTop: "4rem" }}>
            <h4>Register Staff</h4>
            <p>Staffs / <span>Register staff</span></p>
          </div>

          <div className="register-form">
            <div className="list-title">
              <h3>Basic Info</h3>
            </div>

            <div className="r-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullname">Full Name:</label>
                  <input
                    className="form-input"
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                  {errors.fullname && <div className="login-error">{errors.fullname}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address:</label>
                  <input
                    className="form-input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="login-error">{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    className="form-input"
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="login-error">{errors.phone}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    className="form-input"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <div className="login-error">{errors.password}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="role">Role:</label>
                  <select
                    className="form-input"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="">Select role</option>
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                    <option value="manager">Manager</option>
                  </select>
                  {errors.role && <div className="login-error">{errors.role}</div>}
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
