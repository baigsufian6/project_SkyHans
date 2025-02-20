import React, { useEffect } from 'react';
import './About.css';
import { FaCode, FaLaptop, FaGraduationCap, FaShoppingCart, FaVrCardboard, FaFlask } from 'react-icons/fa';
import Expertise from './Expertise';
import Services from './Services';

const About = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: <FaFlask />,
      title: "Animal Laboratory Management",
      description: "Comprehensive solutions for managing animal laboratory operations and data."
    },
    {
      icon: <FaVrCardboard />,
      title: "Web & Graphic Design",
      description: "Cutting-edge 2D, 3D, AR, and VR design solutions for modern businesses."
    },
    {
      icon: <FaCode />,
      title: "Web Applications",
      description: "Custom websites, portals, and software solutions tailored to your needs."
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Solutions",
      description: "Robust online shopping platforms and digital marketplace solutions."
    },
    {
      icon: <FaLaptop />,
      title: "Educational Software",
      description: "Interactive learning platforms and educational technology solutions."
    },
    {
      icon: <FaGraduationCap />,
      title: "Industrial Training",
      description: "Comprehensive internship programs and professional development courses."
    }
  ];

  return (
    <div className="about-container">
      <section className="company-intro animate-on-scroll">
        <h2>Who We Are</h2>
        <p>SkyHans is a dynamic and innovative software company based in Bangalore, India. We specialize in turning creative ideas into real-world solutions that meet diverse business needs.</p>
      </section>

      <section className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card animate-on-scroll">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section className="commitment-section animate-on-scroll">
        <h2>Our Commitment</h2>
        <p>At SkyHans, we are committed to delivering excellence through our cutting-edge solutions, helping businesses thrive in an ever-evolving digital landscape.</p>
        <div className="stats-container">
          <div className="stat-item">
            <h3>100+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      <Expertise />
    </div>
  );
};

export default About;
