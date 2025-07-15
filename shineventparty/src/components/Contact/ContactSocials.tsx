import React from "react";
import "../../styles/components/Contact/ContactSocials.css";

// Contact icons section with WhatsApp, Instagram, and Phone
const ContactSocials: React.FC = () => {
  return (
    <div className="contact-socials-container">
      {/* WhatsApp - opens direct chat in new tab */}
      <a
        href="https://wa.me/905314031996"
        className="social-icon"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/Social1.png" alt="WhatsApp Icon" />
      </a>

      {/* Instagram - always opens in a new tab */}
      <a
        href="https://instagram.com/shineventparty"
        className="social-icon"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/Social3.png" alt="Instagram Icon" />
      </a>

      {/* Phone Call - triggers call on supported devices */}
      <a
        href="tel:+905314031996"
        className="social-icon"
        aria-label="Phone"
        // No target or rel needed for tel: links
      >
        <img src="/images/Social2.png" alt="Phone Icon" />
      </a>
    </div>
  );
};

export default ContactSocials;
