import React from "react";
import "../../styles/components/VideoIntro/VideoIntro.css";

const VideoIntro: React.FC = () => {
  return (
    <section className="video-intro">
      {/* 🎥 Fullscreen background video */}
      <video
        className="video-background"
        src="/images/shine/kesin.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 📝 Centered overlay text and button */}
      <div className="video-overlay">
        <h1 className="video-title">Shine Event’e Hoş Geldiniz</h1>
        <button className="video-button">Detaylar</button>
      </div>
    </section>
  );
};

export default VideoIntro;
