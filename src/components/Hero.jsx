import React from 'react';
import laptopImg from '../sap successfactor.png'; // Ensure you have the image in the src directory
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';


const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <div className="hero-text">
        <h1>Innovate your skills, <span>Accelerate</span> career growth effectively.</h1>
        <div className="buttons">
          
          <Link to="/contact" className="btn">Book a Demo</Link>
          <Link to="/contact" className="btn">Download Brochure</Link>

        </div>
      </div>
      <div className="laptop">
        <img src={laptopImg} height="280px" width="280px" alt="Laptop" />
      </div>
    </div>
  </section>
);

export default Hero;