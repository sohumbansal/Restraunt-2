import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username,
      email,
      phone,
      password,
    };

    console.log('Signup Form submitted:', formData);

    try {
      const response = await axios.post('http://localhost:8000/register/', formData);
      console.log('Signup Successful:', response.data);
    } catch (error) {
      console.error('Signup Failed:', error.message);
      if (error.response) {
        console.error('Response Data:', error.response.data);
        console.error('Response Status:', error.response.status);
        console.error('Response Headers:', error.response.headers);
      }
    }
  };

  return (
    <>
      <Link to="/" className="home-link">
        <button className="home-button">Home</button>
      </Link>
      <h2 className="name-rest">Sign Up</h2>
      <br />
      <br />
      <br />
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p />

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
      <div className="form-below">
        Already have an account?
        <Link to="/login">Login</Link>
      </div>
    </>
  );
}

export default Signup;
