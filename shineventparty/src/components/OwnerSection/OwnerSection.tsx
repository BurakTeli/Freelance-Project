import React from "react";
import "../../styles/components/OwnerSection/OwnerSection.css";

// 👤 A section that introduces the company founder (image on the left, text on the right)
const OwnerSection: React.FC = () => {
  return (
    <div className="owner-section">
      {/* 📸 Left Side: Founder Image */}
      <div className="owner-image-container">
        <img
          src="/images/Halime.jpg"
          alt="Company Founder"
          className="owner-image"
        />
      </div>

      {/* 📝 Right Side: Introduction Text */}
      <div className="owner-text">
        <h2>Halime Yüksel</h2>
        <h4>Kurucu & Yaratıcı Direktör</h4>
        <p>
          Hayalinizdeki en özel günleri, Shine Event Party’de gerçek birer anıya
          dönüştürmek için tutkuyla çalışıyorum. Her ayrıntıyı özenle düşünerek,
          yalnızca kendi mekanımızda, size ve sevdiklerinize unutulmaz bir
          deneyim sunmak önceliğim. Kadın girişimci ruhum ve genç ekibimle;
          nişan, mezuniyet, doğum günü ve daha nice mutluluğu birlikte kutlamak
          için buradayız. Siz de Shine’ın sıcak atmosferinde, hayallerinizi
          paylaşmaya davetlisiniz!
        </p>
      </div>
    </div>
  );
};

export default OwnerSection;
