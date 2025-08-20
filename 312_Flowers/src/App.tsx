import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSlider from "./components/HeroSlider/HeroSlider";

const App: React.FC = () => {
  return (
    <>
      {/* Navigation bar */}
      <Navbar />

      {/* Hero section */}
      <HeroSlider />
    </>
  );
};

export default App;
