import React from "react";
import SideImagesWrapper from "./SideImagesWrapper";
import EngagementHeroSection from "./EngagementHeroSection";
import TablePhotoSection from "./TablePhotoSection";

const EngagementIntroBlock: React.FC = () => {
  return (
    <div>
      <SideImagesWrapper />
      <EngagementHeroSection />
      <TablePhotoSection />
    </div>
  );
};

export default EngagementIntroBlock;
