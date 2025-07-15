import React from "react";
import "../../styles/components/HighlightExperienceAlt/HighlightExperienceAlt.css";

const HighlightExperienceAlt: React.FC = () => {
  return (
    <section className="highlight-experience-alt">
      <div className="panel left-image-panel">
        <img
          src="/images/shine/22.JPG"
          alt="Highlight"
          className="panel-image"
        />
      </div>
      <div className="panel right-text-panel">
        <div className="panel-content">
          <h2>Shine’da Yaşanan Her An, Eşsiz Bir Deneyimdir</h2>
          <p>
            Sıradan kutlamaların ötesine geçmek, unutulmaz detaylarla fark
            yaratmak için buradayız. Modern dokunuşlarımız ve özenle tasarlanmış
            ortamımızda; sevdiklerinizle birlikte geçirdiğiniz her anı, bir ömre
            değer bir deneyime dönüştürüyoruz. Shine Event Party’de,
            hayallerinizin ötesine geçen kutlamalar ve ilham veren atmosfer sizi
            bekliyor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HighlightExperienceAlt;
