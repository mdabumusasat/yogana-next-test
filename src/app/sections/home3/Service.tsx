"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const servicesData = [
  {
    subtitle: "Quality Service",
    title: "Aura Asana Yoga",
    text: "A dynamic style of yoga that connects breath with movement in a continuous flow of poses Yoga is a wonderful practice",
    icon: "/assets/images/icons/theme-icon14.png",
  },
  {
    subtitle: "Quality Service",
    title: "Radiant Soul Yoga",
    text: "A dynamic style of yoga that connects breath with movement in a continuous flow of poses Yoga is a wonderful practice",
    icon: "/assets/images/icons/theme-icon15.png",
  },
  {
    subtitle: "Quality Service",
    title: "Tranquil Lotus Yoga",
    text: "A dynamic style of yoga that connects breath with movement in a continuous flow of poses Yoga is a wonderful practice",
    icon: "/assets/images/icons/theme-icon16.png",
  },
   {
    subtitle: "Quality Service",
    title: "Radiant Soul Yoga",
    text: "A dynamic style of yoga that connects breath with movement in a continuous flow of poses Yoga is a wonderful practice",
    icon: "/assets/images/icons/theme-icon15.png",
  },
  {
    subtitle: "Quality Service",
    title: "Aura Asana Yoga",
    text: "A dynamic style of yoga that connects breath with movement in a continuous flow of poses Yoga is a wonderful practice",
    icon: "/assets/images/icons/theme-icon14.png",
  },
  // add more services as needed
];

export default function ServicesSection13() {
  return (
    <section id="services" className="services-section13 pb-100">
      <div className="leaf-1 bounce-y">
        <img src="/assets/images/resource/about10-4.png" alt="" />
      </div>
      <div className="leaf-2 bounce-y">
        <img src="/assets/images/resource/about10-5.png" alt="" />
      </div>

      <div className="auto-container">
        <div className="outer-box">
          <div
            className="sec-title text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
          >
            <figure className="image">
              <img src="/assets/images/icons/icon1.png" alt="Icon" />
            </figure>
            <span className="sub-title">What We Do</span>
            <h2 className="words-slide-up text-split">Our Services</h2>
          </div>

          <div className="carousel-outer wow fadeInUp">
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={3}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="services-carousel13"
            >
              {servicesData.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="service-block13">
                    <div className="inner-box">
                      <div className="service-btn">
                        <Link className="btn" href="/page-service-details">
                          <i className="fa-sharp far fa-arrow-right"></i>
                        </Link>
                      </div>
                      <div className="content-box">
                        <div className="shape1">
                          <img src="/assets/images/icons/shape7-1.png" alt="" />
                        </div>
                        <div className="shape2">
                          <img src="/assets/images/icons/shape7-2.png" alt="" />
                        </div>
                        <div className="service-content">
                          <div className="subtitle">{service.subtitle}</div>
                          <h4 className="title">{service.title}</h4>
                          <div className="text">{service.text}</div>
                        </div>
                        <div className="thumb-icon">
                          <div
                            className="bg bg-image"
                            style={{
                              backgroundImage:
                                "url('/assets/images/resource/service-icon-bg.svg')",
                            }}
                          ></div>
                          <img
                            className="img-icon"
                            src={service.icon}
                            alt={service.title}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
