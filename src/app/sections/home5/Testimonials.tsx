"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const testimonials = [
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus",
    name: "Robert Fox",
    designation: "Co Founder",
  },
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus",
    name: "Robert Fox",
    designation: "Co Founder",
  },
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus",
    name: "Robert Fox",
    designation: "Co Founder",
  },
];

const clientImages = [
  "/assets/images/resource/client2-1.png",
  "/assets/images/resource/client2-2.png",
  "/assets/images/resource/client2-3.png",
  "/assets/images/resource/client2-4.png",
  "/assets/images/resource/client2-5.png",
];

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="testimonial-section style-four pt-120">
      <div className="shape1 bounce-y">
        <img src="/assets/images/icons/shape6-1.png" alt="Shape" />
      </div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <figure className="image">
            <img src="/assets/images/icons/icon1.png" alt="Icon" />
          </figure>
          <span className="sub-title">Testimonial</span>
          <h2 className="words-slide-up text-split">What they say?</h2>
        </div>
        <div className="carousel-outer col-lg-8 offset-lg-2">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-block">
                  <div className="inner-box text-center">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="icon fa fa-star"></i>
                      ))}
                    </div>
                    <div className="text">“ {item.text} ”</div>
                    <div className="info-box">
                      <h4 className="name">{item.name} -</h4>
                      <span className="designation">{item.designation}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Client Images */}
          <div className="image-box">
            {clientImages.map((client, idx) => (
              <figure
                key={idx}
                className={`image client${idx + 1} bounce-x overlay-anim`}
              >
                <Link href="#">
                  <img src={client} alt={`Client ${idx + 1}`} />
                </Link>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
