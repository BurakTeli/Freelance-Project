import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex-center text-center" style={{ minHeight: "100vh" }}>
        <h1>Welcome to Dreamland Organization</h1>
      </div>
    </>
  );
}

export default App;
