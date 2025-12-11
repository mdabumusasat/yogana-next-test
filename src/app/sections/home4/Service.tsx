"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const services = [
  {
    img: "/assets/images/resource/service10-1.png",
    icon: "/assets/images/icons/icon-service10.png",
    title: "Blissful Balance <br />Yoga",
  },
  {
    img: "/assets/images/resource/service10-2.png",
    icon: "/assets/images/icons/icon-service11.png",
    title: "Sacred Sanctuary <br />Yoga",
  },
  {
    img: "/assets/images/resource/service10-3.png",
    icon: "/assets/images/icons/icon-service12.png",
    title: "Tranquil Lotus <br />Yoga",
  },
  {
    img: "/assets/images/resource/service10-2.png",
    icon: "/assets/images/icons/icon-service11.png",
    title: "Sacred Sanctuary <br />Yoga",
  },
];

export default function ServicesSectionTen() {
  return (
    <section id="services" className="services-section-ten pull-up">
      <div
        className="bg bg-image-four"
        style={{ backgroundImage: "url(/assets/images/background/bg-service3.png)" }}
      ></div>
      {/* Decoration */}
      <div className="leaf-1 bounce-y">
        <Image src="/assets/images/resource/service-leaf1-1.png" alt="" width={120} height={120} />
      </div>
      <div className="leaf-2 bounce-y">
        <Image src="/assets/images/resource/service-leaf1-2.png" alt="" width={120} height={120} />
      </div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="sec-title text-center wow fadeInUp">
            <div className="title-stroke">Services</div>
            <figure className="image">
              <Image src="/assets/images/icons/icon1.png" alt="Icon" width={47} height={45} />
            </figure>
            <span className="sub-title">What We Do</span>
            <h2 className="words-slide-up text-split">Our Services</h2>
          </div>
          {/* Navigation Buttons */}
          <div className="swiper-nav">
            <div className="services-prev"><i className="fa fa-angle-left"></i></div>
            <div className="services-next"><i className="fa fa-angle-right"></i></div>
          </div>
          <div className="carousel-outer wow fadeInUp">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{ delay: 3000 }}
              loop={true}
              navigation={{
                nextEl: ".owl-next",
                prevEl: ".owl-prev",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              className="services-carousel-ten">
              {services.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="service-block-ten">
                    <div className="inner-box">
                      <figure className="image mb-0">
                        <Image src={item.img} alt="Service" width={400} height={350} />
                      </figure>
                      <div className="shape-btn">
                        <svg
                          width="160"
                          height="160"
                          viewBox="0 0 160 97"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M18.1574 20.5622C18.5298 6.25806 6.20765 0.894009 0 0H142V97C138.648 83.4111 126.769 80.6098 121.248 80.9078H35.3836C22.3475 80.1926 18.4678 69.8817 18.1574 64.8157C18.0022 56.0246 17.7849 34.8664 18.1574 20.5622Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="service-btn">
                        <Link href="/page-service-details" className="btn">
                          <i className="fa-sharp far fa-arrow-right"></i>
                        </Link>
                      </div>
                      <div className="service-content">
                        <div className="thumb-icon">
                          <Image src={item.icon} alt="Icon" width={60} height={60} />
                        </div>
                        <h4
                          className="title"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="text-bottom">
            <div className="inner-text">
              You get more services <Link href="/page-services">Explore Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
