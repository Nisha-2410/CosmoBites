import React from 'react';
import "./Menu.css";
import Sweets from "../../assets/Sweets.jpg";
import Cross from "../../assets/Cross.jpg";
import Drinks from "../../assets/Drinks.jpg";
import Pizza from "../../assets/Pizza.jpg";
import Vector from "../../assets/back.jpg"; // The background image

const Menu = () => {
  const bgImg = {
    backgroundImage: `url(${Vector})`,  // Applying background image
    backgroundPosition: "center",       // Positioning it in the center
    backgroundSize: "cover",            // Ensures the image covers the container
    backgroundRepeat: "no-repeat",      // Prevents repetition of the image
    width: "100%",                      // Full width of the container
    height: "100vh",                    // Full height of the viewport
  };

  return (
    <>
      <div className="menu-container" style={bgImg}>
        <div className="menu-section">
          <img src={Sweets} alt="Sweets" className="section-image" />
          <h2>Sweets</h2>
          <ul>
            <li>Chocolate star</li>
            <li>Moonlight Morsels</li>
            <li>Astro Pancakes</li>
            <li>Meteor Munchies</li>
          </ul>
        </div>

        <div className="menu-section">
          <img src={Drinks} alt="Drinks" className="section-image" />
          <h2>Drinks</h2>
          <ul>
            <li>Cosmic Brews</li>
            <li>Galactic Elixirs</li>
            <li>Nebula Nectar</li>
            <li>Smoothies</li>
            <li>Starship Sips</li>
          </ul>
        </div>

        <div className="menu-section">
          <img src={Pizza} alt="Starters" className="section-image" />
          <h2>Starters</h2>
          <ul>
            <li>Spring Rolls</li>
            <li>Bruschetta</li>
            <li>Garlic Bread</li>
            <li>Salad</li>
            <li>Soup</li>
          </ul>
        </div>

        <div className="menu-section">
          <img src={Pizza} alt="Food" className="section-image" />
          <h2>Food</h2>
          <ul>
            <li>Pizza</li>
            <li>Burger</li>
            <li>Pasta</li>
            <li>Grilled Chicken</li>
            <li>Steak</li>
            <li>Vegetable Stir Fry</li>
          </ul>
        </div>
      </div>
      <div className="discount-container">
        <div className="discount-box">
          <h3>Special Discount</h3>
          <p>Get 20% off on all items this week!</p>
        </div>
        <div className="discount-box">
          <h3>Happy Hour</h3>
          <p>Enjoy a free drink with every meal between 5 PM and 7 PM!</p>
        </div>
        <div className="discount-box">
          <h3>Early Bird</h3>
          <p>10% off for all orders before 11 AM!</p>
        </div>
      </div>
    </>
  );
};

export default Menu;
