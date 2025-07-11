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

export default function Register() {
  const navigate = useNavigate();

  // Redirect non-admin users
  useEffect(() => {
    const user = getUser();
    const token = getToken();

    console.log("🧾 User from localStorage:", user);

    if (!token || user?.role !== "admin") {
      Swal.fire("Access Denied", "Only admins can access this page", "warning");
      navigate("/general/dashboard");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

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

    if (!formData.address.trim()) newErrors.address = "Address is required.";

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

      const response = await axios.post(
        `${BASE_URL}/students/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data?.status) {
        Swal.fire("Success!", "Student registration successful.", "success");
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          password: "",
          address: "",
        });
        setErrors({});
      } else {
        Swal.fire("Registration Failed", response.data?.message || "Unknown error", "error");
      }
    } catch (error) {
      console.error("Registration error:", error);
      Swal.fire("Error", error.response?.data?.message || "An error occurred", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home-content">
      <Sidebar />
      <div className="top-content">
        <Topnav />
        <section className="content" style={{ padding: "1rem" }}>
          <div className="register-title" style={{ marginTop: "4rem" }}>
            <h4>Register Student</h4>
            <p>Students / <span>Register student</span></p>
          </div>

          <div className="register-form">
            <div className="list-title">
              <h3>Basic Info</h3>
            </div>

            <div className="r-form">
              <form onSubmit={handleSubmit}>
                {[
                  { label: "Full Name", id: "fullname", type: "text" },
                  { label: "Email Address", id: "email", type: "email" },
                  { label: "Phone", id: "phone", type: "text" },
                  { label: "Password", id: "password", type: "password" },
                  { label: "Address", id: "address", type: "text" },
                ].map(({ label, id, type }) => (
                  <div key={id} className="form-group">
                    <label htmlFor={id}>{label}:</label>
                    <input
                      className="form-input"
                      type={type}
                      id={id}
                      name={id}
                      value={formData[id]}
                      onChange={handleChange}
                      required
                    />
                    {errors[id] && <div className="login-error">{errors[id]}</div>}
                  </div>
                ))}

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