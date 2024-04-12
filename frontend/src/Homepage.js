import React from 'react';
import { Link } from 'react-router-dom';
import imgSrc from "./Restraunt__photo.jpg";

const Homepage = () => {
  return (
    <>
      <div className='name-rest'>
        Welcome to The Happy Place
      </div>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={() => (window.location.href = "./menu")} >
            Menu
          </button>
          <button className="btn-group__item"  onClick={() => (window.location.href = "./login")}>
            reservation
          </button>
        </div>
      </nav>
      <div className='itemphoto'>
        <img src={imgSrc} alt='restaurant photo' className='photophoto' />
      </div>
      <div className='about-section'>
        <h2>About Us</h2>
        <p>
          At The Happy Place, we strive to create an unforgettable dining experience for our guests.
          Our chefs craft delicious dishes using the finest ingredients, ensuring a delightful culinary journey.
        </p>
        <p>
          Whether you're looking for a casual meal with friends or a special celebration, we have something
          for every palate. Explore our menu and make a reservation to experience the joy of dining with us.
        </p>
      </div>
      <div className='cta-section'>
        <h2>Explore Our Menu</h2>
        <p>
          Dive into a world of flavors with our diverse menu. From savory appetizers to delectable desserts,
          there's something for everyone. Click below to view our menu and plan your next dining adventure.
        </p>
      </div>
      <div className='explore-button-container'>
        <Link to="/menu" className="explore-button">
          Explore Menu
        </Link>
      </div>
    </>
  );
}

export default Homepage;
