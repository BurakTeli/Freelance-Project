import React from "react";
import "../../styles/components/Birthday/BirthdayDescription.css";

const BirthdayDescription: React.FC = () => {
  return (
    <div className="birthday-description">
      <p className="description-line">
        Shine Event Party’de,{" "}
        <span className="highlight">
          her anın en güzel şekilde kutlanmayı hak ettiğine inanıyoruz
        </span>
        .
      </p>
    </div>
  );
};

export default BirthdayDescription;
