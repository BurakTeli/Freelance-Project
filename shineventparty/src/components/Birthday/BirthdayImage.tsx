import React from "react";
import "../../styles/components/Birthday/BirthdayImage.css";

const BirthdayImage: React.FC = () => {
  return (
    <div className="birthday-image-wrapper">
      <img
        src="/images/components/Birthday/12.JPG"
        alt="Birthday Celebration"
        className="birthday-image"
      />
    </div>
  );
};

export default BirthdayImage;
