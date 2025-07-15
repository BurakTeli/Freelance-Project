import React from "react";
import "../../styles/components/Birthday/BirthdayHeader.css";

const BirthdayHeader: React.FC = () => {
  return (
    <div className="birthday-header">
      <h1 className="birthday-title">Fark Yaratanlar</h1>
      <h1 className="birthday-title">Hayal Gücüyle Kutlayanlar</h1>
      <p className="birthday-location">
        Shine Event Party – Sadece Kendi Mekanımızda
      </p>
    </div>
  );
};

export default BirthdayHeader;
