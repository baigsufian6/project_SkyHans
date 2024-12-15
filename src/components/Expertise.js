// Expertise.js
import React from "react";
import "./Expertise.css";
import seoImage from "./images/seoImage.png";
import socialMediaImage from "./images/socialMediaImage.png";
import marketingImage from "./images/marketingImage.png";
import contentImage from "./images/contentImage.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Expertise() {
  return (
    <div className="container">
      {/* Title Section */}
      <div className="title-section">
        <h4 className="sub-title">What We Do</h4>
        <h1 className="main-title">We're Skilled At</h1>
      </div>

      {/* Service Cards with Animations */}
      <TransitionGroup className="services">
        <CSSTransition classNames="fade" timeout={1000}>
          <div className="card card-1">
            <img src={seoImage} alt="SEO" />
            <h2>Search Engine Optimization</h2>
            <p>
              We provide top-notch SEO strategies to improve your online
              visibility.
            </p>
          </div>
        </CSSTransition>

        <CSSTransition classNames="fade" timeout={1000}>
          <div className="card card-2">
            <img src={socialMediaImage} alt="Social Media Promotion" />
            <h2>Social Media Promotion</h2>
            <p>
              Engage your audience with targeted and effective social media
              campaigns.
            </p>
          </div>
        </CSSTransition>

        <CSSTransition classNames="fade" timeout={1000}>
          <div className="card card-3">
            <img src={marketingImage} alt="Search Engine Marketing" />
            <h2>Search Engine Marketing</h2>
            <p>
              Maximize your ROI with expert PPC and paid advertising strategies.
            </p>
          </div>
        </CSSTransition>

        <CSSTransition classNames="fade" timeout={1000}>
          <div className="card card-4">
            <img src={contentImage} alt="Content Marketing" />
            <h2>Content Marketing Services</h2>
            <p>
              Deliver valuable content to attract and retain your target
              audience.
            </p>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default Expertise;
