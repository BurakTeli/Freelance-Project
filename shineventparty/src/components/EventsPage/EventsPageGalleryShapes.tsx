import React from "react";
import "../../styles/components/EventsPage/EventsPageGalleryShapes.css";

// Renders a decorative row of four event images with custom border radii
const EventsPageGalleryShapes: React.FC = () => {
  return (
    <div className="events-gallery-shape-wrapper">
      <img
        src="/images/components/EventsPage/17.jpg"
        alt="Shape 1"
        className="shape-photo-one"
      />
      <img
        src="/images/components/EventsPage/28.jpg"
        alt="Shape 2"
        className="shape-photo-two"
      />
      <img
        src="/images/components/EventsPage/135.jpg"
        alt="Shape 3"
        className="shape-photo-three"
      />
      <img
        src="/images/components/EventsPage/15.JPG"
        alt="Shape 4"
        className="shape-photo-four"
      />
    </div>
  );
};

export default EventsPageGalleryShapes;
