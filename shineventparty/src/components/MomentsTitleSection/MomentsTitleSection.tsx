import React from "react";
import "../../styles/components/MomentsTitleSection/MomentsTitleSection.css";

const MomentsTitleSection: React.FC = () => {
  return (
    <div className="moments-title-wrapper">
      <div className="vertical-line" />
      <div className="moments-title-text">
        <p className="upper-text">ANLARIN MİMARLARIYIZ</p>
        <p className="main-text">Anılar</p>
        <span className="dot">•</span>
      </div>
    </div>
  );
};

export default MomentsTitleSection;
