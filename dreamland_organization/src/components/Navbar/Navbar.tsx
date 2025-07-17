import React from "react";
import "../../styles/components/Navbar/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-section navbar-left">
        <a href="#home" className="navbar-link">
          AnaSayfa
        </a>
        <a href="#about" className="navbar-link">
          Hakkımızda
        </a>
      </div>

      <div className="navbar-section navbar-center">
        <img
          src="/assets/Logo.png"
          alt="Dreamland Logo"
          className="navbar-logo"
        />
      </div>

      <div className="navbar-section navbar-right">
        <a href="#events" className="navbar-link">
          Organizasyonlarımız
        </a>
        <a href="#contact" className="navbar-link">
          İletişim
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
