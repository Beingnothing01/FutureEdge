import React, { useState, useEffect } from 'react';
import './UserTestimonial.css';

const UserTestimonial = () => {
  const testimonials = [
    {
      quote: "I love this product! It has completely changed the way I work.",
      author: "John Doe",
      image: "logo.jpeg"
    },
    {
      quote: "This is the best service I have ever used. Highly recommended!",
      author: "Jane Smith",
      image: "logo.jpeg"
    },
    {
      quote: "I can't imagine my life without this amazing app. Thank you!",
      author: "Mike Johnson",
      image: "logo.jpeg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="alumni-section">
      <h2 className="section-heading">Testimonials</h2>
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`testimonial-slide ${
            index === currentSlide ? 'active' : ''
          }`}
        >
          <div className="testimonial-content">
            <p>"{testimonial.quote}"</p>
            <p className="author">- {testimonial.author}</p>
          </div>
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="testimonial-image"
          />
        </div>
      ))}
    </div>
    </section>
  );
};

export default UserTestimonial;
