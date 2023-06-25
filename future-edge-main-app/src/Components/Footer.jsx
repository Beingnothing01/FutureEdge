import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/courses">Courses</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/blog">Blog</a>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/futureedge" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com/futureedge" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/futureedge" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="copyright">
        &copy; 2023 Future Edge. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
