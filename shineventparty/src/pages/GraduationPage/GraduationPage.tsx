import React from "react";

import MezuniyetAnaSection from "../../components/Graduation/MezuniyetAnaSection";
import GraduationDetailBlock from "../../components/Graduation/GraduationDetailBlock";
import GraduationTextBlock from "../../components/Graduation/GraduationTextBlock";
import GraduationGallery from "../../components/Graduation/GraduationGallery";
import GraduationDetailBlock2 from "../../components/Graduation/GraduationDetailBlock2";

const GraduationPage: React.FC = () => {
  return (
    <div>
      {/* 🎓 Graduation Hero Section */}
      <MezuniyetAnaSection />
      <GraduationTextBlock />
      <GraduationDetailBlock  />
      <GraduationDetailBlock2/>
      <GraduationGallery/>

      {/* 🧩 More sections (to be added later) */}
      {/* <GraduationDetailBlock /> */}
    </div>
  );
};

export default GraduationPage;
