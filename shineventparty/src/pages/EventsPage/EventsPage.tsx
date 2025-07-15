
import EventsPageHeader from "../../components/EventsPage/EventsPageHeader";
import EventsPageImage from "../../components/EventsPage/EventsPageImage";
import EventsPageDescription from "../../components/EventsPage/EventsPageDescription";
import EventsPageGallery from "../../components/EventsPage/EventsPageGallery";
import EventsPageStory from "../../components/EventsPage/EventsPageStory";
import EventsPageTransition from "../../components/EventsPage/EventsPageTransition";
import EventsPageDetailGallery from "../../components/EventsPage/EventsPageDetailGallery";

const EventsPage = () => {
  return (
    <div>
      <EventsPageHeader />
      <EventsPageImage />
      <EventsPageDescription />
      <EventsPageGallery />
      <EventsPageStory />
      <EventsPageTransition />
      <EventsPageDetailGallery />
    </div>
  );
};

export default EventsPage;
