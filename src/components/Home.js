import React, { useState, useEffect } from "react";
import "./Home.css";
import addDev from "./images/App_devp.jpg";
import art from "./images/3D_website.jpg";
import sart from "./images/3D.jpg";
import design from "./images/Wesite_design.jpg";

const slides = [
  {
    title: "Breeding & Weaning",
    description:
      "Check the available breeder and we can issue/ sacrifice/ death to the breeder stock, we have the option to bring the breeder back into issuable stock.",
    buttons: ["Demo", "Download Brochure"],
    image: addDev,
  },
  {
    title: "Stock Management",
    description:
      "Easily manage and monitor your stock availability and operations.",
    buttons: ["Learn More", "Get Started"],
    image: art,
  },
  {
    title: "Inventory Tracking",
    description:
      "Track your inventory in real time with our advanced features.",
    buttons: ["Explore", "Sign Up"],
    image: sart,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Analyze your data with visually appealing and interactive dashboards.",
    buttons: ["View Demo", "Try Now"],
    image: design,
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Move to the next slide every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentSlide]);

  return (
    <div className="slider-container">
      <button className="slider-arrow left" onClick={handlePrev}>
        ❮
      </button>
      <div className="slide">
        <div className="slide-content">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
          <div className="buttons">
            {slides[currentSlide].buttons.map((btn, index) => (
              <button key={index} className="slide-button">
                {btn}
              </button>
            ))}
          </div>
        </div>
        <div className="slide-image">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
          />
        </div>
      </div>
      <button className="slider-arrow right" onClick={handleNext}>
        ❯
      </button>
    </div>
  );
};

export default Home;
