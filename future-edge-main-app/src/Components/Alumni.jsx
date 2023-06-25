import React from 'react';
import './Alumni.css';

const Alumni = () => {
  return (
    <section className="alumni-section">
      <h2 className="section-heading">Join the Ranks of Our Accomplished Graduates</h2>
      <div className="alumni-slider">
        <div className="alumni-logo">
          <img src="/path/to/company1.png" alt="Company 1" />
        </div>
        <div className="alumni-logo">
          <img src="/path/to/company2.png" alt="Company 2" />
        </div>
        <div className="alumni-logo">
          <img src="/path/to/company3.png" alt="Company 3" />
        </div>
        {/* Add more alumni logos here */}
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>"Future Edge provided me with the skills and knowledge I needed to excel in the finance industry. Thanks to their courses, I landed a job at Company X and have been thriving ever since."</p>
          <p className="testimonial-author">John Doe, Company X</p>
        </div>
        <div className="testimonial">
          <p>"The comprehensive curriculum and practical learning approach at Future Edge prepared me for a successful career in investment banking. I'm now working at Company Y, and I couldn't be happier with my decision to join Future Edge."</p>
          <p className="testimonial-author">Jane Smith, Company Y</p>
        </div>
        {/* Add more testimonials here */}
      </div>
      <a href="/success-stories" className="cta-button">Explore More Success Stories</a>
    </section>
  );
}

export default Alumni;
