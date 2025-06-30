import React from "react";
import '../../css/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect} from "react";
import * as constant from '../../utils/constants';
import { useCookies } from 'react-cookie';
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
  // const [userType, setUserType] = useState('');
  const [isLoginState, setIsLoginState] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['token']);
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});

  const roles = ["staff", "student"];

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
      const finalUserType = role === roles[0] ? roles[0] : role === roles[1] ? roles[1] : "admin";

      const data = {
        email,
        password,
        role: finalUserType
      };

      const response = await axios.post(`${constant.default}/auth/login`, data, {withCredentials: true});

      if (response.data?.status) {
        const token = response.data.token;
        setCookie('token', token, { path: '/', maxAge: 3600 , secure: false, sameSite: 'strict', }); // Set cookie for 1 hour.. in production environment, set secure to 'true' and sameSite to 'none' domain: '192.168.0.121'

        // localStorage.setItem('user', JSON.stringify({
        //   token: token,
        //   user: response.data?.admin
        // }));

        navigate('/general/dashboard');
      }

    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || 'An error occurred. Please try again.');
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
