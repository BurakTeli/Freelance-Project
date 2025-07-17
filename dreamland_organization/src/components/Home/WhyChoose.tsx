/* src/components/Home/WhyChoose.tsx */

import React from "react";
import "../../styles/components/Home/WhyChoose.css";

function WhyChoose() {
  return (
    <div className="why-choose">
      <h2>
        WHY <span>choose</span> SERENE?
      </h2>
      <div className="why-items">
        <div className="why-item">
          <h3>save time</h3>
          <p>
            We take care of every detail, saving you time so you can focus on
            what truly matters—each other.
          </p>
        </div>
        <div className="why-item">
          <h3>save money</h3>
          <p>
            Our expertise and vendor connections help you save money while
            bringing your dream wedding to life.
          </p>
        </div>
        <div className="why-item">
          <h3>save relationships</h3>
          <p>
            We expertly manage the stress, allowing you to nurture your bond and
            cherish every moment of your journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
