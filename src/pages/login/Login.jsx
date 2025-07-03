// src/pages/Login.jsx

import React, { useState, useEffect } from "react";
import "../../css/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import BASE_URL from "../../utils/constants";
import { isAuthenticated } from "../../utils/authService";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoginState, setIsLoginState] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/general/dashboard");  // if  user is already logged in, redirect to dashboard
    }
  }, [navigate]);

  //  roles for log in
  const roles = ["staff", "student"];

  // validation of the form
  const validateFields = () => {
    const newErrors = {};

    if (!email.trim()) {    // validates the email field
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!password.trim()) {    // validates the password
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {    // password must be a minimum of 6 characters
      newErrors.password = "Password must be at least 6 characters.";
    }

    //  saves errors to state and returns true if there are no errors
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateFields()) return;
    setIsLoginState(true);     // if  validation fails, exit, else show loading state

    try {
      const selectedRole = roles.includes(role) ? role : "admin";
      const data = { email, password, role: selectedRole };   // default to admin, if role isn't chosen

      const response = await axios.post(`${BASE_URL}/auth/login`, data); // post api request with user data

      //  check if login succeeded and token is returned
      if (response.data?.status && response.data?.token) {
        const token = response.data.token;    //  store token

        // normalize inconsistent API response
        const normalizeUser = (user) => {
          if (user?.rol && !user.role) {
            user.role = user.rol;
            delete user.rol;
          }
          return user;
        };

        // extract user info based on role and normalise it
        let user = null;
        if (selectedRole === "staff") {
          user = normalizeUser({ ...response.data?.staff });
          user.role = "staff";
        } else if (selectedRole === "student") {
          user = normalizeUser({ ...response.data?.student });
          user.role = "student";
        } else {
          user = normalizeUser({ ...response.data?.admin });
          user.role = "admin";
        }

        // save user info to local storage and redirect to dashboard.
        localStorage.setItem("user", JSON.stringify({ token, user }));
        navigate("/general/dashboard");
      } else {
        Swal.fire("Login Failed", "Invalid credentials", "error");
      }
    } catch (error) {
      Swal.fire("Error", error.response?.data?.message || "An error occurred", "error");
    } finally {
      setIsLoginState(false);
    }
  };

  return (
    <div className="login-container">
      <div className="glass-card">
        <h1>Welcome</h1>
        <p>Login to your account</p>

        <input
          type="email"
          placeholder="Enter email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}   // React listens for any change in the input box
        />
        {errors.email && <div className="login-error">{errors.email}</div>}

        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="login-error">{errors.password}</div>}

        <select
          className="input-select"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select a user type</option>
          {roles.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>

        <button className="submit-btn" disabled={isLoginState} onClick={handleLogin}>
          {!isLoginState ? "Login" : "Please wait..."}
        </button>
      </div>
    </div>
  );
}
