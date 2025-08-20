import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      alert('Please fill in all required fields.');
      return;
    }
    setSuccess(true);
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
          <Link to="/homepage" variant="primary" type="submit" className="login-button ">
            Login
          </Link>
        </Form>
        {success && (
          <div className="login-success">
            <p>Login successful! (No backend connection)</p>
          </div>
        )}
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
