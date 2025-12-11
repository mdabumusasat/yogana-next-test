"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  {
    subTitle: "Welcome to yogana",
    title: "Feel the Flow <br>with Yoga",
    btnLink: "/page-about",
    btnText: "Discover More",
    img1: "/assets/images/banner/banner6-1.png",
    img2: "/assets/images/banner/banner6-2.png",
  },
  {
    subTitle: "Welcome to yogana",
    title: "Feel the Flow <br>with Yoga",
    btnLink: "/page-about",
    btnText: "Discover More",
    img1: "/assets/images/banner/banner6-1.png",
    img2: "/assets/images/banner/banner6-2.png",
  },
  {
    subTitle: "Welcome to yogana",
    title: "Feel the Flow <br>with Yoga",
    btnLink: "/page-about",
    btnText: "Discover More",
    img1: "/assets/images/banner/banner6-1.png",
    img2: "/assets/images/banner/banner6-2.png",
  },
];

export default function BannerSix() {
  return (
    <section className="banner-section-six">
      <div className="anim-icons">
        <Image className="img-1 bounce-y" src="/assets/images/banner/banner6-3.png" alt="" width={100} height={100} />
        <Image className="img-2 bounce-x" src="/assets/images/banner/banner6-4.png" alt="" width={100} height={100} />
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="auto-container">
              <div className="inner-container">
                <div className="content-box">
                  <span className="sub-title animate-2">{slide.subTitle}</span>
                  <h1
                    className="title animate-3"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                  <div className="btn-box animate-4">
                    <Link href={slide.btnLink} className="theme-btn btn-style-one">
                      <span className="btn-title">{slide.btnText}</span>
                    </Link>
                  </div>
                </div>

                <figure className="image">
                  <div className="fadeInUpBig">
                    <div className="round-shape"></div>
                  </div>
                  <Image className="animate-2" src={slide.img1} alt="" width={600} height={400} />
                </figure>

                <figure className="image-two bounce-y">
                  <Image className="animate-5" src={slide.img2} alt="" width={400} height={400} />
                </figure>
                <div className="title-stroke-text2 animate-5">yogana</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
