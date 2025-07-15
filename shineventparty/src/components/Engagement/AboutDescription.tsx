import React from "react";
import "../../styles/components/EngagementPage/AboutDescription.css";

const AboutDescription: React.FC = () => {
  return (
    <div className="about-description-container">
      <h2 className="about-description-title">Bizim Hikayemiz</h2>
      <p className="about-description-text">
        İlk tanışmamızdan, sevdiklerinizle paylaştığınız o unutulmaz anlara
        kadar; Shine Event Party’de her anı kahkaha, mutluluk ve güzel
        hatıralarla doldurmak için buradayız.
        <br />
        Bu yolculukta yanınızda olmak, özel günlerinize değer ve anlam katmak en
        büyük heyecanımız.
        <br />
        Siz de hikayenizi bizimle paylaşın, Shine’da her kutlama sevgiyle
        büyüsün!
      </p>
    </div>
  );
};

export default AboutDescription;
