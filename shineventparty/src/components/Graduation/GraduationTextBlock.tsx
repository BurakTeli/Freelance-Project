// src/components/Graduation/GraduationTextBlock.tsx

import "../../styles/components/Graduation/GraduationTextBlock.css";

const GraduationTextBlock = () => {
  return (
    <section className="graduation-text-block">
      {/* Üstte vurgulu paragraf */}
      <p className="highlight-paragraph">
        Zarif salonlarımız ve sıcak atmosferimizle, Shine Event Party’de en özel
        günlerinizi kusursuz bir şekilde kutlamanız için her detayı titizlikle
        planlıyoruz. Sizin için unutulmaz bir anı yaratmak en büyük önceliğimiz;
        mükemmelliğe olan bağlılığımızla, hayalinizdeki kutlamayı gerçeğe
        dönüştürüyoruz.
      </p>

      {/* Ortada ince ayraç çizgi */}
      <div className="text-divider" />

      {/* Altta detaylı paragraflar */}
      <div className="text-paragraphs">
        <p>
          Şehrin huzurlu köşesinde yer alan Shine Event Party, unutulmaz
          anlarınıza şık ve modern bir ortam sunar. Mezuniyetler, nişanlar ve
          tüm kutlamalarınız için size ve sevdiklerinize özel bir deneyim
          hazırlıyoruz.
        </p>
        <p>
          Shine’da her detay size özel; her an, her mekan, sizin hikayenizi
          yansıtıyor. Deneyimli ekibimiz yalnızca organizasyonu koordine etmekle
          kalmaz, aynı zamanda hayallerinizi gerçeğe dönüştürmek için sizinle
          birlikte çalışır — samimi ve eksiksiz bir kutlama için.
        </p>
        <p>
          Kişiye özel dekorasyon, esnek menüler ve tamamen sizin için
          tasarlanmış organizasyon paketlerimizle; ister klasik, ister modern,
          ister tamamen size özgü bir konsept hayal edin, Shine Event Party
          olarak her detayı sizin için en güzel haliyle hayata geçiriyoruz.
        </p>
      </div>
    </section>
  );
};

export default GraduationTextBlock;
