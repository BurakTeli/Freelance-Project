import React from "react";
import "../../styles/components/GallerySection/GallerySection.css";

const GallerySection: React.FC = () => {
  return (
    // 🖼️ Main gallery section — wraps all image columns
    <section className="gallery-section">
      {/* 🔹 Left column — contains 3 stacked images */}
      <div className="gallery-column gallery-left">
        {/* Large vertical image on the left */}
        <div className="left-photo-1">
          <img src="/images/1.png" alt="Left Photo 1" />
        </div>

        {/* Small top image aligned with left-photo-1 */}
        <div className="left-photo-2">
          <img src="/images/1.png" alt="Left Photo 2" />
        </div>

        {/* Small bottom image aligned with left-photo-2 */}
        <div className="left-photo-3">
          <img src="/images/1.png" alt="Left Photo 3" />
        </div>
      </div>

      {/* 🔸 Row that contains both center and right columns side-by-side */}
      <div className="gallery-row">
        {/* Center column — holds one main highlight image */}
        <div className="gallery-column gallery-center">
          <div className="center-photo-main">
            <img src="/images/1.png" alt="Highlight center" />
          </div>
        </div>

        {/* Right column — contains one image for now */}
        <div className="gallery-column gallery-right">
          <div className="right-photo-1">
            <img src="/images/1.png" alt="Barn field" />
          </div>
        </div>

        {/* 🆕 Extra image on the far right — scrolls with page, not fixed */}
        <div className="flat-photo-relative">
          <img src="/images/1.png" alt="Flat image" />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
