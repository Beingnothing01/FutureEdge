import React from 'react';
import logo from '/Users/yuvraj/future-edge-main-app/src/Assets/logo.jpeg';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Future Edge" className="logo" />
        <h1 className="company-name">Future Edge</h1>
      </div>
      <nav className="navigation">
        <ul className="menu">
          <li className="menu-item">Courses</li>
          <li className="menu-item">Testimonials</li>
          <li className="menu-item">About Us</li>
          <li className="menu-item">Contact Us</li>
        </ul>
      </nav>
      <button className="login-button">Login / Sign up</button>
    </header>
  );
}

export default Header;
