'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus",
    name: "Robert Fox",
    designation: "Co Founder",
    rating: 5,
  },
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus",
    name: "Robert Fox",
    designation: "Co Founder",
    rating: 5,
  },
  {
    text: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus",
    name: "Robert Fox",
    designation: "Co Founder",
    rating: 5,
  },
];

const clientImages = [
  "/assets/images/resource/client2-1.png",
  "/assets/images/resource/client2-2.png",
  "/assets/images/resource/client2-3.png",
  "/assets/images/resource/client2-4.png",
  "/assets/images/resource/client2-5.png",
];

const StarRating = ({ count }: { count: number }) => (
  <div className="rating" aria-label={`${count} star rating`}>
    {Array.from({ length: count }).map((_, i) => (
      <i
        key={i}
        className="icon fa fa-star"
        aria-hidden="true"
      ></i>
    ))}
  </div>
);

const TestimonialSection = () => {
  return (
    <section
      className="testimonial-section style-four bg-white pt-120"
      aria-labelledby="testimonial-heading"
    >
      {/* Decorative shape */}
      <div className="shape1 bounce-y">
        <Image
          src="/assets/images/icons/shape6-1.png"
          alt="Decorative shape"
          width={100}
          height={100}
          priority
        />
      </div>

      <div className="auto-container">
        {/* Section title */}
        <div className="sec-title text-center">
          <figure className="image">
            <Image
              src="/assets/images/icons/icon1.png"
              alt="Testimonial icon"
              width={50}
              height={50}
              priority
            />
          </figure>
          <span className="sub-title">Testimonial</span>
          <h2 id="testimonial-heading" className="words-slide-up text-split">
            What they say?
          </h2>
        </div>

        {/* Swiper carousel */}
        <div className="carousel-outer col-lg-8 offset-lg-2">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            aria-label="testimonial carousel"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="testimonial-block">
                  <div className="inner-box text-center">
                    <StarRating count={testimonial.rating} />
                    <blockquote className="text">
                      “ {testimonial.text} ”
                    </blockquote>
                    <div className="info-box">
                      <h4 className="name">{testimonial.name} -</h4>
                      <span className="designation">
                        {testimonial.designation}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        <div className="image-box">
          <figure className="image client1 bounce-x overlay-anim">
            <Link href="#"><img src="/assets/images/resource/client2-1.png" alt="Image"/></Link>
          </figure>
          <figure className="image client2 bounce-y overlay-anim">
            <Link href="#"><img src="/assets/images/resource/client2-2.png" alt="Image"/></Link>
          </figure>
          <figure className="image client3 bounce-x overlay-anim">
            <Link href="#"><img src="/assets/images/resource/client2-3.png" alt="Image"/></Link>
          </figure>
          <figure className="image client4 bounce-x overlay-anim">
            <Link href="#"><img src="/assets/images/resource/client2-4.png" alt="Image"/></Link>
          </figure>
          <figure className="image client5 bounce-y overlay-anim">
            <Link href="#"><img src="/assets/images/resource/client2-5.png" alt="Image"/></Link>
          </figure>
        </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
