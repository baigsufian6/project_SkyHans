import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Home.css";
import { FaUserFriends, FaDna, FaPaw, FaCubes, FaClipboardList, FaShieldAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import addDev from "./images/breeding&veaning.jpg";
import art from "./images/webdev.jpg";
import sart from "./images/graphic.jpg";
import design from "./images/ecommerce.jpg";

const slides = [
  {
    title: "Animal Laboratory Management Software",
    description: "Check the available breeder and we can issue/ sacrifice/ death to the breeder stock, we have the option to bring the breeder back into issuable stock.",
    buttons: ["Get Started", "Watch Demo"],
    image: addDev,
  },
  {
    title: "Web Applications, Websites, Softwares & Portals",
    description: "We build powerful and scalable web applications, portals, and software solutions tailored to your business needs.",
    buttons: ["Learn More", "View Features"],
    image: art,
  },
  {
    title: "Web & Graphic Design (2D, 3D, AR, VR)",
    description: "We create stunning visuals and immersive experiences with cutting-edge 2D, 3D, AR, and VR designs.",
    buttons: ["Explore", "Sign Up"],
    image: sart,
  },
  {
    title: "E-Commerce and Online Solutions ",
    description: "Boost your online business with seamless e-commerce platforms, payment integration, and user-friendly shopping experiences.",
    buttons: ["View Demo", "Try Now"],
    image: design,
  },
];

const features = [
  {
    icon: <FaUserFriends />,
    title: "User Management",
    description: "Comprehensive user management with role-based access control and privileges.",
    color: "#FF6B6B",
  },
  {
    icon: <FaDna />,
    title: "Genetic Support",
    description: "Advanced genetic tracking for Foundation, Production, and Mutant colonies.",
    color: "#4ECDC4",
  },
  {
    icon: <FaCubes />,
    title: "Breeder Stock",
    description: "Complete breeder lifecycle management with detailed tracking and history.",
    color: "#45B7D1",
  },
  {
    icon: <FaPaw />,
    title: "Multi-Species Support",
    description: "Comprehensive breeding and mating records for various species and combinations.",
    color: "#96CEB4",
  },
  {
    icon: <FaClipboardList />,
    title: "Automated Reports",
    description: "Generate real-time reports and analytics for better decision-making.",
    color: "#F7B731",
  },
  {
    icon: <FaShieldAlt />,
    title: "Data Security",
    description: "Enterprise-level security with encryption and access control.",
    color: "#FF9F1C",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const mouseThrottleRef = useRef(null);

  // Optimized mouse move handler with throttling
  const handleMouseMove = useCallback((e) => {
    if (mouseThrottleRef.current) return;
    
    mouseThrottleRef.current = setTimeout(() => {
      mouseThrottleRef.current = null;
    }, 50);

    const { current: hero } = heroRef;
    if (hero) {
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setMousePosition({ x, y });
    }
  }, []);

  const handleSlideChange = useCallback((direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newSlide = direction === 'next' 
      ? (currentSlide + 1) % slides.length 
      : (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newSlide);
    setTimeout(() => setIsAnimating(false), 500);
  }, [currentSlide, isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange('next');
    }, 6000);
    return () => clearInterval(interval);
  }, [handleSlideChange]);

  // Optimized animation variants
  const contentVariants = {
    initial: { opacity: 0, scale: 1.02 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 }
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <div className="modern-home">
      <section 
        className="hero-section" 
        ref={heroRef}
        onMouseMove={handleMouseMove}
      >
        <div className="hero-background">
          <div 
            className="parallax-overlay"
            style={{
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
            }}
          />
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-content"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="hero-image-container">
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="hero-image"
              />
            </div>
            <div className="hero-text">
              <motion.h1
                variants={textVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.1 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                variants={textVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div 
                className="hero-buttons"
                variants={textVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.3 }}
              >
                {slides[currentSlide].buttons.map((btn, index) => (
                  <button key={index} className="hero-button">
                    {btn}
                  </button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="hero-navigation">
          <button 
            className="nav-button prev" 
            onClick={() => handleSlideChange('prev')}
          >
            ←
          </button>
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <div 
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <button 
            className="nav-button next" 
            onClick={() => handleSlideChange('next')}
          >
            →
          </button>
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Animal Laboratory Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Next-Generation Solution for Laboratory Management
          </motion.p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-decoration" style={{ backgroundColor: feature.color }} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;