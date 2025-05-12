import React, { useState } from 'react';
import './login.css';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in as: ${email}`);
  };

  return (
    <div className="login-page">
      <div className="left-panel">
        <div className="welcome-text">
          <h1>Welcome Back</h1>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Sign in</h2>
          <label style={{paddingRight: "10px"}}>Email Address</label>
          <input
            type="email"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={{paddingRight: "10px"}}>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="checkbox">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <button type="submit" className="login-btn">Sign in now</button>
          <p className="forgot-link"><a href="#">Lost your password?</a></p>

          <p className="terms">
            By clicking on "Sign in now" you agree to our <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>
          </p>
        </form>
      </div>
    </div>
  );
}
