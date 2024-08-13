import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form action="/submit-signup" method="POST">
                <div className="form-group">
                    <input type="text" id="name" name="name" placeholder="Name" required />
                </div>
                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <input type="password" id="password" name="password" placeholder="Password" required />
                </div>
                <div className="form-group">
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
            <div className="message">
                Already have an account? <a href="/login">Log in</a>
            </div>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" data-tooltip="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" data-tooltip="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://line.me" target="_blank" data-tooltip="LINE">
                    <i className="fab fa-line"></i>
                </a>
            </div>
        </div>
    );
};

export default SignUp;
