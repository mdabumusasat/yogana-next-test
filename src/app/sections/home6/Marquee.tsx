import React from "react";

const marqueeItems = ["Mesotherapy", "Treatments", "Relax", "Manicure"];

const MarqueeSection = () => {
  return (
    <section className="marquee-section style-two">
      <div className="marquee wow fadeInUp">
        <div className="marquee-group">
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="text" data-text={item}>
              {item}
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="marquee-group">
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="text" data-text={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
