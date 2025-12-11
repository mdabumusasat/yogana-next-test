import React from "react";

const MarqueeSection = () => {
  return (
    <section className="marquee-section-two wow fadeInUp">
      <div className="marquee-two">
        <div className="marquee-group">
          <div className="text" data-text="Yoga poses">Yoga poses</div>
          <div className="text" data-text="Yoga styles">Yoga styles</div>
          <div className="text" data-text="Relax">Relax</div>
          <div className="text" data-text="Meditation">Meditation</div>
        </div>
        <div className="marquee-group" aria-hidden="true">
          <div className="text" data-text="Yoga poses">Yoga poses</div>
          <div className="text" data-text="Yoga styles">Yoga styles</div>
          <div className="text" data-text="Relax">Relax</div>
          <div className="text" data-text="Meditation">Meditation</div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
