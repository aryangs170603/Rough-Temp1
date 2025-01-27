import React from 'react';
import logo from '../logo.jpg'; // Ensure you have the logo image in the src directory
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Header = () => (
  <header>
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Connecting Dots ERP" />
      </div>
      <div className="search-container">
        <input className="main" type="text" placeholder="Search..." /><span className="searchicon"></span>
      </div>
      <div className="nav">
        <div className="dropdown">
          <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">SAP</a></li>
            <li><a className="dropdown-item" href="#">HR</a></li>
            <li><a className="dropdown-item" href="#">IT</a></li>
            <li><a className="dropdown-item" href="#"></a></li>
          </ul>
        </div>
        <a href="#">Blog</a>
      </div>
    </div>
  </header>
);

export default Header;