import React from "react";
import "../../styles/components/ExperienceHighlight/ExperienceHighlight.css";

const ExperienceHighlight: React.FC = () => {
  return (
    <section className="experience-highlight">
      <div className="panel left-panel">
        <div className="panel-content">
          <h2>Her Kutlama, Bir Hikâyeye Dönüşür</h2>
          <p>
            Shine Event Party’de her davet bir anıdan çok daha fazlası… Burası,
            hayallerinizi gerçeğe dönüştürdüğümüz; sıcaklığın, zarafetin ve
            samimiyetin bir arada olduğu özel bir buluşma noktası. Genç ve
            yaratıcı ekibimizle, klasik kutlamaların ötesinde; hayal gücünü,
            yenilikçi dekorları ve size özel detayları bir araya getiriyoruz.
            Her etkinlikte, mutluluğunuzu büyüten anlara imza atıyor, her masada
            yeni bir hikâye başlatıyoruz. Çünkü biz, kutlamanın bir geceyle
            sınırlı kalmasını değil, yıllar boyu hafızalarda kalacak ışıltılı
            anılar yaratmayı hedefliyoruz. Sizi, en değerli anlarınıza ışık
            tutmaya ve Shine’ın eşsiz atmosferinde yepyeni hatıralar
            biriktirmeye davet ediyoruz.
          </p>
        </div>
      </div>
      <div className="panel right-panel">
        <img
          src="/images/shine/5.JPG"
          alt="Experience"
          className="panel-image"
        />
      </div>
    </section>
  );
};

export default ExperienceHighlight;
