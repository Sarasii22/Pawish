import React, { useState } from "react";
import "./Register.css";
import { Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    firstName: undefined,
    lastName: undefined,
    country: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    const { firstName, lastName, country, email, password, confirmPassword } = credentials;

    if (!firstName || !lastName || !country || !email || !password || !confirmPassword) {
      alert("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setSuccess(true);
  };

  return (
    <div>
      <div className="register">
        <div className="register-container">
          <h1>Sign Up</h1>
          <Form className="register-form" onSubmit={handleLoginClick}>
            <div className="left-column">
              <FormGroup>
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Country"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
            </div>

            <div className="right-column">
              <FormGroup>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
            </div>

            <div className="register-footer">
              <button type="submit" className="register-button">
                Sign Up
              </button>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
          {success && (
            <div className="register-success">
              <p>Registration successful! (No backend connection)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;