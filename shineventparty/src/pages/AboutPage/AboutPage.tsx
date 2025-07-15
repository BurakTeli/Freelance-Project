import React from "react";
import AboutHeader from "../../components/AboutPage/AboutHeader";
import AboutStory from "../../components/AboutPage/AboutStory";
import AboutGallery from "../../components/AboutPage/AboutGallery";

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* Main title of the page */}
      <AboutHeader />

      {/* Section with owner's photo and company story */}
      <AboutStory />

      {/* Scrollable photo gallery */}
      <AboutGallery />
    </div>
  );
};

export default AboutPage;
