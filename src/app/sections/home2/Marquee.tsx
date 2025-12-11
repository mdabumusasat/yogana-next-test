"use client";

import React from "react";

const marqueeItems = ["Yoga poses", "Yoga styles", "Relax", "Meditation"];
export default function MarqueeSectionTwo() {
  return (
    <section className="marquee-section-two style-two">
      <div className="marquee-two">
        {[0, 1].map((i) => (
          <div key={i} className="marquee-group" aria-hidden={i === 1}>
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="text" data-text={item}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
