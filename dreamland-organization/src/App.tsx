import React from "react";
import Navbar from "./components/Home/Navbar"; // Navbar import edildi
import "./index.css"; // Global stil dosyası (varsa)

/**
 * App component for Dreamland Organization Project.
 * Currently renders only the Navbar for testing.
 */
function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
