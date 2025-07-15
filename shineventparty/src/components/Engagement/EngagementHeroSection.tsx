import React from "react";
import "../../styles/components/EngagementPage/EngagementHeroSection.css";

const EngagementHeroSection: React.FC = () => {
  return (
    <section className="engagement-hero-section">
      {/* Main headline with line breaks for balance */}
      <h1 className="hero-heading">
        BAZI ANLAR
        <br />
        <span className="highlight-text">
          BİR ÖMRE
          <br />
          İZ BIRAKIR
        </span>
      </h1>

      {/* Subheading */}
      <h4 className="hero-subtext">
        Shine Event Party’de
        <br />
        Hayalinizdeki Nişan Sizi Bekliyor
      </h4>

      {/* Description paragraph */}
      <p className="hero-description">
        Nişan geceniz, sadece bir davet değil; bir ömür boyu hatırlanacak
        anların başlangıcıdır.
        <br />
        Shine Event Party’de, her detayı sizin için özenle tasarlıyor;
        sevdiklerinizle paylaşacağınız bu büyülü günü, unutulmaz bir masala
        dönüştürüyoruz.
        <br />
        Işıl ışıl dekorasyonlarımız, zarif sofralarımız ve sıcak atmosferimizle;
        hayallerinizdeki nişanı gerçek kılmak için buradayız.
        <br />
        Her çiftin hikâyesi benzersizdir; biz de sizin hikâyenize en özel
        dokunuşu katmak için heyecan duyuyoruz.
      </p>
    </section>
  );
};

export default EngagementHeroSection;
