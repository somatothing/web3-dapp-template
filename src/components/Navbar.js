// src/components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Web3 dApp</div>
        <div className="menu" onClick={toggleMenu}>
          ☰
        </div>
      </div>
      {menuOpen && (
        <div className="dropdown">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
