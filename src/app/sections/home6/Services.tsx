"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

const serviceBg = "/assets/images/resource/service6-1.jpg";
const serviceOverlay = "/assets/images/resource/service1-2.png";

const services = [
  { title: "Meditation", icon: "/assets/images/icons/theme-icon5.png", link: "/page-service-details" },
  { title: "Aroma Therapy", icon: "/assets/images/icons/theme-icon6.png", link: "/page-service-details" },
  { title: "Yoga", icon: "/assets/images/icons/theme-icon7.png", link: "/page-service-details" },
  { title: "Sound Therapy", icon: "/assets/images/icons/theme-icon8.png", link: "/page-service-details" },
  { title: "Sauna Relax", icon: "/assets/images/icons/theme-icon5.png", link: "/page-service-details" },
  { title: "Face Treatments", icon: "/assets/images/icons/theme-icon6.png", link: "/page-service-details" },
  { title: "Make-up", icon: "/assets/images/icons/theme-icon7.png", link: "/page-service-details" },
  { title: "Thai Massage", icon: "/assets/images/icons/theme-icon8.png", link: "/page-service-details" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section pt-120">
      <div className="auto-container">
        <div className="outer-box">
          <div className="sec-title">
            <div className="row">
              <div className="col-xl-6">
                <span className="sub-title">Services list</span>
                <h2 className="words-slide-up text-split">
                  Yoga the art of living in Harmony
                </h2>
              </div>
              <div className="col-xl-5 offset-xl-1">
                <div className="text">
                  Proin efficitur mauris vel condimentum pulvinar velit orci
                  consectetur ligula eget egestas magna your time arcu.
                </div>
              </div>
            </div>
          </div>
          <Swiper
            modules={[Pagination, Autoplay, Scrollbar]}
            spaceBetween={30}
            slidesPerView={4}
            loop={false}
            scrollbar={{ draggable: true }}
            pagination={false}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 30 },
              1200: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="service-swiper">
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <div className="service-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <div
                        className="bg-image"
                        style={{ backgroundImage: `url(${serviceBg})` }}
                      ></div>
                      <div
                        className="bg-image-two"
                        style={{ backgroundImage: `url(${serviceOverlay})` }}
                      ></div>
                    </div>
                    <div className="content-box">
                      <figure className="icon mb-0">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={64}
                          height={64}
                        />
                      </figure>
                      <h4 className="title">
                        <Link href={service.link}>{service.title}</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
