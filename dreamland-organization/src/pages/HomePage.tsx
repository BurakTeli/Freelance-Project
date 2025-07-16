import React, { useState } from "react";
import "../styles/pages/HomePage.css";

/**
 * HomePage component displaying main hero image without navigation buttons.
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

  return (
    <div className="home-container">
      <img
        src={images[currentIndex]}
        alt={`Dreamland Wedding ${currentIndex + 1}`}
        className="home-hero-image"
      />
    </div>
  );
};

export default HomePage;
