import React from "react";
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
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Application",
      description: "A web application that runs on a web server.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce",
      description: "Buying and selling products online.",
    },
    {
      icon: <FaDesktop />,
      title: "Desktop Application",
      description: "Software that runs on a standalone computer.",
    },
    {
      icon: <FaFileAlt />,
      title: "Content Management",
      description: "Collection, delivery, and governance of content.",
    },
    {
      icon: <MdOutlineSupportAgent />,
      title: "Support Services",
      description: "24/7 support for your business needs.",
    },
    {
      icon: <MdSecurity />,
      title: "Cybersecurity",
      description: "Protecting systems and networks from attacks.",
    },
    {
      icon: <AiOutlineMobile />,
      title: "Mobile Applications",
      description: "Developing apps for iOS and Android.",
    },
    {
      icon: <AiOutlineCloud />,
      title: "Cloud Solutions",
      description: "Reliable cloud computing services.",
    },
  ];

  const skillfulServices = [
    { icon: <FaPhp />, title: "PHP Development" },
    { icon: <FaWordpress />, title: "WordPress Development" },
    { icon: <FaSymfony />, title: "Symfony Web Development" },
    { icon: <FaJava />, title: "Java Development" },
    { icon: <DiCodeigniter />, title: "CodeIgniter Web Development" },
    { icon: <DiJavascript1 />, title: "JavaScript Development" },
    { icon: <SiDrupal />, title: "Drupal Web Development" },
    { icon: <SiVuedotjs />, title: "Vue.js Development" },
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
                className={`service-box ${
                  index % 2 === 0 ? "zigzag-left" : "zigzag-right"
                }`}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
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
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
