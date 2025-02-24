import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { FaUserFriends, FaDna, FaPaw, FaCubes, FaClipboardList, FaShieldAlt } from "react-icons/fa";
import addDev from "./images/breeding&veaning.jpg";
import art from "./images/webdev.jpg";
import sart from "./images/graphic.jpg";
import design from "./images/ecommerce.jpg";
import './Home.css';

const ContactFormPopup = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background overlay
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="popup-container"
            style={{
              position: 'relative',
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
              width: '90%',
              maxWidth: '500px',
              zIndex: 9999,
            }}
          >
            <button 
              className="close-button" 
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <X size={24} />
            </button>
            <h2 className="popup-title">Get Started</h2>
            <p className="popup-subtitle">Please fill in your details below</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required 
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="Enter your message"
                />
              </div>
              
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const slides = [
  {
    title: "Animal Laboratory Management Software",
    description: "Check the available breeder and we can issue/ sacrifice/ death to the breeder stock, we have the option to bring the breeder back into issuable stock.",
    buttons: [
      { text: "Get Started", isPrimary: true },
      { text: "Watch Demo", isPrimary: false, hasOutline: true }
    ],
    image: addDev,
  },
  {
    title: "Web Applications, Websites, Softwares & Portals",
    description: "We build powerful and scalable web applications, portals, and software solutions tailored to your business needs.",
    buttons: [
      { text: "Learn More", isPrimary: true },
      { text: "View Features", isPrimary: false, hasOutline: true }
    ],
    image: art,
  },
  {
    title: "Web & Graphic Design (2D, 3D, AR, VR)",
    description: "We create stunning visuals and immersive experiences with cutting-edge 2D, 3D, AR, and VR designs.",
    buttons: [
      { text: "Explore", isPrimary: true },
      { text: "Sign Up", isPrimary: false, hasOutline: true }
    ],
    image: sart,
  },
  {
    title: "E-Commerce and Online Solutions",
    description: "Boost your online business with seamless e-commerce platforms, payment integration, and user-friendly shopping experiences.",
    buttons: [
      { text: "View Demo", isPrimary: true },
      { text: "Try Now", isPrimary: false, hasOutline: true }
    ],
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
  const [isPaused, setIsPaused] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        handleSlideChange('next');
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentSlide, isPaused]);

  const handleSlideChange = (direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newSlide = direction === 'next' 
      ? (currentSlide + 1) % slides.length 
      : (currentSlide - 1 + slides.length) % slides.length;
    
    setCurrentSlide(newSlide);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleButtonClick = (buttonText) => {
    if (buttonText === "Get Started" || buttonText === "Learn More" || buttonText === "Explore" || buttonText === "View Demo") {
      setIsPopupOpen(true);
    }
  };

  return (
    <>
      <div className="modern-home">
        <section 
          className="hero-section"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="carousel-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                transition={{ 
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                className="carousel-slide"
              >
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title}
                  className="carousel-image" 
                />
                <div className="carousel-overlay" />
                <div className="carousel-content">
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                  <div className="carousel-buttons">
                    {slides[currentSlide].buttons.map((button, index) => (
                      <motion.button
                        key={index}
                        className={`carousel-button ${button.isPrimary ? 'primary' : 'secondary'} ${button.hasOutline ? 'outlined' : ''}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + (index * 0.1), duration: 0.4 }}
                        onClick={() => handleButtonClick(button.text)}
                      >
                        {button.text}
                        {button.isPrimary && <ArrowRight className="button-icon" />}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <div className="carousel-navigation">
              <motion.button 
                className="nav-button prev" 
                onClick={() => handleSlideChange('prev')}
                disabled={isAnimating}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft />
              </motion.button>
              <motion.button 
                className="nav-button next" 
                onClick={() => handleSlideChange('next')}
                disabled={isAnimating}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight />
              </motion.button>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="section-header">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              Animal Laboratory Management
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
            >
              Next-Generation Solution for Laboratory Management
            </motion.p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="feature-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div 
                  className="feature-decoration" 
                  style={{ 
                    backgroundColor: feature.color,
                    opacity: 0.1
                  }} 
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <ContactFormPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </>
  );
};

export default Home;