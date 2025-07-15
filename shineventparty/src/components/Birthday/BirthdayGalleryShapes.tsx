import React from "react";
import "../../styles/components/Birthday/BirthdayGalleryShapes.css";

const BirthdayGalleryShapes: React.FC = () => {
  return (
    <div className="birthday-gallery-shape-wrapper">
      <img
        src="/images/components/Birthday/19.JPG"
        alt="Shape 1"
        className="shape-photo-one"
      />
      <img
        src="/images/components/Birthday/27.JPG"
        alt="Shape 2"
        className="shape-photo-two"
      />
      <img
        src="/images/components/Birthday/47.JPG"
        alt="Shape 3"
        className="shape-photo-three"
      />
      <img
        src="/images/components/Birthday/63.JPG"
        alt="Shape 4"
        className="shape-photo-four"
      />
    </div>
  );
};

export default BirthdayGalleryShapes ;
