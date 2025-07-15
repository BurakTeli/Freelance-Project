import React from "react";
import "../../styles/components/Graduation/GraduationDetailBlock2.css";

const GraduationDetailBlock2: React.FC = () => {
  return (
    <div className="graduation-detail2-root">
      <div className="graduation-detail2-info-block memory-bg">
        <div className="graduation-detail2-title">UNUTULMAZ ANLAR İÇİN</div>
        <div className="graduation-detail2-headline">
          KALICI <br /> HATIRALAR
        </div>
        <div className="graduation-detail2-center-img">
          <img src="/images/components/Mezuniyet/m6.jpg" alt="Hatıra" />
        </div>
        <div className="graduation-detail2-text">
          Shine Event Party’de, mekanımızın her köşesi en değerli anılarınızı
          biriktirmeniz için özenle hazırlandı. İster samimi bir masa, ister
          büyük bir mezuniyet kutlaması olsun; burada kahkaha, mutluluk ve
          unutulmaz hatıralar kendiliğinden ortaya çıkar.
        </div>
        <div className="graduation-detail2-subtext">
          Göz alıcı arka planlardan konforlu detaylara; hayalinizdeki mezuniyet
          kutlaması, Shine’da hayat buluyor.
        </div>
      </div>
      <div className="graduation-detail2-img-block">
        <img
          src="/images/components/Mezuniyet/m12.jpg"
          alt="Mezuniyet Anısı"
          className="graduation-detail2-main-img"
        />
      </div>
    </div>
  );
};

export default GraduationDetailBlock2;
