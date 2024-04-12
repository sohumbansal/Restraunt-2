import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import { redirect } from 'react-router-dom';

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: '',
  });

  const [bookingFormData, setBookingFormData] = useState({
    date: '',
    timing: '',
    numberOfPeople: '',
  });

  const [loggedInUser, setLoggedInUser] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8000/login/', loginFormData);
      console.log('Login Successful:', response.data);
      setLoggedInUser(response.data);
    } catch (error) {
      console.error('Login Failed:', error.response.data);
    }
    console.log('Login Successful:', loginFormData);
    setLoggedInUser(true);  
  };
  

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Form submitted:', bookingFormData);
    };

  return (
    <>
    { loggedInUser === false ?
    <>
      <Link to="/" className="home-link">
        <button className="home-button">Home</button>
      </Link>
      <h2 className="name-rest">Login</h2>
      <br />
      <br />
      <br />
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleLoginSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            onChange={(e) => setLoginFormData({ ...loginFormData, username: e.target.value })}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setLoginFormData({ ...loginFormData, password: e.target.value })}
            required
          />
          <p />

          <button type="submit" className="signup-button">
            Login
          </button>
        </form>
      </div>
      <div className='form-below'>
        Don't have an account?
        <Link to="/Signup">SignUp</Link>
      </div>
      </>
      : 
        <div className="booking-page-container">
          <Link to="/" className="home-link">
            <button className="home-button">Home</button>
          </Link>
          <div className="booking-form-container card-container">
            <h1>Book a Table at The Happy Place</h1>
            <form onSubmit={handleBookingSubmit}>
              <div className="form-group">
                <label htmlFor="date">Select Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={bookingFormData.date}
                  onChange={(e) => setBookingFormData({ ...bookingFormData, date: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="timing">Select Timing:</label>
                <input
                  type="time"
                  id="timing"
                  name="timing"
                  value={bookingFormData.timing}
                  onChange={(e) => setBookingFormData({ ...bookingFormData, timing: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="numberOfPeople">Number of People:</label>
                <input
                  type="number"
                  id="numberOfPeople"
                  name="numberOfPeople"
                  value={bookingFormData.numberOfPeople}
                  onChange={(e) => setBookingFormData({ ...bookingFormData, numberOfPeople: e.target.value })}
                  required
                />
              </div>
              <button type="submit">Book Now</button>
            </form>
          </div>
        </div>
      }
    </>
  );
}

export default Login;
