import React from "react";
import '../../css/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, props } from "react";
import * as constant from '../../utils/constants'


export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoginState, setIsLoginState] = useState(false);


    const handleLogin = async () => {
        setIsLoginState(true)
        try {
            const response = await axios.post(`${constant.default}/auth/admin/login`, {
                email,
                password
            });

            if(response.data?.status){
                navigate('/general/dashboard')
            }

        } catch (error) {
            console.log(error)
            if (error.response) {
                // Server responded with a status other than 2xx
                alert(error.response.data.message || 'Login failed');
            } else {
                // Network error or other issue
                alert('An error occurred. Please try again.');
            }
        }finally{
            setIsLoginState(false)
        }
    };

    return (
        <div className="login-container">
            <div className="glass-card">
                <h1>Welcome</h1>
                <p>Login to your account</p>
                <input type="email" placeholder="Enter email" className="input-field"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" className="input-field"  value={password}  onChange={(e) => setPassword(e.target.value)}/>

                     <div className="text2">
                              <div className="remember">
                        <input type="checkbox" id="remember" className="remember-me" />
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                   
                    <p className="forgot"><a href="#">Forgot Password?</a></p>
                    </div>
                  
              
                <button className="submit-btn" disabled={isLoginState} onClick={handleLogin}>{ !isLoginState ? "Login" :  "Please wait . . ."}</button>
            </div>
        </div>
    );
}
