import React from "react";
import "../../styles/components/Graduation/GraduationInfoBlocks.css";

// GraduationDetailBlock component: Two-column layout with left image and right info section
const GraduationDetailBlock: React.FC = () => {
  return (
    <div className="graduation-detail-root">
      {/* Left: Large rectangular photo */}
      <div className="graduation-detail-img-block">
        <img
          src="/images/components/Mezuniyet/99.jpg"
          alt="Mezuniyet Masası"
          className="graduation-detail-main-img"
        />
      </div>

      {/* Right: Headings, small center photo, and description */}
      <div className="graduation-detail-info-block celebration-bg">
        {/* Top small heading */}
        <div className="graduation-detail-title">MEZUNİYETTE</div>
        {/* Main headline */}
        <div className="graduation-detail-headline">
          KUTLAMANIN <br /> KALBİ
        </div>
        {/* Centered small image */}
        <div className="graduation-detail-center-img">
          <img src="/images/components/Mezuniyet/98.jpg" alt="Mezuniyet Kutlaması" />
        </div>
        {/* Main descriptive text */}
        <div className="graduation-detail-text">
          Modern şıklıkla buluşan özel salonumuzda, mezuniyet gecenizi unutulmaz
          bir kutlamaya dönüştürüyoruz. Geniş ve ferah atmosfer, şık masa düzeni
          ve her detayıyla özenle hazırlanmış alanlarımızda, bu özel anlarınız
          bir ömür boyu hatırlanacak.
        </div>
        {/* Subtext for additional features */}
        <div className="graduation-detail-subtext">
          Geniş bahçe, profesyonel mutfak ve konfor odaklı ayrıcalıklarla Shine
          Event Party’de hem size hem de misafirlerinize unutulmaz bir gece
          sunuyoruz.
        </div>
      </div>
    </div>
  );
};

export default GraduationDetailBlock;
