import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

// Each slide item structure
interface Slide {
  id: number;
  title: string;
  link: string;
  image?: string; // image placeholder (optional for now)
}

// Dummy slide data (can be extended later)
const slides: Slide[] = [
  { id: 1, title: "Explore Roses", link: "/products?category=roses" },
  { id: 2, title: "Beautiful Lilies", link: "/products?category=lilies" },
  { id: 3, title: "Mixed Bouquets", link: "/products?category=mixed" },
];

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect (changes every 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          // Navigate to related page on click
          onClick={() => (window.location.href = slide.link)}
        >
          <div className="slide-content">
            {/* Text and button inside the slide */}
            <h2>{slide.title}</h2>
            <button>Discover More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
