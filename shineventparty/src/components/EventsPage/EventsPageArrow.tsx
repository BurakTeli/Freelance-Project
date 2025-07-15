import React from "react";
import "../../styles/components/EventsPage/EventsPageArrow.css";

// Decorative arrow used between event page sections
const EventsPageArrow: React.FC = () => {
  return (
    <div className="events-arrow-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="100"
        viewBox="0 0 64 100"
        fill="none"
      >
        <path
          d="M32 0 C32 40, 0 40, 32 80 C64 40, 32 40, 32 0"
          stroke="#c14450"
          strokeWidth="4"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default EventsPageArrow;
