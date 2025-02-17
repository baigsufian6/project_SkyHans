import React, { useState } from "react";
import { motion } from "framer-motion";
import './ContactPage.css';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      setTimeout(() => setFormStatus(""), 2000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <motion.section
        className="contact-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>GET IN TOUCH</h1>
        <div className="underline" />
        <p>We'd love to hear from you! Drop us a line below.</p>
      </motion.section>

      <div className="contact-wrapper">
        {/* Contact Information Section */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="info-content">
            <h2>Our Office</h2>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>
                2nd Floor, Door no. #42, 24th Main Road, 7th cross,<br />
                Near R. V. Dental college, R K Colony,<br />
                2nd Phase, J. P. Nagar,<br />
                Bengaluru, Karnataka 560078
              </p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>info@skyhans.com</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+91-7829625637</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          className="contact-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Drop A Line!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Write Your Message" rows="5" required />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={formStatus === "sending"}
            >
              {formStatus === "sending" ? (
                <div className="loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
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
  );
};

export default ContactPage;