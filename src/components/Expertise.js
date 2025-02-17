import React from "react";
import "./Expertise.css";
import { motion } from "framer-motion";

const Expertise = () => {
  const services = [
  {
    title: "Search Engine Optimization",
    description: "We provide top-notch SEO strategies to improve your online visibility.",
    icon: "🔍"
  },
  {
    title: "Social Media Promotion",
    description: "Engage your audience with targeted and effective social media campaigns.",
    icon: "📱"
  },
  {
    title: "Search Engine Marketing",
    description: "Maximize your ROI with expert PPC and paid advertising strategies.",
    icon: "📈"
  },
  {
    title: "Content Marketing Services",
    description: "Deliver valuable content to attract and retain your target audience.",
    icon: "✍️"
  },
  {
    title: "Email Marketing",
    description: "Boost conversions with personalized and automated email campaigns.",
    icon: "📧"
  },
  {
    title: "Web Development",
    description: "Build fast, responsive, and user-friendly websites tailored to your brand.",
    icon: "💻"
  }
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="expertise-container">
      <div className="expertise-header">
        <span className="expertise-subtitle">What We Do</span>
        <h1 className="expertise-title">We're Skilled At</h1>
      </div>

      <motion.div 
        className="expertise-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="expertise-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="card-icon">{service.icon}</div>
            <h2 className="card-title">{service.title}</h2>
            <p className="card-description">{service.description}</p>
            <div className="card-overlay" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Expertise;