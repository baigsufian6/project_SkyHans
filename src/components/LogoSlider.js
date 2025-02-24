import React, { useEffect, useRef, useState } from 'react';
import './LogoSlider.css';

const LogoSlider = () => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Sample logos - replace with your actual logos
  const logos = [
    { id: 1, name: "Company 1", image: "/api/placeholder/120/60" },
    { id: 2, name: "Company 2", image: "/api/placeholder/120/60" },
    { id: 3, name: "Company 3", image: "/api/placeholder/120/60" },
    { id: 4, name: "Company 4", image: "/api/placeholder/120/60" },
    { id: 5, name: "Company 5", image: "/api/placeholder/120/60" },
    { id: 6, name: "Company 6", image: "/api/placeholder/120/60" },
    { id: 7, name: "Company 7", image: "/api/placeholder/120/60" },
    { id: 8, name: "Company 8", image: "/api/placeholder/120/60" },
    { id: 9, name: "Company 9", image: "/api/placeholder/120/60" },
    { id: 10, name: "Company 10", image: "/api/placeholder/120/60" },
  ];

  // Add stagger entry animation and autoplay control
  useEffect(() => {
    if (sliderRef.current) {
      const logoItems = sliderRef.current.querySelectorAll('.logo-item');
      logoItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
      });
    }
    
    // Auto-resume animation after hover ends
    const container = sliderRef.current;
    if (container) {
      container.addEventListener('mouseenter', () => setIsHovered(true));
      container.addEventListener('mouseleave', () => setIsHovered(false));
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mouseenter', () => setIsHovered(true));
        container.removeEventListener('mouseleave', () => setIsHovered(false));
      }
    };
  }, []);

  return (
    <div className="logo-slider-section">
      <div className="logo-slider-header">
        <h2 className="logo-slider-heading">Trusted By Industry Leaders</h2>
        <div className="logo-heading-accent"></div>
        <p className="logo-slider-subheading">Powering innovation across the globe</p>
      </div>

      <div className="logo-slider-controls">
      </div>

      <div className="logo-slider-wrapper">
        <div 
          className={`logo-slider-container ${isHovered ? 'paused' : ''}`} 
          ref={sliderRef}
        >
          {logos.map((logo) => (
            <div key={logo.id} className="logo-item">
              <div className="logo-item-inner">
                <div className="logo-overlay"></div>
                <img src={logo.image} alt={logo.name} className="logo-image" />
                <span className="logo-tooltip">{logo.name}</span>
              </div>
            </div>
          ))}
          
          {/* Duplicate logos for infinite effect */}
          {logos.map((logo) => (
            <div key={`dup-${logo.id}`} className="logo-item">
              <div className="logo-item-inner">
                <div className="logo-overlay"></div>
                <img src={logo.image} alt={logo.name} className="logo-image" />
                <span className="logo-tooltip">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default LogoSlider;