"use client";
import React from "react";
import Link from "next/link";

const PackagesSection = () => {
  const packages = [
    {
      number: "1",
      title: "Improves Flexibility",
      text: "Hatha Yoga is a yoga that emphasizes physical techniques to preserve and channel vital energy",
      delay: ".3s",
    },
    {
      number: "2",
      title: "Builds Strength",
      text: "Hatha Yoga is a yoga that emphasizes physical techniques to preserve and channel vital energy",
      delay: ".4s",
    },
    {
      number: "3",
      title: "Relieves Pain",
      text: "Hatha Yoga is a yoga that emphasizes physical techniques to preserve and channel vital energy",
      delay: ".6s",
    },
    {
      number: "4",
      title: "Boosts Immunity",
      text: "Hatha Yoga is a yoga that emphasizes physical techniques to preserve and channel vital energy",
      delay: ".6s",
      className: "wow fadeInRight",
    },
  ];

  return (
    <section id="product" className="packages-section-four pt-90">
      <div
        className="bg bg-image absolute inset-0"
        style={{ backgroundImage: "url(/assets/images/background/bg-pricing2.jpg)" }}/>
      <div className="outer-box z-10">
        <div
          className="sec-title text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".3s">
          <div className="title-stroke-text">benefits</div>
          <figure className="image">
            <img src="/assets/images/icons/icon1.png" alt="icon" />
          </figure>
          <span className="sub-title">Price</span>
          <h2 className="words-slide-up text-split">
            Choose Your Makeover <br /> Plan Now
          </h2>
        </div>
        <div className="row">
          {packages.map((item, i) => (
            <div
              key={i}
              className={`package-block-four col-xl-3 col-sm-6 wow fadeInLeft ${item.className || ""}`}
              data-wow-delay={item.delay}>
              <div className="inner-box">
                <div className="content-box">
                  <span className="number">{item.number}</span>
                  <h4 className="name">
                    <Link href="/page-pricing">{item.title}</Link>
                  </h4>
                  <div className="text">{item.text}</div>
                  <Link href="/page-contact" className="btn-link">
                    <span className="btn-title">Book Now</span>
                    <i className="icon far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
