import React from "react";
import "../../styles/components/Footer/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Left - Logo */}
      <div className="footer-logo">
        <img
          src="/images/components/Navbar/navbar.png"
          alt="Logo"
          className="footer-logo-img"
        />
      </div>

      {/* Right - Links */}
      <div className="footer-links">
        <a href="#hakkimizda">Hakkımızda</a>
        <a href="#iletisim">İletişim</a>
        <a href="#konum">Konum</a>
      </div>
    </footer>
  );
};

export default Footer;
