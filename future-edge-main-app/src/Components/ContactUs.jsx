import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-section">
      <h2 className="section-heading">Contact Us</h2>
      <div className="contact-info">
        <div className="contact-details">
          <h3>Contact Information</h3>
          <p>Email: info@futureedge.com</p>
          <p>Phone: +1 123-456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <p>We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
      <p className="response-time">Our customer support team is available 24/7. We strive to respond within 24 hours.</p>
    </section>
  );
}

export default ContactUs;
