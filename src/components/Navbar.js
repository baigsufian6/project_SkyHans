import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../components/images/hanslogo-removebg-preview-update.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
      <ul
        className={isMobile ? "nav-links-mobile active" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <a href="#service">SERVICE</a>
        </li>
        <li>
          <a href="#expertise">EXPERTISE</a>
        </li>
        <li>
          <a href="#product">PRODUCT</a>
        </li>
        <li>
          <a href="#team">TEAM</a>
        </li>
        <li>
          <a href="#contact">CONTACT US</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
