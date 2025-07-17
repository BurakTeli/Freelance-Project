/* src/components/Home/HeroSlider.tsx */

import React, { useState, useEffect } from "react";
import "../../styles/components/Home/HeroSlider.css";

const images = [
  "/assets/Dogum9.jpeg",
  "/assets/Dogum23.jpeg",
  "/assets/Nısan1.jpeg",
  "/assets/Nısan4.jpeg",
  "/assets/Nısan14.jpeg",
  "/assets/Nısan17.jpeg",
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      <img src={images[currentIndex]} alt="Slider" className="slider-image" />
    </div>
  );
}

export default HeroSlider;
