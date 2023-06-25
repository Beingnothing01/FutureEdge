import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <h2 className="section-heading" >Features</h2>

      <div className="feature">
        <img src="https://img.freepik.com/free-vector/illustration-business-people_53876-5879.jpg?size=626&ext=jpg&ga=GA1.2.384695390.1686909461&semt=ais" alt="Expert Instructors" className="feature-icon" />
        <h3 className="feature-title">Expert Instructors</h3>
        <p className="feature-description">Highly qualified finance professionals with industry experience</p>
      </div>
      <div className="feature">
        <img src="https://img.freepik.com/free-vector/illustration-business-people_53876-5879.jpg?size=626&ext=jpg&ga=GA1.2.384695390.1686909461&semt=ais" alt="Comprehensive Curriculum" className="feature-icon" />
        <h3 className="feature-title">Comprehensive Curriculum</h3>
        <p className="feature-description">In-depth courses covering finance and banking topics</p>
      </div>
      <div className="feature">
        <img src="https://img.freepik.com/free-vector/illustration-business-people_53876-5879.jpg?size=626&ext=jpg&ga=GA1.2.384695390.1686909461&semt=ais" alt="Practical Learning" className="feature-icon" />
        <h3 className="feature-title">Practical Learning</h3>
        <p className="feature-description">Real-world case studies and simulations</p>
      </div>
      <div className="feature">
        <img src="https://img.freepik.com/free-vector/illustration-business-people_53876-5879.jpg?size=626&ext=jpg&ga=GA1.2.384695390.1686909461&semt=ais" alt="Career Support" className="feature-icon" />
        <h3 className="feature-title">Career Support</h3>
        <p className="feature-description">Job placement assistance and networking opportunities</p>
      </div>
    </section>
  );
}

export default Features;
