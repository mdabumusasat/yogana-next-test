"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSectionFour() {
  const testimonials = [
    {
      name: "Robert Fox",
      role: "Co Founder",
      text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id.",
    },
    {
      name: "Robert Fox",
      role: "Co Founder",
      text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id.",
    },
    {
      name: "Robert Fox",
      role: "Co Founder",
      text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id.",
    },
  ];

  const clientImages = [
    { src: "/assets/images/resource/client1.png", class: "client1 bounce-x" },
    { src: "/assets/images/resource/client2.png", class: "client2 bounce-y" },
    { src: "/assets/images/resource/client3.png", class: "client3 bounce-x" },
    { src: "/assets/images/resource/client4.png", class: "client4 bounce-x" },
    { src: "/assets/images/resource/client5.png", class: "client5 bounce-y" },
  ];

  return (
    <section id="testimonial" className="testimonial-section style-four pull-up">
      <div className="shape1 bounce-y">
        <Image src="/assets/images/icons/shape6-1.png" alt="" width={200} height={200} />
      </div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="title-stroke-text">Testimonials</div>
          <figure className="image">
            <Image src="/assets/images/icons/icon1.png" alt="Icon" width={60} height={60} />
          </figure>
          <span className="sub-title">Testimonial</span>
          <h2 className="words-slide-up text-split">What they say?</h2>
        </div>
        <div className="carousel-outer col-lg-8 offset-lg-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            className="testimonial-carousel-three">
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-block">
                  <div className="inner-box text-center">
                    <div className="rating">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <i key={idx} className="icon fa fa-star"></i>
                      ))}
                    </div>
                    <div className="text">“ {item.text} ”</div>
                    <div className="info-box">
                      <h4 className="name">{item.name} -</h4>
                      <span className="designation">{item.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Floating Client Images */}
        <div className="image-box">
          <figure className="image client1 bounce-x overlay-anim">
            <Link href="#"><img src="/assets/images/resource/client1.png" alt="Image"/></Link>
          </figure>
          <figure className="image client2 bounce-y overlay-anim">
            <Link href="#"><img src="/assets/images/resource/client2.png" alt="Image"/></Link>
          </figure>
          <figure className="image client3 bounce-x overlay-anim">
            <Link href="#"><img src="/assets/images/resource/client3.png" alt="Image"/></Link>
          </figure>
          <figure className="image client4 bounce-x overlay-anim">
            <Link href="#"><img src="/assets/images/resource/client4.png" alt="Image"/></Link>
          </figure>
          <figure className="image client5 bounce-y overlay-anim">
            <Link href="#"><img src="/assets/images/resource/client5.png" alt="Image"/></Link>
          </figure>
        </div>
        </div>
      </div>
    </section>
  );
}
