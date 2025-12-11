"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    img: "/assets/images/resource/testi-3.jpg",
    pattern: "/assets/images/resource/testi-pattern-1.png",
    leaf: "/assets/images/resource/testi-leaf-1.png",
    name: "Angelina Margret",
    designation: "Customer",
    text: "Our beauty salon offers a wide range of services to cater to your beauty needs from head to toe. Treat your tresses to a stylish haircut, colour, or timeline highlights that perfectly complement your features Rejuvenate your skin customized facials.",
    rating: 5,
  },
  {
    img: "/assets/images/resource/testi-4.jpg",
    pattern: "/assets/images/resource/testi-pattern-1.png",
    leaf: "/assets/images/resource/testi-leaf-1.png",
    name: "Angelina Margret",
    designation: "Customer",
    text: "Our beauty salon offers a wide range of services to cater to your beauty needs from head to toe. Treat your tresses to a stylish haircut, colour, or timeline highlights that perfectly complement your features Rejuvenate your skin customized facials.",
    rating: 5,
  },
  {
    img: "/assets/images/resource/testi-3.jpg",
    pattern: "/assets/images/resource/testi-pattern-1.png",
    leaf: "/assets/images/resource/testi-leaf-1.png",
    name: "Angelina Margret",
    designation: "Customer",
    text: "Our beauty salon offers a wide range of services to cater to your beauty needs from head to toe. Treat your tresses to a stylish haircut, colour, or timeline highlights that perfectly complement your features Rejuvenate your skin customized facials.",
    rating: 5,
  },
];

export default function TestimonialSectionThree() {
  return (
    <section id="testimonial" className="testimonial-section-three pt-120 pb-90">
      <div className="auto-container">
        <div className="sec-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
          <figure className="image">
            <img src="/assets/images/icons/icon1.png" alt="Image" />
          </figure>
          <span className="sub-title">Testimonial</span>
          <h2 className="words-slide-up text-split">What they say?</h2>
        </div>
        <div className="carousel-outer col-lg-12 wow fadeInUp">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-block-three">
                  <div className="inner-box">
                    <img className="img-1 bounce-y" src={item.pattern} alt="" />
                    <img className="img-2 bounce-x" src={item.leaf} alt="" />
                    <span className="icon bounce-y fa fa-quote-right"></span>
                    <figure className="thumb">
                      <img src={item.img} alt="" />
                    </figure>
                    <div className="info-box">
                      <div className="rating">
                        {[...Array(item.rating)].map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                      </div>
                      <div className="text">{item.text}</div>
                      <h4 className="name">{item.name}</h4>
                      <span className="designation">{item.designation}</span>
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
}
