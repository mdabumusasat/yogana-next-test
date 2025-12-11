"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id.",
    name: "Robert Fox -",
    designation: "Co Founder",
  },
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id.",
    name: "Robert Fox -",
    designation: "Co Founder",
  },
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id.",
    name: "Robert Fox -",
    designation: "Co Founder",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonial" className="testimonial-section pt-0">
      <div className="shape2 bounce-x">
        <Image
          src="/assets/images/icons/shape6-2.png"
          alt="Shape Icon"
          width={180}
          height={180}
        />
      </div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <figure className="image">
            <Image
              src="/assets/images/icons/icon1.png"
              alt="Icon"
              width={47}
              height={45}
            />
          </figure>
          <span className="sub-title">Testimonial</span>
          <h2 className="words-slide-up text-split">What they say?</h2>
        </div>
        <div className="carousel-outer col-lg-8 offset-lg-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="testimonial-carousel-three">
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
                      <h4 className="name">{item.name}</h4>
                      <span className="designation">
                        {item.designation}
                      </span>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="image-box">
            <figure className="image client1 bounce-x overlay-anim">
              <Image
                src="/assets/images/resource/client1.png"
                alt="Client"
                width={100}
                height={100}
              />
            </figure>
            <figure className="image client2 bounce-y overlay-anim">
              <Image
                src="/assets/images/resource/client2.png"
                alt="Client"
                width={100}
                height={100}
              />
            </figure>
            <figure className="image client3 bounce-x overlay-anim">
              <Image
                src="/assets/images/resource/client3.png"
                alt="Client"
                width={100}
                height={100}
              />
            </figure>
            <figure className="image client4 bounce-x overlay-anim">
              <Image
                src="/assets/images/resource/client4.png"
                alt="Client"
                width={100}
                height={100}
              />
            </figure>
            <figure className="image client5 bounce-y overlay-anim">
              <Image
                src="/assets/images/resource/client5.png"
                alt="Client"
                width={100}
                height={100}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
