import AboutDescription from "./AboutDescription";
import AboutImageGrid from "./AboutImageGrid";
import AboutImageRow from "./AboutImageRow";
import AboutTitle from "./AboutTitle";

const EngagementAboutBlock = () => {
  return (
    <section className="engagement-about-section">
      <AboutTitle />
      <AboutImageRow />
      <AboutDescription />
      <AboutImageGrid/>
    </section>
  );
};

export default EngagementAboutBlock;
