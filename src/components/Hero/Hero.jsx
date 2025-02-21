import React from 'react';
import Vector from "../../assets/gr.jpeg";  // Background image
import Burger from "../../assets/GravityCupkake.png";  // Main image

const Hero = () => {
  return (
    <>
      {/* Hero Section with background */}
      <div
        style={{
          backgroundImage: `url(${Vector})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "550px", // Ensure height is set
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }} 
        className="hero-container"
      >
        <div className="container text-center sm:text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Text content section with Neon effect */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left">
              <div 
                className="py-4 px-6 relative shadow-lg rounded-3xl text-5xl sm:text-6xl lg:text-7xl font-bold neon-text"
              >
                Welcome to Our Restaurant
              </div>
              <p className="text-sm text-white sm:text-base mt-4 bg-black bg-opacity-50 p-4 rounded-lg">
                Enjoy the finest cuisine in town. Our chefs are committed to serving you with the best dishes that will satisfy your cravings.
              </p>
            </div>

            {/* Image content section */}
            <div className="flex justify-center items-center relative">
              <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden w-full">
                <img
                  src={Burger} 
                  alt="Burger"
                  className="w-full h-full object-contain mx-auto spin-slow"
                />
              </div>
            </div>

            {/* Gravity Cupcake Text */}
            <div className="text-center mt-4 sm:mt-6">
              <h2 className="text-3xl font-bold text-white glow-text">GravityCupcake</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;


