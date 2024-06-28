import React from 'react';
import laptopImg from '../sap successfactor.png'; // Ensure you have the image in the src directory

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <div className="hero-text">
        <h1>Innovate your skills, <span>Accelerate</span> career growth effectively.</h1>
        <div className="buttons">
          <a href="#" className="btn">Book a Demo</a>
          <a href="#" className="btn">Download Brochure</a>
        </div>
      </div>
      <div className="laptop">
        <img src={laptopImg} height="280px" width="280px" alt="Laptop" />
      </div>
    </div>
  </section>
);

export default Hero;