import { React, useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Shield, FileText, Users, 
         Database, Settings, ChartBar, Lock } from 'lucide-react';
import './ProductPage.css';
import Footer from './Footer'
import p1 from './images/p1.webp'
import p2 from './images/p2.webp'
import p3 from './images/p3.webp'

const ProductPage = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const [activeFeature, setActiveFeature] = useState(0);

  const carouselSlides = [
    {
      image: p1,
      title: "Animal Database Management System",
      subtitle: "Revolutionizing animal facility management with advanced technology and compliance"
    },
    {
      image: p2,
      title: "Next-Gen Animal Facility Management",
      subtitle: "Streamline your operations with cutting-edge technology"
    },
    {
      image: p3,
      title: "Complete Compliance Solution",
      subtitle: "Stay ahead with automated compliance tracking"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  const mainFeatures = [
    {
      title: "CPCSEA Compliant",
      description: "Fully compliant with CPCSEA guidelines for animal facility management",
      icon: <Shield className="feature-icon" />,
      color: "#ff6004"
    },
    {
      title: "Secure Access Control",
      description: "Role-based access with secure login and comprehensive audit trails",
      icon: <Lock className="feature-icon" />,
      color: "#ff7a34"
    },
    {
      title: "Automated Documentation",
      description: "Auto-generate Form C, Form D, and other CPCSEA documents instantly",
      icon: <FileText className="feature-icon" />,
      color: "#ff8f54"
    }
  ];

  const detailedFeatures = [
    {
      title: "Inventory Management",
      description: "Track animal feed, bedding material, and supplies with real-time updates",
      icon: <Database className="feature-icon" />
    },
    {
      title: "Project Tracking",
      description: "Monitor IAEC approved projects, animal counts, and project durations",
      icon: <ChartBar className="feature-icon" />
    },
    {
      title: "Staff Management",
      description: "Manage staff details, health monitoring, and treatment records",
      icon: <Users className="feature-icon" />
    }
  ];

  const statistics = [
    { value: "80%", label: "Long-term Client Retention" },
    { value: "0%", label: "Defect Leakage" },
    { value: "100%", label: "Project Efficiency" },
    { value: "90%", label: "Customer Success Rate" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % mainFeatures.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [mainFeatures.length]);

  return (
    <div className="product-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="carousel-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="carousel-slide"
            >
              <img 
                src={carouselSlides[currentSlide].image} 
                alt="Hero"
                className="carousel-image" 
              />
              <div className="carousel-overlay" />
              <div className="carousel-content">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {carouselSlides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {carouselSlides[currentSlide].subtitle}
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cta-button"
                >
                  Get Started Now
                  <ArrowRight className="button-icon" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="carousel-indicators">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Features Section */}
      <section className="main-features">
        <div className="section-container">
          <div className="section-header">
            <h2>Core Capabilities</h2>
            <p>Comprehensive solutions for modern animal facility management</p>
          </div>
          <div className="features-grid">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-icon-wrapper" style={{ background: feature.color }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="detailed-features">
        <div className="section-container">
          <div className="section-header">
            <h2>Advanced Features</h2>
            <p>Everything you need for efficient facility management</p>
          </div>
          <div className="detailed-features-grid">
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="detailed-feature-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {feature.icon}
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="section-container">
          <div className="stats-grid">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Transform Your Facility?</h2>
          <p>Join the future of animal facility management today</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductPage;