import React, { useState } from "react";
import "../../styles/components/Home/ImageGallery.css";

const images = [
  "/assets/Dogum9.jpeg",
  "/assets/Dogum23.jpeg",
  "/assets/Nısan1.jpeg",
  "/assets/Nısan4.jpeg",
  "/assets/Nısan14.jpeg",
  "/assets/Nısan17.jpeg",
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery ${index + 1}`}
          className="gallery-image"
          onClick={() => handleImageClick(img)}
        />
      ))}

      {selectedImage && (
        <div className="overlay" onClick={handleClose}>
          <img
            src={selectedImage}
            alt="Enlarged View"
            className="enlarged-image"
          />
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
