import React from "react";
import EventsPageArrow from "./EventsPageArrow";
import EventsPageGalleryShapes from "./EventsPageGalleryShapes";

// Transition section: includes an arrow and decorative gallery shapes for event flow
const EventsPageTransition: React.FC = () => {
  return (
    <section className="events-transition-wrapper">
      <EventsPageArrow />
      <EventsPageGalleryShapes />
    </section>
  );
};

export default EventsPageTransition;
