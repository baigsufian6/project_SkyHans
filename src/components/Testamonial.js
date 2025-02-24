import React from 'react';
import './Testamonial.css';

const Testamonial = () => {
  const testimonials = [
    {
      name: "Loren Robinson",
      location: "Lehigh Valley, PA",
      title: "Upgrade Small Business Management With Code",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Kelly Mulvihill",
      location: "New York, NY",
      title: "Design Plus Coding Equals Web",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Saadika Alard",
      location: "Johannesburg, South Africa",
      title: "From Retail to Front End",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Tom Aldahn",
      location: "Adelaide, Australia",
      title: "Breaking Into Tech After 40",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Kari Tarr",
      location: "San Francisco, CA",
      title: "One Year to Dev",
      image: "/api/placeholder/80/80"
    },
    {
      name: "William Ha",
      location: "Los Angeles, CA",
      title: "From Lawyer to iOS Developer",
      image: "/api/placeholder/80/80"
    },
    // Duplicate first 3 testimonials for seamless scrolling
    {
      name: "Loren Robinson",
      location: "Lehigh Valley, PA",
      title: "Upgrade Small Business Management With Code",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Kelly Mulvihill",
      location: "New York, NY",
      title: "Design Plus Coding Equals Web",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Saadika Alard",
      location: "Johannesburg, South Africa",
      title: "From Retail to Front End",
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-heading">Success Stories</h2>
        <div className="heading-underline"></div>
      </div>
      <div className="testimonials-container">
        <div className="testimonials-track">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-profile">
                <div className="image-container">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="profile-image"
                  />
                </div>
                <h3 className="profile-name">{testimonial.name}</h3>
                <p className="profile-location">{testimonial.location}</p>
              </div>
              <h2 className="testimonial-title">{testimonial.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testamonial;