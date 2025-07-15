import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/Navbar/Navbar.css";

const Navbar: React.FC = () => {
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orgDropdownOpen, setOrgDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopDropdownOpen(false);
      }
    };
    if (desktopDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [desktopDropdownOpen]);

  // Close mobile menu on click outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setOrgDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Desktop menu */}
        <div className="navbar-section navbar-left desktop-only">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/about">Hakkımızda</Link>
        </div>
        <div className="navbar-section navbar-center">
          <img
            src="/images/components/Navbar/navbar2.png"
            alt="Logo"
            className="navbar-logo"
          />
        </div>
        <div className="navbar-section navbar-right desktop-only">
          {/* Desktop Dropdown, now opens with click */}
          <div
            className="navbar-dropdown-desktop"
            ref={desktopDropdownRef}
            style={{ position: "relative" }}
          >
            <button
              className="navbar-dropdown-trigger"
              onClick={() => setDesktopDropdownOpen((open) => !open)}
            >
              Organizasyonlarımız
              <span
                style={{
                  marginLeft: "8px",
                  border: "solid #E4648C",
                  borderWidth: "0 2px 2px 0",
                  display: "inline-block",
                  padding: "4px",
                  transform: desktopDropdownOpen
                    ? "rotate(-135deg)"
                    : "rotate(45deg)",
                  transition: "transform 0.2s",
                }}
              />
            </button>
            {desktopDropdownOpen && (
              <div className="navbar-dropdown-menu">
                <Link
                  to="/events"
                  className="navbar-dropdown-item"
                  onClick={() => setDesktopDropdownOpen(false)}
                >
                  Etkinlikler
                </Link>
                <Link
                  to="/engagement"
                  className="navbar-dropdown-item"
                  onClick={() => setDesktopDropdownOpen(false)}
                >
                  Nişan
                </Link>
                <Link
                  to="/graduation"
                  className="navbar-dropdown-item"
                  onClick={() => setDesktopDropdownOpen(false)}
                >
                  Mezuniyet
                </Link>
                <Link
                  to="/birthday"
                  className="navbar-dropdown-item"
                  onClick={() => setDesktopDropdownOpen(false)}
                >
                  Doğum Günü
                </Link>
              </div>
            )}
          </div>
          <Link to="/contact">İletişim</Link>
        </div>

        {/* Burger (mobile) */}
        <button
          className="navbar-burger mobile-only"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" ref={menuRef}>
          <button
            className="mobile-menu-close"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            &times;
          </button>
          <div className="mobile-menu-links">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Ana Sayfa
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              Hakkımızda
            </Link>

            {/* Mobile dropdown for Organizasyonlarımız */}
            <div className="mobile-dropdown">
              <button
                className="mobile-dropdown-trigger"
                onClick={() => setOrgDropdownOpen((open) => !open)}
              >
                Organizasyonlarımız
                <span
                  className={`dropdown-arrow ${orgDropdownOpen ? "open" : ""}`}
                ></span>
              </button>
              {orgDropdownOpen && (
                <div className="mobile-dropdown-menu">
                  <Link to="/events" onClick={() => setMobileMenuOpen(false)}>
                    Etkinlikler
                  </Link>
                  <Link
                    to="/engagement"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Nişan
                  </Link>
                  <Link
                    to="/graduation"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mezuniyet
                  </Link>
                  <Link to="/birthday" onClick={() => setMobileMenuOpen(false)}>
                    Doğum Günü
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              İletişim
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
