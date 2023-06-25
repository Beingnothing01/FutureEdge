import React from 'react';
import './AboutUs.css';

const instructorsData = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Finance Expert',
    credentials: 'MBA, CFA',
    description: 'John Doe is a highly experienced finance professional with expertise in investment banking and financial modeling.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Banking Specialist',
    credentials: 'MSc, FRM',
    description: 'Jane Smith is a banking industry veteran with extensive knowledge in international business operations and retail banking.',
  },
  // Add more instructors as needed
];

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="content-wrapper">
        <h2 className="section-title">About Future Edge</h2>
        <p className="mission">Our Mission: Transforming Dreams into Careers</p>
        <p className="values">Our Values: Excellence, Innovation, Growth</p>
        <h3 className="instructors-title">Meet Our Instructors</h3>
        <div className="instructors-tabs">
          {instructorsData.map((instructor) => (
            <div className="instructor-tab" key={instructor.id}>
              <h4 className="instructor-name">{instructor.name}</h4>
              <p className="instructor-position">{instructor.position}</p>
              <p className="instructor-credentials">{instructor.credentials}</p>
              <p className="instructor-description">{instructor.description}</p>
            </div>
          ))}
        </div>
        <a href="#" className="cta-button">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
