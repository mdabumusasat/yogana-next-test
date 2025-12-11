"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const countersData = [
  { id: 1, icon: "/assets/images/icons/icon-fact5.png", title: "Instructors", end: 9, suffix: "" },
  { id: 2, icon: "/assets/images/icons/icon-fact6.png", title: "Years of Experience", end: 25, suffix: "+" },
  { id: 3, icon: "/assets/images/icons/icon-fact7.png", title: "Monthly classes", end: 22, suffix: "" },
  { id: 4, icon: "/assets/images/icons/icon-fact8.png", title: "Total Members", end: 1, suffix: "k+" },
];

export default function FunFactSectionTwo() {
  const [counts, setCounts] = useState(countersData.map(() => 0));

  useEffect(() => {
    const duration = 3000; 
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increments = countersData.map(counter => counter.end / steps);
    const interval = setInterval(() => {
      setCounts(prevCounts => {
        const updated = prevCounts.map((count, i) => {
          if (count + increments[i] >= countersData[i].end) return countersData[i].end;
          return count + increments[i];
        });
        if (updated.every((val, i) => val >= countersData[i].end)) clearInterval(interval);
        return updated;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="fun-fact-section-two pull-down pb-0">
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            {countersData.map((counter, index) => (
              <div key={counter.id} className={`counter-block-two col-lg-3 col-sm-6 ${index === 2 ? "" : ""} ${index === 3 ? "" : ""}`}>
                <div className="inner">
                  <figure className="icon">
                    <Image src={counter.icon} width={60} height={60} alt={counter.title} />
                  </figure>
                  <div className="inner-content">
                    <div className="count-box">
                      {Math.floor(counts[index])}{counter.suffix}
                    </div>
                    <div className="counter-title">{counter.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
