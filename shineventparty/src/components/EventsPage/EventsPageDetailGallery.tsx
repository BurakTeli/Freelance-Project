import "../../styles/components/EventsPage/EventsPageDetailGallery.css";

// 2x2 image grid gallery for the details section
const EventsPageDetailGallery = () => {
  return (
    <div className="events-image-grid">
      <img src="/images/components/EventsPage/5.jpg" alt="Grid Image 1" />
      <img src="/images/components/EventsPage/13.JPG" alt="Grid Image 2" />
      <img src="/images/components/EventsPage/21.jpg" alt="Grid Image 3" />
      <img src="/images/components/EventsPage/3.jpg" alt="Grid Image 4" />
    </div>
  );
};

export default EventsPageDetailGallery;
