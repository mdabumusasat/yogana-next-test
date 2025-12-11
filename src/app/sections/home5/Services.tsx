"use client";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Meditation",
    text: "Proin efficitur, mauris vel condimentum pulvinar on the time now",
    icon: "/assets/images/icons/theme-icon1.png",
    imageTwo: "/assets/images/resource/service11-1.png",
    hoverImage: "/assets/images/resource/service11-2.png",
    bgImage: "/assets/images/resource/service2-3.png",
    link: "/page-service-details",
    animation: "fadeInLeft",
    delay: ".3s",
  },
  {
    title: "Aromatherapy",
    text: "Proin efficitur, mauris vel condimentum pulvinar on the time now",
    icon: "/assets/images/icons/theme-icon2.png",
    imageTwo: "/assets/images/resource/service2-5.jpg",
    hoverImage: "/assets/images/resource/service2-2.jpg",
    bgImage: "/assets/images/resource/service2-3.png",
    link: "/page-service-details",
    animation: "fadeInLeft",
    delay: ".5s",
  },
  {
    title: "Sound Therapy",
    text: "Proin efficitur, mauris vel condimentum pulvinar on the time now",
    icon: "/assets/images/icons/theme-icon3.png",
    imageTwo: "/assets/images/resource/service2-6.jpg",
    hoverImage: "/assets/images/resource/service11-3.png",
    bgImage: "/assets/images/resource/service2-3.png",
    link: "/page-service-details",
    animation: "fadeInRight",
    delay: ".5s",
  },
];

const ServicesSection11 = () => {
  return (
    <section id="services" className="services-section11 pull-up">
      <div
        className="bg bg-image-four"
        style={{ backgroundImage: "url(/assets/images/background/bg-service11.jpg)" }}
      ></div>
    <div className="leaf3-pattrn1 bounce-x"></div>
    <div className="about2-8-pattrn2 bounce-y"></div>         

      <div className="auto-container">
        <div className="outer-box">
          <div className="sec-title text-center wow fadeInUp">
            <div className="title-stroke">Services</div>
            <figure className="image">
              <img src="/assets/images/icons/icon1.png" alt="Icon" />
            </figure>
            <span className="sub-title">What We Offer</span>
            <h2 className="words-slide-up text-split">Our Services</h2>
          </div>

          <div className="row">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-block11 col-lg-4 col-md-6 wow ${service.animation}`}
                data-wow-delay={service.delay}>
                <div className="inner-box">
                  <div
                    className="bg bg-image"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  ></div>
                  <figure className="image-two mb-0">
                    <img src={service.imageTwo} alt={service.title} />
                  </figure>
                  <div className="content-box-hover">
                    <div className="content-box">
                      <img className="icon" src={service.icon} alt="icon" />
                      <h3 className="title">
                        <Link href={service.link}>{service.title}</Link>
                      </h3>
                      <div className="text">{service.text}</div>
                      <Link className="read-more" href={service.link}>
                        <i className="icon-two fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="image-box">
                      <figure className="image mb-0">
                        <img src={service.hoverImage} alt={service.title} />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection11;
