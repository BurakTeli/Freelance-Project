import React from "react";
import "../../styles/components/EngagementPage/SideImagesWrapper.css"; // CSS import

const SideImagesWrapper: React.FC = () => {
  return (
    <div className="side-images-wrapper">
      {/* Top left image */}
      <img
        src="/images/components/Events/2.jpg"
        alt="Couple Smiling"
        className="side-image top-left"
      />

      {/* Top right image */}
      <img
        src="/images/components/Events/10.JPG"
        alt="Hands Holding Flowers"
        className="side-image top-right"
      />
    </div>
  );
};

export default SideImagesWrapper;
