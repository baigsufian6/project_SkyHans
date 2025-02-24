import React, { useEffect, useRef, useState } from 'react';
import './LogoSlider.css';
import glenmark from './images/Glenmark_Pharmaceuticals_logo.png'
import icmr from './images/icmr_logo_verti.png'
import  institite from './images/Indian_Institute_of_Science_2019_logo.svg.png'
import ncbs from './images/ncbs logo.png'
import cut from './images/pixelcut-export-removebg-preview.png'
import expo from './images/pixelcut-export__1_-removebg-preview.png'
import whats1 from './images/WhatsApp_Image_2025-02-22_at_18.21.41_570eb057-removebg-preview.png'
import whats2 from './images/WhatsApp_Image_2025-02-22_at_18.21.42_6b2ec6e8-removebg-preview.png'
import whars3 from './images/WhatsApp_Image_2025-02-22_at_18.22.32_51f4ea68-removebg-preview.png'
import uoscale from './images/upscalemedia-transformed.png'

const LogoSlider = () => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Sample logos - replace with your actual logos
  const logos = [
    { id: 1, name: "Glenmark", image: glenmark },
    { id: 2, name: "ICMR", image: icmr },
    { id: 3, name: "Indian Institute of Science", image: institite },
    { id: 4, name: "NCBS", image: ncbs },
    { id: 5, name: "Company 5", image: cut },
    { id: 6, name: "Company 6", image: expo },
    { id: 7, name: "Upscale Media", image: uoscale},
    { id: 8, name: "Company 8", image: whats1 },
    { id: 9, name: "Company 9", image: whats2 },
    { id: 10, name: "Company 10", image: whars3 },
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

      <div className="logo-slider-wrapper">
        <div 
          className={`logo-slider-container ${isHovered ? 'paused' : ''}`} 
          ref={sliderRef}
        >
          {logos.map((logo) => (
            <div key={logo.id} className="logo-item">
              <div className="logo-display">
                <img 
                  src={logo.image} 
                  alt={logo.name} 
                  className="logo-image" 
                />
              </div>
              <span className="logo-tooltip">{logo.name}</span>
            </div>
          ))}
          
          {/* Duplicate logos for infinite effect */}
          {logos.map((logo) => (
            <div key={`dup-${logo.id}`} className="logo-item">
              <div className="logo-display">
                <img 
                  src={logo.image} 
                  alt={logo.name} 
                  className="logo-image" 
                />
              </div>
              <span className="logo-tooltip">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;