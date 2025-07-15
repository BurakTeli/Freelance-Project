import React from "react";
import "../../styles/components/EventsPage/EventsPageHeader.css";

const EventsPageHeader: React.FC = () => {
  return (
    <div className="events-header">
      <h1 className="events-title">Hayal Edenler, Fark Yaratanlar</h1>
      <h2 className="events-title-sub">Yaratıcı ve Dinamik Planlama Ekibi</h2>
      <p className="events-location">
        Shine Event Party – Sadece Kendi Mekanımızda
      </p>
      <p className="events-header-desc">
        Her etkinliğe özgün fikirler, titiz planlama ve sınırsız hayal gücümüzle dokunuyoruz. 
        Sıradan organizasyonlar değil, unutulmaz anlar için çalışıyoruz. 
        Genç ve dinamik ekibimizle en özel günlerinizi sizinle birlikte hayata geçiriyoruz!
      </p>
    </div>
  );
};

export default EventsPageHeader;
