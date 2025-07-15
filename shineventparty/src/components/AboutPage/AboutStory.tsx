import React from "react";
import "../../styles/components/AboutPage/AboutStory.css";

const AboutStory: React.FC = () => {
  return (
    <div className="about-story-container">
      <h2 className="about-story-title">
        Shine Organizasyon ile Işıltılı Anlar
      </h2>
      <div className="about-story-content">
        <div className="about-story-image">
          <img src="/images/Halime.jpg" alt="Şirket Sahibi" />
        </div>
        <div className="about-story-text">
          <p>
            Ankara İncek’te kurulan Shine Organizasyon, her detayıyla özenle
            tasarlanan ve sadece kendi mekanında hizmet veren butik bir davet
            evidir. Genç kadın girişimci Halime Yüksel’in liderliğinde; nişan,
            açılış, doğum günü, mezuniyet ve sevdiklerinizle paylaşmak
            istediğiniz her özel anı, unutulmaz kutlamalara dönüştürüyoruz.
          </p>
          <p>
            Shine ailesi olarak, her etkinliği sizin hayallerinize göre
            şekillendiriyor, profesyonel dokunuşlarımızla mutluluğunuza değer
            katıyoruz. Sıcak, samimi ve zarif atmosferimizde; sadece anın tadını
            çıkarmanız yeterli. Sizin için her kutlamayı özel kılıyor, sevginizi
            ve heyecanınızı paylaşıyor, hayatınızın en parlak anılarına ev
            sahipliği yapıyoruz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
