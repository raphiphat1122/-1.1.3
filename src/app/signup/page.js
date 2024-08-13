import React from 'react';
import './SignUpPage.css';

export default function SignUpPage() {
    return (
        <div className="container">
            <h1>ลงทะเบียน</h1>
            <form action="/submit-signup" method="POST">
                <div className="form-group">
                    <input type="text" id="name" name="name" placeholder="ชื่อ" required />
                </div>
                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder="อีเมล" required />
                </div>
                <div className="form-group">
                    <input type="password" id="password" name="password" placeholder="รหัสผ่าน" required />
                </div>
                <div className="form-group">
                    <input type="submit" value="ลงทะเบียน" />
                </div>
            </form>
            <div className="message">
                มีบัญชีอยู่แล้ว? <a href="/login">เข้าสู่ระบบ</a>
            </div>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://line.me" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-line"></i>
                </a>
            </div>
        </div>
    );
}
