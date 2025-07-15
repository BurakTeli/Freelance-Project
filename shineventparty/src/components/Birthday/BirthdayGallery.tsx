
import "../../styles/components/Birthday/BirthdayGallery.css";

const BirthdayGallery = () => {
  return (
    <div className="about-image-row">
      {/* 🌙 Left image with moon effect */}
      <div className="about-circle-left">
        <img
          src="/images/components/Birthday/13.JPG"
          alt="Moon style"
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        />
      </div>

      {/* 🌸 Center circular image */}
      <img
        src="/images/components/Birthday/14.JPG"
        alt="Flower decoration"
        className="about-circle"
      />

      {/* 🎉 Right circular image */}
      <div className="about-circle-right">
        <img
          src="/images/components/Birthday/70.JPG"
          alt="Guests enjoying"
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};

export default BirthdayGallery;
