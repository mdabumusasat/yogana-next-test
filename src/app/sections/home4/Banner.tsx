"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const slides = [
  {
    subTitle: "Welcome to yogana",
    title: "Breathe Stretch Thrive Yoga for Your Life.",
    text: "Yoga is an ancient practice that originated in India, encompassing physical  <br>mental, and spiritual disciplines aimed at achieving",
    btnLink: "/page-about",
    btnLink2: "/page-contact",
    btnText: "Read More",
    btnText2: "Contact us",
  },
  {
    subTitle: "Welcome to yogana",
    title: "Breathe Stretch Thrive Yoga for Your Life.",
    text: "Yoga is an ancient practice that originated in India, encompassing physical  <br>mental, and spiritual disciplines aimed at achieving",
    btnLink: "/page-about",
    btnLink2: "/page-contact",
    btnText: "Read More",
    btnText2: "Contact us",
  },
  {
    subTitle: "Welcome to yogana",
    title: "Breathe Stretch Thrive Yoga for Your Life.",
    text: "Yoga is an ancient practice that originated in India, encompassing physical  <br>mental, and spiritual disciplines aimed at achieving",
    btnLink: "/page-about",
    btnLink2: "/page-contact",
    btnText: "Read More",
    btnText2: "Contact us",
  },
];

export default function BannerFour() {
  return (
    <section className="banner-section-seven">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 3500 }}
        className="banner-carousel-seven">
          {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-item">
            <div className="inner-container">
              <div className="row g-0">
                <div className="content-box col-lg-6">
                  <div className="anim-icons">
                    <img className="img-1 bounce-y" src="/assets/images/banner/banner7-2.png" alt="Image" />
                    <img className="img-2 bounce-x" src="/assets/images/banner/banner7-3.png" alt="Image" />
                  </div>
                  <span className="sub-title animate-2">{slide.subTitle}</span>
                  <h1 className="title animate-3"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                  <p className="text animate-4" dangerouslySetInnerHTML={{ __html: slide.text }}
                  />
                  <div className="btn-box animate-5">
                    <Link href={slide.btnLink} className="theme-btn btn-style-one">
                      <span className="btn-title">{slide.btnText}</span>
                    </Link>
                    <Link href={slide.btnLink2} className="theme-btn btn-style-transparent">
                      <span className="btn-title">{slide.btnText2}</span>
                    </Link>
                  </div>
                </div>
                <div className="image-box col-lg-6">
                  <figure className="image mb-0">
                    <img src="/assets/images/banner/banner7-1.jpg" alt="Banner" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
