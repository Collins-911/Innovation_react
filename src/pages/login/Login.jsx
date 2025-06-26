import React from "react";
import '../../css/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";
import * as constant from '../../utils/constants';
import { useCookies } from 'react-cookie';
import { isAuthenticated } from "../../utils/authService";

export default function Login() {

  const navigate = useNavigate();
   if (isAuthenticated()){
        navigate("/general/dashboard")
   }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [isLoginState, setIsLoginState] = useState(false);
  const [cookies, setCookie] = useCookies(['user']);
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});

  const roles = ["staff", "student"];

  // 🔍 Validation filters
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

    // if (!role) {
    //   newErrors.role = "Please select a user type.";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateFields()) return;

    setIsLoginState(true);

    try {
      const finalUserType = role === roles[0] ? roles[0] : role === roles[1] ? roles[1] : "admin";

      const data = {
        email,
        password,
        role: finalUserType
      };

      const response = await axios.post(`${constant.default}/auth/login`, data);

      if (response.data?.status) {
        const token = response.data.token;

        localStorage.setItem(
                'user', JSON.stringify({
                token: token,
                user: response.data?.admin
            }
        ))
        
        // setCookie('user', JSON.stringify({
        //     token: token,
        //     user: response.data?.admin
        // }), { path: '/', maxAge: 3600 });
        navigate('/general/dashboard');
      }

    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(error.response.data.message || 'Login failed');
      } else {
        alert('An error occurred. Please try again.');
      }
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

        <div className="text2">
          <div className="remember">
            <input type="checkbox" id="remember" className="remember-me" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <p className="forgot"><a href="#">Forgot Password?</a></p>
        </div>

        <button className="submit-btn" disabled={isLoginState} onClick={handleLogin}>
          {!isLoginState ? "Login" : "Please wait . . ."}
        </button>
      </div>
    </div>
  );
}
