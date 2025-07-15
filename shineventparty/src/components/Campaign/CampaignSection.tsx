import React, { useEffect, useState } from "react";
import "../../styles/components/Campaign/CampaignSection.css";

const CampaignSection: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Show the popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // Delay in milliseconds

    return () => clearTimeout(timer);
  }, []);

  // Close the popup when the button is clicked
  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="campaign-overlay">
          <div className="campaign-popup">
            <img
              className="campaign-image"
              src="/images/components/Campaign/Temmuz.png"
              alt="Campaign"
            />
            <button className="close-button" onClick={handleClose}>
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CampaignSection;
