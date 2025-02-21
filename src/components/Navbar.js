import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/skyhans logo-01.svg';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
  }, [location]);

  const serviceSubLinks = [
    { path: '/services/clinical-research', label: 'Animal & Clinical Research Software' },
    { path: '/services/training', label: 'Training & Placement' },
    { path: '/services/internship', label: 'Internship Program' },
    { path: '/services/web-development', label: 'Website Design Development' },
    { path: '/services/graphics', label: 'Graphics - 2D - 3D - Animation' },
  ];

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    {
      path: '/services',
      label: 'SERVICES',
      subMenu: serviceSubLinks,
    },
    { path: '/product', label: 'PRODUCT' },
    { path: '/team', label: 'TEAM' },
    { path: '/contact', label: 'CONTACT US' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>

          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <div key={link.path} className="nav-item">
                {link.subMenu ? (
                  <div 
                    className="services-menu"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    >
                      {link.label}
                      <svg 
                        className={`dropdown-arrow ${servicesOpen ? 'rotated' : ''}`} 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    <div className={`submenu ${servicesOpen ? 'active' : ''}`}>
                      {link.subMenu.map((subLink) => (
                        <Link
                          key={subLink.path}
                          to={subLink.path}
                          className={`submenu-link ${location.pathname === subLink.path ? 'active' : ''}`}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setIsMobile(!isMobile)}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger ${isMobile ? 'active' : ''}`}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </span>
          </button>
        </div>

        <div className={`nav-links-mobile ${isMobile ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <div key={link.path} className="mobile-nav-item">
              <Link
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => {
                  if (link.subMenu) {
                    setServicesOpen(!servicesOpen);
                  } else {
                    setIsMobile(false);
                  }
                }}
              >
                {link.label}
                {link.subMenu && (
                  <svg 
                    className={`dropdown-arrow ${servicesOpen ? 'rotated' : ''}`} 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {link.subMenu && servicesOpen && (
                <div className="mobile-submenu">
                  {link.subMenu.map((subLink) => (
                    <Link
                      key={subLink.path}
                      to={subLink.path}
                      className={`mobile-submenu-link ${location.pathname === subLink.path ? 'active' : ''}`}
                      onClick={() => setIsMobile(false)}
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;