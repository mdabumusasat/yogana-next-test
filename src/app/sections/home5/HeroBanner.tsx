"use client";
import Link from "next/link";
import React from "react";

const banners = [
  {
    title: "Yoga Style",
    text: "Yoga is a wonderful practice that combines physical postures",
    img: "/assets/images/resource/banner1-1.jpg",
    link: "/page-contact",
    style: "default",
    animation: "fadeInRight",
  },
  {
    title: "Yoga Pose",
    text: "There are many yoga poses, each with its own",
    img: "/assets/images/resource/banner1-2.jpg",
    link: "/page-contact",
    style: "style-two",
    animation: "fadeInLeft",
  },
];

const BannersSectionTwo = () => {
  return (
    <section className="banners-section-two pb-0">
      <div className="container">
        <div className="row">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`banner-box-two col-lg-6 col-md-12 wow ${banner.animation}`}>
              <div className={`inner-box ${banner.style} overlay-anim`}>
                <div className="image">
                  <img src={banner.img} alt={banner.title} /> 
                </div>
                <div className="content">
                  <h3 className="title">{banner.title}</h3>
                  <div className="text">{banner.text}</div>
                  <Link href={banner.link} className="theme-btn btn-style-two">
                    <span className="btn-title">Book Now</span>
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

export default BannersSectionTwo;
