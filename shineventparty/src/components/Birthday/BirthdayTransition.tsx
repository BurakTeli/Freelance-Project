import React from "react";
import BirthdayArrow from "./BirthdayArrow";
import BirthdayGalleryShapes from "./BirthdayGalleryShapes";

const BirthdayTransition: React.FC = () => {
  return (
    <section className="birthday-transition-wrapper">
      <BirthdayArrow />
      <BirthdayGalleryShapes />
    </section>
  );
};

export default BirthdayTransition;
