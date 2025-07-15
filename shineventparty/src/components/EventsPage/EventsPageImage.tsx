import React from "react";
import "../../styles/components/EventsPage/EventsPageImage.css";

// Displays a large, landscape event image with styled wrapper
const EventsPageImage: React.FC = () => {
  return (
    <div className="events-image-wrapper">
      <img
        src="/images/components/EventsPage/4.jpg"
        alt="Event Celebration"
        className="events-image"
      />
    </div>
  );
};

export default EventsPageImage;
