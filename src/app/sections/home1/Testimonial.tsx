"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Jenny Wilson",
    designation: "Business Owner",
    rating: 5,
    text: `“Yogadotcalm is a warm, welcoming environment with knowledgeable teachers within a friendly community. I've developed my practice by attending a range of classes, but more importantly.”`,
  },
  {
    id: 2,
    name: "Robert Fox",
    designation: "Co Founder",
    rating: 5,
    text: `“Yogadotcalm is a warm, welcoming environment with knowledgeable teachers within a friendly community. I've developed my practice by attending a range of classes, but more importantly.”`,
  },
  {
    id: 3,
    name: "Robert Wilson",
    designation: "Co Founder",
    rating: 5,
    text: `“Yogadotcalm is a warm, welcoming environment with knowledgeable teachers within a friendly community. I've developed my practice by attending a range of classes, but more importantly.”`,
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-style-four">
      <div
        className="bg bg-image wow fadeInRight"
        style={{
          backgroundImage: "url(/assets/images/resource/testi1-bg1.jpg)",
        }}
      ></div>
      <div className="outer-box wow fadeInLeft">
        <div
          className="bg bg-image"
          style={{
            backgroundImage: "url(/assets/images/resource/testi1-bg2.jpg)",
          }}
        ></div>
        <div className="sec-title text-center">
          <figure className="image">
            <img src="/assets/images/icons/icon1.png" alt="Icon" />
          </figure>
          <span className="sub-title">Testimonial</span>
          <h2 className="words-slide-up text-split">What they say?</h2>
        </div>
        <div className="carousel-outer">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            className="testimonial-carousel">
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-block">
                  <div className="inner-box text-center">
                    <div className="rating">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <i key={i} className="icon fa fa-star"></i>
                      ))}
                    </div>
                    <div className="text">{item.text}</div>
                    <div className="info-box">
                      <h4 className="name">{item.name} -</h4>
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
};
export default Testimonial;
