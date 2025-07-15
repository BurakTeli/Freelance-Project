import React from "react";
import "../../styles/components/Contact/ContactMap.css";

const ContactMap: React.FC = () => {
  return (
    <div className="contact-map-container">
      <iframe
        className="contact-map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.829561860978!2d32.69651871291388!3d39.96756318273377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3374aed7fb7ed%3A0x9567f296f3394775!2sShine%20Event!5e0!3m2!1str!2str!4v1750870068871!5m2!1str!2str"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Shine Event Location"
      ></iframe>
    </div>
  );
};

export default ContactMap;
