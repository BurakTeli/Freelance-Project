import React from "react";
import "../../styles/pages/EngagementPage/EngagementPage.css";
import EngagementIntroBlock from "../../../Engagement/EngagementIntroBlock";
import EngagementAboutBlock from "../../../Engagement/EngagementAboutBlock";



const EngagementPage: React.FC = () => {
  return (
    <div className="engagement-page">
      <EngagementIntroBlock />
      <EngagementAboutBlock />
    </div>
  );
};

export default EngagementPage;
