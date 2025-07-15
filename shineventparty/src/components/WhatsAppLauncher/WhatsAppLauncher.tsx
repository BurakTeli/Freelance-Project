import React from "react";
import "../../styles/components/WhatsAppLauncher/WhatsAppLauncher.css";

// Fixed WhatsApp launcher button for direct WhatsApp messaging
const WhatsAppLauncher: React.FC = () => {
  return (
    <a
      href="https://wa.me/905314031996"
      className="whatsapp-launcher"
      aria-label="WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/Wp.png"
        alt="WhatsApp"
        className="whatsapp-launcher-logo"
      />
    </a>
  );
};

export default WhatsAppLauncher;
