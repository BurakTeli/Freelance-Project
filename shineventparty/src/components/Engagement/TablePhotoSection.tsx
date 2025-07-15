import React from "react";
import "../../styles/components/EngagementPage/TablePhotoSection.css";

const TablePhotoSection: React.FC = () => {
  return (
    <section className="table-photo-section">
      {/* Full-width image */}
      <img
        src="/images/components/Events/11.JPG"
        alt="Engagement Table"
        className="table-image"
      />
    </section>
  );
};

export default TablePhotoSection;
