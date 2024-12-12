import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ThemeToggleButton from "./../ThemeToggleButton";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Spandex</h1>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <Link className="name" to="/">Home</Link>
        <Link className="name" to="/about">About</Link>
        <Link className="name" href="/services">Services</Link>
        <Link className="name" href="/contact">Contact</Link>
            <ThemeToggleButton/>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? "✖" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
