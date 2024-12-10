import React from "react";
import "./About.css";
import webDevelopmentImg from "./images/web_development.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={webDevelopmentImg} alt="Web Development" />
      </div>
      <div className="about-content">
        <h3>ABOUT US</h3>
        <h1>Welcome to Skyhans</h1>
        <p>
          SkyHans is one of the emerging and leading Software Companies in
          Bangalore, India. Our strength lies in our creative ideas and
          implementing them into real-time products that fulfill business needs.
          Our offerings span across Software Products, Web Design & Graphics
          Design, Web Applications, Web Portals, ECommerce, Desktop
          Applications, and Industrial Training (JAVA/J2EE, STRUTS, SPRING,
          HIBERNET, .Net, C#, VB.Net, WPF, PHP, ORACLE, SQL Server, My SQL,
          AJAX, HTML, CSS, XML, JAVA SCRIPT).
        </p>
        <p>
          We are providing services and end-to-end solutions across the product
          lifecycle. We have a pool of talented web designers and software
          developers to build online solutions that reduce costs and create new
          sources of revenue for clients. They come to us for web
          applications/software that help them retain customers. They come to us
          for tools that can help them sell more. In an industry that is mainly
          online, our only component is customer satisfaction.
        </p>
      </div>
    </div>
  );
};

export default About;
