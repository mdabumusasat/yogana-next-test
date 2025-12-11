"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const packages = [
  {
    number: "1",
    title: "Improves Flexibility",
    desc: "Hatha Yoga is a yoga that emphasizes physical techniques to preserve and channel vital energy",
    link: "/page-pricing",
    delay: ".3s",
  },
  {
    number: "2",
    title: "Builds Strength",
    desc: "Hatha Yoga is a yoga that emphasizes physical techniques to preserve and channel vital energy",
    link: "/page-pricing",
    delay: ".4s",
  },
  {
    number: "3",
    title: "Relieves Pain",
    desc: "Hatha Yoga is a yoga that emphasizes physical techniques to preserve and channel vital energy",
    link: "/page-pricing",
    delay: ".5s",
  },
  {
    number: "4",
    title: "Boosts Immunity",
    desc: "Hatha Yoga is a yoga that emphasizes physical techniques to preserve and channel vital energy",
    link: "/page-pricing",
    delay: ".5s",
  },
];

const PackagesSectionFour = () => {
  return (
    <section id="product" className="packages-section-four pt-90">
      <div
        className="bg bg-image"
        style={{ backgroundImage: `url(/assets/images/background/home4-bg1.jpg)` }}
      />
      <div className="outer-box">
        <div
          className="sec-title text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".3s">
          <div className="title-stroke">Pricing</div>
          <figure className="image">
            <Image
              src="/assets/images/icons/icon1.png"
              alt="Pricing Icon"
              width={47}
              height={45}
            />
          </figure>
          <span className="sub-title">Price</span>
          <h2 className="words-slide-up text-split">
            Choose Your Makeover <br /> Plan Now
          </h2>
        </div>
        {/* Packages Loop */}
        <div className="row">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="package-block-four col-xl-3 col-sm-6 wow fadeInLeft"
              data-wow-delay={pkg.delay}>
              <div className="inner-box">
                <div className="content-box">
                  <span className="number">{pkg.number}</span>
                  <h4 className="name">
                    <Link href={pkg.link}>{pkg.title}</Link>
                  </h4>
                  <div className="text">{pkg.desc}</div>
                  <Link href={pkg.link} className="btn-link">
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

export default PackagesSectionFour;
