import React, { useState, useEffect } from "react";
import "./Home.css";
import { FaUserFriends, FaDna, FaPaw, FaCubes } from "react-icons/fa";
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

const features = [
  {
    icon: <FaUserFriends />,
    title: "User Management",
    description:
      "It has user management facility, where super admin can create login and give access to users for different roles and privileges.",
  },
  {
    icon: <FaDna />,
    title: "Support for Genetically",
    description:
      "Manage animal stock based on different colony such as Foundation, Production, Mutant (Hemo, Hetro, Wild), and Genotyped.",
  },
  {
    icon: <FaCubes />,
    title: "Breeder Stock",
    description:
      "Check the available breeder and we can issue/sacrifice/death to the breeder stock, we have the option to bring breeders back into issuable stock.",
  },
  {
    icon: <FaPaw />,
    title: "Support for Multiple Species",
    description:
      "Meeting records case-wise, single male, female, or with different numbers of males and females at a time. After mating/delivery, an easy process separates breeder/male/female/pups.",
  },
  {
    icon: <FaUserFriends />,
    title: "Feature 5",
    description: "Description for feature 5.",
  },
  {
    icon: <FaDna />,
    title: "Feature 6",
    description: "Description for feature 6.",
  },
  {
    icon: <FaCubes />,
    title: "Feature 7",
    description: "Description for feature 7.",
  },
  {
    icon: <FaPaw />,
    title: "Feature 8",
    description: "Description for feature 8.",
  },
  {
    icon: <FaUserFriends />,
    title: "Feature 9",
    description: "Description for feature 9.",
  },
  {
    icon: <FaDna />,
    title: "Feature 10",
    description: "Description for feature 10.",
  },
  {
    icon: <FaCubes />,
    title: "Feature 11",
    description: "Description for feature 11.",
  },
  {
    icon: <FaPaw />,
    title: "Feature 12",
    description: "Description for feature 12.",
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
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
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

      <div className="features-container">
        <h1>Animal Laboratory Management Software</h1>
        <p>A digital solution for all our animal facility needs</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-box">
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
