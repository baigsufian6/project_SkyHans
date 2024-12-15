import React, { useEffect, useState } from "react";
import "./About.css";
import webDevelopmentImg from "./images/web_development.jpeg";

const About = () => {
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImageVisible(true);
    }, 500); // Delay to sync animations
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="about-container">
      <div className="about-image">
        <img
          src={webDevelopmentImg}
          alt="Web Development"
          className={imageVisible ? "visible" : ""}
        />
      </div>
      <div className="about-content">
        <h3>ABOUT US</h3>
        <h1>Welcome to Skyhans</h1>
        <p>
          SkyHans is one of the emerging and leading Software Companies in
          Bangalore, India. Our strength lies in our creative ideas and
          implementing them into real-time products that fulfill business needs.
        </p>
        <p>
          We provide services and end-to-end solutions across the product
          lifecycle. Our talented web designers and software developers build
          solutions that reduce costs and create new revenue opportunities.
        </p>
      </div>
    </div>
  );
};

export default About;
