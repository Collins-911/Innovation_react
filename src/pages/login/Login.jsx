import React, { useState, useEffect } from "react";
import '../../css/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../../utils/constants';
import { isAuthenticated } from "../../utils/authService";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/general/dashboard");
    }
  }, [navigate]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isLoginState, setIsLoginState] = useState(false);
  const [errors, setErrors] = useState({});

  const roles = ["staff", "student"];
  const adminEmails = ["admin@domain.com"]; // <-- Update with real admin email(s)

 const validateFields = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }



    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};


  const handleLogin = async () => {
    if (!validateFields()) return;

    setIsLoginState(true);

    try {
      const selectedRole = ["staff", "student"].includes(role) ? role : "admin";


      const data = {
        email,
        password,
        role: selectedRole
      };

      const response = await axios.post(`${BASE_URL}/auth/login`, data);

      console.log("Login response:", response.data);

      if (response.data?.status && response.data?.token) {
        const token = response.data.token;

        let user = null;

        if (selectedRole === "staff") {
          user = { ...response.data?.staff, role: "staff" };
        } else if (selectedRole === "student") {
          user = { ...response.data?.student, role: "student" };
        } else {
          user = { ...response.data?.admin, role: "admin" };
        }


        localStorage.setItem("user", JSON.stringify({ token, user }));

        console.log("Saved to storage:", localStorage.getItem("user"));
        console.log("Authenticated:", isAuthenticated());

        navigate("/general/dashboard");
      } else {
        console.warn("Login response missing token or status:", response.data);
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "An error occurred. Please try again.");
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
          onChange={(e) => setEmail(e.target.value)}
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
        {errors.role && <div className="login-error">{errors.role}</div>}

        <div className="login-row">
          <label className="remember-wrap">
            <input type="checkbox" className="remember-me" />
            Remember Me
          </label>
          <a className="forgot" href="#">Forgot Password?</a>
        </div>

        <button className="submit-btn" disabled={isLoginState} onClick={handleLogin}>
          {!isLoginState ? "Login" : "Please wait . . ."}
        </button>
      </div>
    </div>
  );
}
