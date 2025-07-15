import React from "react";
import "../../styles/components/AboutPage/AboutGallery.css";

const AboutGallery: React.FC = () => {
  // List of image filenames located in public/images/shine/
  const images = [
    "23.jpg",
    "1.JPG",
    "24.jpg",
    "6.JPG",
    "3.JPG",
    "2.JPG",
    "25.JPG",
    "26.JPG",
    "27.JPG",
  ];

  return (
    <div className="about-gallery-container">
      {/* Section title */}
      <h2 className="about-gallery-title">Etkinliklerden Kareler</h2>

      {/* Horizontally scrollable gallery */}
      <div className="about-gallery-scroll">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            {/* Image card */}
            <img src={`/images/shine/${img}`} alt={`Etkinlik ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutGallery;
