import React from "react";
import Navbar from "./components/Home/Navbar"; // Navbar import edildi
import "./index.css"; // Global stil dosyası (varsa)
import HomePage from "./pages/HomePage";

/**
 * App component for Dreamland Organization Project.
 * Currently renders only the Navbar for testing.
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
