import React, { useState } from "react";
import logo from "../assets/mlogo.avif";   // 👈 IMPORTANT

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      
      {/* Logo Image */}
      <div className="logo">
        <img src={logo} alt="Manu Logo" />
      </div>

      {/* Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

    </nav>
  );
};

export default Navbar;