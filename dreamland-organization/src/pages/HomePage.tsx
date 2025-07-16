import React, { useState } from "react";
import "../styles/pages/HomePage.css";

/**
 * HomePage component displaying main hero image with navigation arrows to switch images.
 */
const HomePage: React.FC = () => {
  // List of images
  const images = [
    "/Dugun16.jpeg",
    "/Dugun16.jpeg",
    "/Dugun16.jpeg",
    "/Dugun16.jpeg",
    "/Dugun16.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Previous image handler
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Next image handler
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="home-container">
      <img
        src={images[currentIndex]}
        alt={`Dreamland Wedding ${currentIndex + 1}`}
        className="home-hero-image"
      />

      <button className="nav-button left-button" onClick={handlePrev}>
        {"<"} {/* Placeholder, later PNG */}
      </button>

      <button className="nav-button right-button" onClick={handleNext}>
        {">"} {/* Placeholder, later PNG */}
      </button>
    </div>
  );
};

export default HomePage;
