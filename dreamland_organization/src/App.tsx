import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSlider from "./components/Home/HeroSlider";
import ImageGallery from "./components/Home/ImageGallery";
import WhyChoose from "./components/Home/WhyChoose";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <ImageGallery />
      <WhyChoose />
    </>
  );
}

export default App;
