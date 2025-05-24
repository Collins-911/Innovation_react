import React from "react";
import '../../css/login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const click = () => navigate('/signup');
    const move = () => navigate('/dashboard');

    return (
        <div className="login-container">
            <div className="glass-card">
                <h1>Welcome</h1>
                <p>Login to your account</p>
                <input type="text" placeholder="Username" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />

                     <div className="text2">
                              <div className="remember">
                        <input type="checkbox" id="remember" className="remember-me" />
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                   
                    <p className="forgot"><a href="#">Forgot Password?</a></p>
                    </div>
                  
              
                <button className="submit-btn" onClick={move}>Login</button>
                <p className="text3">New Member? <span onClick={click}>Sign up</span></p>
            </div>
        </div>
    );
}
