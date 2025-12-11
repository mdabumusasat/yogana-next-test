"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    mainImage: "/assets/images/banner/banner8-1.png",
    shapeImage: "/assets/images/main-slider/slide3-2.png",
    titleStroke: "YOGANA",
    subtitle: "Experience Top Expert Services",
    title: "Yoga connecting body <br/>Mind, and spirit",
    text: "At Yogana, we believe in celebrating your beauty, and we are sure you'll <br/>fall in love with the serene and luxurious experience we’ve <br/>just crafted for your time now offer",
    btnLink: "/page-contact",
    btnText: "Book Now",
  },
];

const BannerSectionEight = () => {
  return (
    <section className="banner-section-eight">
      <div className="shape-image-curve"></div>
      <div className="shape-image-leaf bounce-y"></div>
      <div className="shape-image-leaf2 bounce-y"></div>

      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="banner-carousel-one">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="auto-container">
              <div className="row">
                <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="image-box">
                    <figure className="image">
                      <div className="fadeInUpBig">
                        <div className="round-shape"></div>
                      </div>
                      <Image
                        className="animate-3"
                        src={slide.mainImage}
                        alt="Banner Image"
                        width={600}
                        height={600}
                      />
                    </figure>
                  </div>
                </div>
                <div className="content-box col-xl-5 col-lg-6 col-md-12 col-sm-12">
                  <figure className="image-shape animate-4 animate-x bounce-x">
                    <Image
                      src={slide.shapeImage}
                      alt="Shape Image"
                      width={150}
                      height={150}
                    />
                  </figure>
                  <div
                    className="title-stroke-text fadeInUpBig"
                    dangerouslySetInnerHTML={{ __html: slide.titleStroke }}
                  />
                  <span className="sub-title animate-2">{slide.subtitle}</span>
                  <h1
                    className="title animate-3"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                  <div
                    className="text animate-4"
                    dangerouslySetInnerHTML={{ __html: slide.text }}
                  />
                  <div className="btn-box animate-5">
                    <Link href={slide.btnLink} className="theme-btn btn-style-one">
                      <span className="btn-title">{slide.btnText}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSectionEight;
