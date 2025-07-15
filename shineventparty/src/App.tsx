// src/App.tsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Page Components
import HomePages from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import EngagementPage from "./pages/EngagementPage/EngagementPage";
import GraduationPage from "./pages/GraduationPage/GraduationPage";
import BirthdayMain from "./pages/Birthday/BirthdayMain";
import EventsPage from "./pages/EventsPage/EventsPage";
import ChatBotContainer from "./pages/ChatBot/ChatBotContainer";

// Global Styles
import "./styles/App/App.css";
import WhatsAppLauncher from "./components/WhatsAppLauncher/WhatsAppLauncher";

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <Router>
      <div className="app">
        {/* Top Navigation Bar */}
        <Navbar />

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/engagement" element={<EngagementPage />} />
          <Route path="/birthday" element={<BirthdayMain />} />
          <Route path="/graduation" element={<GraduationPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>

        {/* Footer - always visible */}
        <Footer />

        {/* Global ChatBot - always visible on all pages */}
        <ChatBotContainer />
        <WhatsAppLauncher  />
      </div>
    </Router>
  );
};

export default App;
