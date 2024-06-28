import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#2f2f31', color: '#ffffff' }}>
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: info@connectingdots.com</p>
          <p>Phone: +91 12345 67890</p>
        </div>
        <div className="Course">
          <h3>Courses</h3>
          <a href="#" style={{ color: '#fafdff' }}>SAP</a>
          <a href="#" style={{ color: '#fafdff' }}>HR</a>
          <a href="#" style={{ color: '#fafdff' }}>IT</a>
        </div>
        <div className="addresses">
          <h3>Our Locations</h3>
          <p>Pune Office: 123 Main Street, Pune, Maharashtra, India</p>
          <p>Mumbai Office: 456 Secondary Street, Mumbai, Maharashtra, India</p>
        </div>
      </div>
      <div className="footer-bottom" style={{ textAlign: 'center', padding: '10px' }}>
        <p>&copy; 2024 Connecting Dots ERP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
