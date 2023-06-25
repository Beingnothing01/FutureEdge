import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    
    <section className="courses">
      <h2 className="section-heading">Courses</h2>
      <div className="course-tab">
        <h3 className="course-title">Financial Modeling</h3>
        <ul className="course-description">
          <li>Learn to build financial models for business valuation and analysis</li>
          <li>Master Excel and financial modeling techniques</li>
          <li>Gain practical skills for investment decision-making</li>
        </ul>
        <button className="enroll-button">Enroll</button>
      </div>
      <div className="course-tab">
        <h3 className="course-title">Investment Banking Operations</h3>
        <ul className="course-description">
          <li>Explore the intricacies of investment banking operations</li>
          <li>Understand mergers and acquisitions, IPOs, and capital raising</li>
          <li>Learn about financial advisory and deal execution</li>
        </ul>
        <button className="enroll-button">Enroll</button>
      </div>
      <div className="course-tab">
        <h3 className="course-title">International Business & Retail Banking Operations</h3>
        <ul className="course-description">
          <li>Discover the world of international business and retail banking</li>
          <li>Learn about cross-border transactions and trade finance</li>
          <li>Gain insights into retail banking operations and customer management</li>
        </ul>
        <button className="enroll-button">Enroll</button>
      </div>
      <div className="course-tab">
        <h3 className="course-title">Universal Banking (Combo of above 3)</h3>
        <ul className="course-description">
          <li>Get a comprehensive understanding of financial modeling, investment banking, and retail banking</li>
          <li>Combine the knowledge and skills from the above three courses</li>
          <li>Unlock broader career opportunities in the finance and banking industry</li>
        </ul>
        <button className="enroll-button">Enroll</button>
      </div>
      <div className="course-tab">
        <h3 className="course-title">CFA Level I, II, III</h3>
        <ul className="course-description">
          <li>Prepare for and clear the Chartered Financial Analyst (CFA) exams</li>
          <li>Comprehensive coverage of investment management and financial analysis</li>
          <li>Elevate your expertise and credibility in the finance industry</li>
        </ul>
        <button className="enroll-button">Enroll</button>
      </div>
      <div className="course-tab">
        <h3 className="course-title">CFP</h3>
        <ul className="course-description">
          <li>Become a Certified Financial Planner (CFP)</li>
          <li>Master the essentials of financial planning and wealth management</li>
          <li>Help clients achieve their financial goals through personalized strategies</li>
        </ul>
        <button className="enroll-button">Enroll</button>
      </div>
      <div className="course-tab">
        <h3 className="course-title">FRM Part I & II</h3>
        <ul className="course-description">
          <li>Prepare for the Financial Risk Manager (FRM) exams</li>
          <li>Deep dive into risk management concepts, methodologies, and practices</li>
          <li>Enhance your risk assessment and decision-making abilities</li>
        </ul>
        <button className="enroll-button">Enroll</button>
      </div>
    </section>
  );
}

export default Courses;
