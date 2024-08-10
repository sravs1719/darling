import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import dnaImage from '../assets/dna.jpg'; // Path from `components` to `assets`




function LoginPage() {
    const navigate = useNavigate();

    return (
        <div className="parent-container">
            <div className="photo-container">
                <div className="photo">
                    <img src="/doctor.jpg" alt="Doctor Image" />
                </div>
            </div>
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="Email">Email ID</label>
                        <input type="text" id="Email" placeholder="Enter your Email ID" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="Password" placeholder="Enter your Password" required />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                    <div className="signup-text">
                        Already have an account? <a onClick={() => navigate('/register')}>Sign up here</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
