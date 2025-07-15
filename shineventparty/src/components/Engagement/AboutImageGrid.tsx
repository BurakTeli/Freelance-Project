import React from "react";
import "../../styles/components/EngagementPage/AboutImageGrid.css";

const AboutImageGrid: React.FC = () => {
  return (
    <div className="about-image-grid">
      <img src="/images/shine/2.JPG" alt="Grid Image 1" />
      <img src="/images/shine/5.JPG" alt="Grid Image 2" />
      <img src="/images/shine/6.JPG" alt="Grid Image 3" />
      <img src="/images/shine/7.JPG" alt="Grid Image 4" />
    </div>
  );
};

export default AboutImageGrid;
