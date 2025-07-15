// src/pages/HomePages/HomePages.tsx

import React from "react";
import VideoIntro from "../../components/VideoIntro/VideoIntro";
import CampaignSection from "../../components/Campaign/CampaignSection";
import GalleryIntroText from "../../components/GalleryIntroText/GalleryIntroText";
import OwnerSection from "../../components/OwnerSection/OwnerSection";
import ExperienceHighlight from "../../components/ExperienceHighlight/ExperienceHighlight";
import HighlightExperienceAlt from "../../components/HighlightExperienceAlt/HighlightExperienceAlt";
import MomentsTitleSection from "../../components/MomentsTitleSection/MomentsTitleSection";
import EventCardSlider from "../../components/EventCardSlider/EventCardSlider";
// import GallerySection from "../../components/GallerySection/GallerySection";
import Footer from "../../components/Footer/Footer";

const HomePages: React.FC = () => {
  return (
    <>
      <VideoIntro />
      <CampaignSection />
      <GalleryIntroText />
      <OwnerSection />
      <ExperienceHighlight />
      <HighlightExperienceAlt />
      <MomentsTitleSection />
      <EventCardSlider />
      {/* <GallerySection /> */}
      <Footer />
    </>
  );
};

export default HomePages;
