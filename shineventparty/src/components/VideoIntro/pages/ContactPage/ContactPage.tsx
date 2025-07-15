// src/pages/ContactPage/ContactPage.tsx

import React from "react";
import ContactHeadline from "../../components/Contact/ContactHeadline";
import ContactSocials from "../../components/Contact/ContactSocials";
import ContactMap from "../../components/Contact/ContactMap";
import "../../styles/pages/ContactPage/ContactPage.css";


const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      {/* Contact title and intro text */}
      <ContactHeadline />

      {/* Contact methods – social media, phone, etc. */}
      <ContactSocials />

      {/* Google Maps location */}
      <ContactMap />
    </div>
  );
};

export default ContactPage;
 