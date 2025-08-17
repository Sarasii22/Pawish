
import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/login', credentials);
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      navigate('/login/loginhome'); // Adjust if this route changes
    } catch (error) {
      console.error(error.response?.data);
      alert(error.response?.data?.error || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login">
      <Link to="/" className="Homebtn">
        Home
      </Link>
      <Link to="/admin" className="Adminbtn">
        Admin
      </Link>
      <div className="login-container">
        <h1>Login</h1>
        <Form onSubmit={handleLoginClick}>
          <FormGroup controlId="email">
            <FormLabel>Username</FormLabel>
            <FormControl
              type="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup controlId="password" className="mt-3">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <button variant="primary" type="submit" className="login-button ">
            Login
          </button>
        </Form>
        <div className="login-footer">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
