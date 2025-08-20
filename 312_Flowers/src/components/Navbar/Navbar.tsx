import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// First row: Logo in the center, two links left, two links right
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* First row */}
      <div className="navbar-row top-row">
        {/* Left side links */}
        <div className="nav-left">
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
        </div>

        {/* Center logo */}
        <div className="nav-logo">
          <h1>312 Flowers</h1>
        </div>

        {/* Right side links */}
        <div className="nav-right">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* Second row will be added later */}
      <div className="navbar-row bottom-row">
        {/* Placeholder for second row */}
      </div>
    </nav>
  );
};

export default Navbar;
