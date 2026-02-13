import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '', username: '', isAdmin: false });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = credentials.isAdmin ? '/api/auth/admin-login' : '/api/auth/login';
      const data = credentials.isAdmin ? { username: credentials.username, password: credentials.password } : { email: credentials.email, password: credentials.password };
      const res = await axios.post(`/${url}`, data);
      localStorage.setItem('token', res.data.token);
      navigate(credentials.isAdmin ? '/admin' : '/homepage');
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="login">
        <Link to="/" className="Homebtn">
                Home
        </Link>
        <button className="Adminbtn" onClick={() => setCredentials({ ...credentials, isAdmin: !credentials.isAdmin })}>
            Switch to {credentials.isAdmin ? 'User' : 'Admin'} Login
        </button>
        
        <div className="login-container">
            <h1>Login</h1>
            <form className="form" onSubmit={handleSubmit}>
                {credentials.isAdmin ? (
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                    className="input"
                    required
                />
                ) : (
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                    className="input"
                    required
                />
                )}
                <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                className="input"
                required
                />
                <button type="submit" className="login-button">Login</button>
            </form>
      
      <p>Don't have an account? <Link to="/register" className="login-footer">Register</Link></p>
    </div>
    </div>
  );
};

export default Login;