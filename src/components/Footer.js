import React from 'react';
import './Footer.css';
import duplicate from './images/sky.png'
import { 
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, 
  FaTwitter, FaInstagram, FaLinkedinIn, FaDribbble,
  FaArrowRight, FaClock, FaCheckCircle, FaHeart 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__gradient-overlay"></div>
      

      <div className="footer__main">
        <div className="footer__grid">
          {/* Company Info */}
          <div className="footer__column footer__brand">
            <img src={duplicate} alt="SkyHans Logo" className="footer__logo" />
            <p className="footer__brand-description">
              Leading provider of innovative educational software solutions. 
              Empowering learning through technology since 2015.
            </p>
            <div className="footer__stats">
              <div className="footer__stat-item">
                <span>500+</span>
                <p>Clients Worldwide</p>
              </div>
              <div className="footer__stat-item">
                <span>98%</span>
                <p>Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h3>Quick Links</h3>
            <ul className="footer__links-grid">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Latest News</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__column">
            <h3>Our Services</h3>
            <div className="footer__services-grid">
              <a href="#" className="footer__service-card">
                <span>Web Development</span>
                <FaArrowRight />
              </a>
              <a href="#" className="footer__service-card">
                <span>Content Marketing</span>
                <FaArrowRight />
              </a>
              <a href="#" className="footer__service-card">
                <span>Digital Marketing</span>
                <FaArrowRight />
              </a>
              <a href="#" className="footer__service-card">
                <span>Email Marketing</span>
                <FaArrowRight />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer__column">
            <h3>Get in Touch</h3>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <FaMapMarkerAlt />
                <div>
                  <strong>Visit Us:</strong>
                  <p>2nd Floor, Door no. #42, 24th Main Road, 7th cross, Near R. V. Dental college, R K Colony</p>
                </div>
              </div>
              <div className="footer__contact-item">
                <FaClock />
                <div>
                  <strong>Business Hours:</strong>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="footer__contact-item">
                <FaPhone />
                <div>
                  <strong>Call Us:</strong>
                  <a href="tel:+917829625637">+91-782-962-5637</a>
                </div>
              </div>
              <div className="footer__contact-item">
                <FaEnvelope />
                <div>
                  <strong>Email Us:</strong>
                  <a href="mailto:info@skyhans.com">info@skyhans.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <div className="footer__copyright">
            <p>© 2025 SkyHans. All rights reserved.</p>
            <div className="footer__made-with">
              Made with <FaHeart /> in India
            </div>
          </div>
          <div className="footer__social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaDribbble /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;