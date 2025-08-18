import React from "react";
import Header from "../components/Header";
import ShowcaseSection from "../components/ShowcaseSection";
import ProductCardHover from "../components/ProductCardHover";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* Üst kısım */}
      <Header />

      {/* Modern arka planlı vitrin bölümü */}
      <ShowcaseSection />

      {/* Ürün listesi */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "20px"
      }}>
        <ProductCardHover
          name="Papatya Buketi"
          price="150"
          image="/images/papatya.png"
          whatsappNumber="905555555555"
        />
        <ProductCardHover
          name="Gül Buketi"
          price="250"
          image="/images/gul.png"
          whatsappNumber="905555555555"
        />
        <ProductCardHover
          name="Orkide"
          price="300"
          image="/images/orkide.png"
          whatsappNumber="905555555555"
        />
      </div>

      {/* Alt kısım */}
      <Footer />
    </>
  );
};

export default Home;
