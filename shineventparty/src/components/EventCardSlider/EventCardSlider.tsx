import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components/EventCardSlider/EventCardSlider.css";

// 📌 Static card data for the event slider
const cardData = [
  {
    title: "NİŞAN",
    image: "/images/shine/1.JPG",
    navigateTo: "/engagement",
  },
  {
    title: "ETKİNLİKLER",
    image: "/images/shine/3.JPG",
    navigateTo: "/events", // ⭐️
  },
  {
    title: "DOĞUM GÜNLERİ",
    image: "/images/shine/10.jpg",
    navigateTo: "/birthday",
  },
  {
    title: "MEZUNİYET",
    image: "/images/shine/29.jpg",
    navigateTo: "/graduation",
  },
];

const EventCardSlider: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string | null) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="event-slider-container">
      <div className="event-card-wrapper">
        {cardData.map((card, index) => (
          <div className="event-card" key={index}>
            <img src={card.image} alt={card.title} className="event-image" />
            <h3 className="event-title-center">{card.title}</h3>
            {card.navigateTo && (
              <button
                className="event-detail-button"
                onClick={() => handleNavigate(card.navigateTo)}
              >
                Detaylar
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCardSlider;
