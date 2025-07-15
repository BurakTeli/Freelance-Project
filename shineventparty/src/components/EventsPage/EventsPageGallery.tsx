
import "../../styles/components/EventsPage/EventsPageGallery.css";

// 3 circular gallery images: left (moon effect), center, and right.
const EventsPageGallery = () => {
  return (
    <div className="events-image-row">
      {/* 🌙 Left image with moon effect */}
      <div className="events-circle-left">
        <img
          src="/images/components/EventsPage/5.jpg"
          alt="Moon style"
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        />
      </div>

      {/* 🌸 Center circular image */}
      <img
        src="/images/components/EventsPage/15.JPG"
        alt="Flower decoration"
        className="events-circle"
      />

      {/* 🎉 Right circular image */}
      <div className="events-circle-right">
        <img
          src="/images/components/EventsPage/135.jpg"
          alt="Guests enjoying"
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};

export default EventsPageGallery;
