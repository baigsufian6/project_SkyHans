import React, { useState } from "react";
import { motion } from "framer-motion";
import './ContactPage.css';
import Footer from './Footer';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("sent");
      setTimeout(() => setFormStatus(""), 2000);
    }, 1000);
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <motion.div 
      className="contact-page-container" // Add a container for flex layout
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <div className="contact-container">
        {/* Header Section */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>Get in Touch</h1>
          <div className="underline"></div>
          <p>We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
        </motion.div>

        <div className="contact-wrapper">
          {/* Contact Information */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2>Contact Information</h2>
            <div className="info-items">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Our Location</h3>
                  <p>
                    2nd Floor, Door no. #42, 24th Main Road,<br />
                    7th cross, Near R. V. Dental college,<br />
                    R K Colony, 2nd Phase, J. P. Nagar,<br />
                    Bengaluru, Karnataka 560078
                  </p>
                </div>
              </div>
              
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>info@skyhans.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91-7829625637</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>Send Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group full-width">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-group full-width">
                  <textarea placeholder="Your Message" rows="4" required></textarea>
                </div>
              </div>
              
              <motion.button
                type="submit"
                disabled={formStatus === "sending"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {formStatus === "sending" ? (
                  <div className="loading-dots">
                    <span></span><span></span><span></span>
                  </div>
                ) : formStatus === "sent" ? (
                  "Message Sent!"
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer /> {/* Footer is now at the bottom */}
    </motion.div>
  );
};

export default ContactPage;
