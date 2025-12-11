"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Ashtanga Yoga",
      img: "/assets/images/resource/service5-1.jpg",
      delay: ".3s",
    },
    {
      id: 2,
      title: "Ashtanga Yoga",
      img: "/assets/images/resource/service5-2.jpg",
      delay: ".5s",
    },
    {
      id: 3,
      title: "Ashtanga Yoga",
      img: "/assets/images/resource/service5-3.jpg",
      delay: ".6s",
    },
    {
      id: 4,
      title: "Ashtanga Yoga",
      img: "/assets/images/resource/service5-4.jpg",
      delay: ".4s",
    },
  ];

  return (
    <section id="services" className="services-section-eight relative">
      <div className="service-leaf3-1 bounce-y"></div>
      <div className="service-leaf3-2 bounce-y"></div>
      <div className="auto-container">
        <div className="outer-box">
          <div
            className="sec-title text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s">
            <figure className="image mx-auto">
              <Image
                src="/assets/images/icons/icon2.png"
                width={46}
                height={41}
                alt="Icon"
              />
            </figure>
            <span className="sub-title">Services list</span>
            <h2 className="words-slide-up text-split">
              Our Services Will Make <br /> You Glow
            </h2>
          </div>
          <div className="row">
            {services.map((item) => (
              <div
                key={item.id}
                className="service-block-eight col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay={item.delay}>
                <div className="inner-box">
                  <div className="image-box">
                    <div
                      className="bg-image"
                      style={{ backgroundImage: `url(${item.img})` }}
                    ></div>
                  </div>
                  <div className="content-box">
                    <h4 className="title">
                      <Link href="/page-service-details">{item.title}</Link>
                    </h4>
                    <div className="shape1">
                      <Image
                        src="/assets/images/icons/shape-3.png"
                        alt="shape"
                        width={60}
                        height={60}
                      />
                    </div>
                    <Link href="/page-service-details" className="btn-more">
                      <i className="icon fa-solid fa-arrow-up"></i>
                    </Link>
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