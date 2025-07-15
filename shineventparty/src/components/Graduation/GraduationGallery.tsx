// src/components/Graduation/GraduationGallery.tsx

import React from "react";
import "../../styles/components/Graduation/GraduationGallery.css";

const GraduationGallery: React.FC = () => {
 
  const images = [
    "m19.jpg",
    "m18.jpg",
    "g1.jpg",
    "m13.jpg",
    "m12.jpg",
    "m6.jpg",
    "g12.jpg",
    "m6.jpg", 
  ];

  return (
    <div className="about-gallery-container">

      <h2 className="about-gallery-title">Etkinliklerden Kareler</h2>

      <div className="about-gallery-scroll">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
           
            <img
              src={`/images/components/Mezuniyet/${img}`}
              alt={`Etkinlik ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraduationGallery;
