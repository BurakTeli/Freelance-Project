import React from "react";
import "../../styles/pages/EngagementPage/EngagementPage.css";

import EngagementIntroBlock from "../../components/Engagement/EngagementIntroBlock";
import EngagementAboutBlock from "../../components/Engagement/EngagementAboutBlock";

const EngagementPage: React.FC = () => {
  return (
    <div className="engagement-page">
      <EngagementIntroBlock />
      <EngagementAboutBlock />
    </div>
  );
};

export default EngagementPage;
