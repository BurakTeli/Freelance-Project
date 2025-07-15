// src/components/Graduation/MezuniyetAnaSection.tsx

import MezuniyetHero from "./MezuniyetHero";
import MezuniyetText from "./MezuniyetText";
import "../../styles/components/Graduation/MezuniyetAnaSection.css";
// import MezuniyetBadge from "./MezuniyetBadge";

const MezuniyetAnaSection = () => {
  return (
    <div className="mezuniyet-main-container">
      <MezuniyetHero />
      <MezuniyetText />
      {/* <MezuniyetBadge /> */}
    </div>
  );
};

export default MezuniyetAnaSection;
