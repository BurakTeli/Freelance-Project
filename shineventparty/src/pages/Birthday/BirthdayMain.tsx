import React from "react";
import BirthdayHeader from "../../components/Birthday/BirthdayHeader";
import BirthdayImage from "../../components/Birthday/BirthdayImage";
import BirthdayDescription from "../../components/Birthday/BirthdayDescription";
import BirthdayGallery from "../../components/Birthday/BirthdayGallery";
import BirthdayStory from "../../components/Birthday/BirthdayStory";
import BirthdayTransition from "../../components/Birthday/BirthdayTransition";
import BirthdayDetailGallery from "../../components/Birthday/BirthdayDetailGallery";

const BirthdayMain: React.FC = () => {
  return (
    <main>
      <BirthdayHeader />
      <BirthdayImage />
      <BirthdayDescription />
      <BirthdayGallery />
      <BirthdayStory />
      <BirthdayTransition />
      <BirthdayDetailGallery />
    </main>
  );
};

export default BirthdayMain;
