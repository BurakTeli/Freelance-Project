// src/components/Graduation/MezuniyetHero.tsx

import "../../styles/components/Graduation/MezuniyetHero.css";


const MezuniyetHero = () => {
  return (
    <div className="mezuniyet-hero-container">
      {/* Left Side: Square Image with Positioned Badge */}
      <div className="mezuniyet-image-box">
        <img
          src="/images/components/Mezuniyet/m2.jpg"
          alt="Graduation Hero"
          className="mezuniyet-image"
        />
      </div>
    </div>
  );
};

export default MezuniyetHero;
