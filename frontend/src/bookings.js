import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    timing: '',
    numberOfPeople: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="booking-page-container">
      <Link to="/" className="home-link">
        <button className="home-button">Home</button>
      </Link>
      <div className="booking-form-container card-container">
        <h1>Book a Table at The Happy Place</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="date">Select Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="timing">Select Timing:</label>
            <input
              type="time"
              id="timing"
              name="timing"
              value={formData.timing}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="numberOfPeople">Number of People:</label>
            <input
              type="number"
              id="numberOfPeople"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
