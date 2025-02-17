import React, { useState } from "react";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaDesktop,
  FaFileAlt,
  FaPhp,
  FaWordpress,
  FaSymfony,
  FaJava,
} from "react-icons/fa";
import { MdOutlineSupportAgent, MdSecurity } from "react-icons/md";
import { AiOutlineMobile, AiOutlineCloud } from "react-icons/ai";
import { DiCodeigniter, DiJavascript1 } from "react-icons/di";
import { SiDrupal, SiVuedotjs } from "react-icons/si";
import { Slide } from "react-awesome-reveal";
import "./Services.css";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Application",
      description: "A web application that runs on a web server.",
      features: ["Responsive Design", "Cross-platform", "User-friendly Interface"]
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce",
      description: "Buying and selling products online.",
      features: ["Secure Payments", "Inventory Management", "Order Tracking"]
    },
    {
      icon: <FaDesktop />,
      title: "Desktop Application",
      description: "Software that runs on a standalone computer.",
      features: ["Cross-platform", "Offline Support", "Native Performance"]
    },
    {
      icon: <FaFileAlt />,
      title: "Content Management",
      description: "Collection, delivery, and governance of content.",
      features: ["Version Control", "User Roles", "Content Scheduling"]
    },
    {
      icon: <MdOutlineSupportAgent />,
      title: "Support Services",
      description: "24/7 support for your business needs.",
      features: ["Live Chat", "Ticket System", "Knowledge Base"]
    },
    {
      icon: <MdSecurity />,
      title: "Cybersecurity",
      description: "Protecting systems and networks from attacks.",
      features: ["Threat Detection", "Data Encryption", "Regular Audits"]
    },
    {
      icon: <AiOutlineMobile />,
      title: "Mobile Applications",
      description: "Developing apps for iOS and Android.",
      features: ["Native Apps", "Cross-platform", "Push Notifications"]
    },
    {
      icon: <AiOutlineCloud />,
      title: "Cloud Solutions",
      description: "Reliable cloud computing services.",
      features: ["Scalability", "High Availability", "Data Backup"]
    },
  ];

  const skillfulServices = [
    { 
      icon: <FaPhp />, 
      title: "PHP Development",
      experience: "8+ years"
    },
    { 
      icon: <FaWordpress />, 
      title: "WordPress Development",
      experience: "10+ years"
    },
    { 
      icon: <FaSymfony />, 
      title: "Symfony Web Development",
      experience: "6+ years"
    },
    { 
      icon: <FaJava />, 
      title: "Java Development",
      experience: "7+ years"
    },
    { 
      icon: <DiCodeigniter />, 
      title: "CodeIgniter Web Development",
      experience: "5+ years"
    },
    { 
      icon: <DiJavascript1 />, 
      title: "JavaScript Development",
      experience: "9+ years"
    },
    { 
      icon: <SiDrupal />, 
      title: "Drupal Web Development",
      experience: "6+ years"
    },
    { 
      icon: <SiVuedotjs />, 
      title: "Vue.js Development",
      experience: "4+ years"
    }
  ];

  return (
    <div className="services-page">
      {/* Major Domains Section */}
      <div className="services-section">
        <div className="section-header">
          <div className="sub-header">WHAT WE DO</div>
          <h2 className="services-title">Our Major Domains</h2>
        </div>
        <div className="services-container">
          {services.map((service, index) => (
            <Slide
              triggerOnce
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 100}
              key={index}
            >
              <div
                className={`service-box ${hoveredService === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="service-content">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-features">
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>

      {/* Skillful Section */}
      <div className="skills-section">
        <div className="section-header">
          <div className="sub-header">WHAT WE DO</div>
          <h2 className="services-title">We're Skillful at</h2>
        </div>
        <div className="skills-container">
          {skillfulServices.map((service, index) => (
            <Slide triggerOnce direction="up" delay={index * 150} key={index}>
              <div className="skills-box">
                <div className="skills-icon">{service.icon}</div>
                <h3 className="skills-title">{service.title}</h3>
                <div className="experience-badge">{service.experience}</div>
                <div className="skills-overlay">
                  <span className="view-more">View Projects</span>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;