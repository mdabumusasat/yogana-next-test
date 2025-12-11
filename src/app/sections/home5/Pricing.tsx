"use client";

import React from "react";
import Link from "next/link";
const PricingBlock = ({ title, classes, price, link, animation }) => (
  <div className={`pricing-block-six wow ${animation}`}>
    <div className="inner-box">
      <div className="content-box">
        <div className="inner">
          <h4 className="title">
            <Link href={link} aria-label={`Pricing plan for ${title}`}>
              {title}
            </Link>
          </h4>
          <div className="text">{classes}</div>
        </div>
        <span className="price">{price}</span>
      </div>
    </div>
  </div>
);
const PricingSectionSix = () => {
  const pricingLeft = [
    { title: "Meditation", classes: "22 Classes Per Month", price: "$89", link: "/page-pricing", animation: "fadeInRight" },
    { title: "Aromatherapy", classes: "18 Classes Per Month", price: "$59", link: "/page-pricing", animation: "fadeInRight" },
    { title: "Yoga Asanas", classes: "10 Classes Per Month", price: "$49", link: "/page-pricing", animation: "fadeInRight" },
    { title: "Sound Therapy", classes: "16 Classes Per Month", price: "$79", link: "/page-pricing", animation: "fadeInRight" },
  ];

  const pricingRight = [
    { title: "Buddha Yoga", classes: "10 Classes Per Month", price: "$39", link: "/page-pricing", animation: "fadeInLeft" },
    { title: "Yoga Sculpt", classes: "14 Classes Per Month", price: "$49", link: "/page-pricing", animation: "fadeInLeft" },
    { title: "Vinyasa Yoga", classes: "20 Classes Per Month", price: "$69", link: "/page-pricing", animation: "fadeInLeft" },
    { title: "Hatha Yoga", classes: "18 Classes Per Month", price: "$89", link: "/page-pricing", animation: "fadeInLeft" },
  ];

  return (
    <section className="pricing-section-six">
      <div className="container pb-0 pt-0">
        <div
          className="sec-title text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".3s">
          <figure className="image">
            <img src="/assets/images/icons/icon1.png" alt="Icon" />
          </figure>
          <span className="sub-title">Price</span>
          <h2 className="words-slide-up text-split">
            Choose Your Yoga Pricing <br /> Plan Now
          </h2>
          <div className="title-stroke-text">PRICING</div>
        </div>
        <div className="row align-items-center">
          <div className="content-column col-lg-6">
            {pricingLeft.map((plan, index) => (
              <PricingBlock key={index} {...plan} />
            ))}
          </div>
          <div className="content-column col-lg-6">
            {pricingRight.map((plan, index) => (
              <PricingBlock key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSectionSix;
