"use client";
import React from "react";

const countdownData = [
  { time: "325", label: "Days" },
  { time: "22", label: "Hours" },
  { time: "45", label: "Mints" },
  { time: "30", label: "Second" },
];

const ProductDealsSection = () => {
  return (
    <section id="product" className="product-deals-section">
      <div
        className="bg bg-image"
        style={{ backgroundImage: "url(/assets/images/background/bg-product-deals1.png)" }}
      ></div>
      <div
        className="bg curved-shape-top"
        style={{ backgroundImage: "url(/assets/images/resource/curved-shape-top.png)" }}
      ></div>
      <div
        className="bg curved-shape-bottom"
        style={{ backgroundImage: "url(/assets/images/resource/curved-shape-bottom.png)" }}
      ></div>
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-8 offset-xl-5">
            <div className="outer-box">
              <div className="sec-title mb-0 text-center wow fadeInUp">
                <h1 className="words-slide-up text-split">Exclusive Offer for Today</h1>
                <span className="text-two">30% off on Selected Products</span>
                <div className="text">
                  They are currently offering a special discount on their regular yoga <br />
                  classes They also have day-long yoga retreats
                </div>
                <span className="text-three">Hurry up! Deals end up :</span>
              </div>
              <div
                className="countdown-block-outer wow fadeInUp"
                data-wow-delay=".3s">
                {countdownData.map((item, index) => (
                  <div className="countdown-block" key={index}>
                    <div className="inner-box">
                      <div className="content-box">
                        <div className="countdown-time">{item.time}</div>
                        <div className="countdown-title">{item.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDealsSection;
