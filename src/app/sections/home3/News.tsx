"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const blogData = [
  {
    img: "/assets/images/resource/blog1-1.jpg",
    date: "Aug 20, 2025",
    title: "Spring Has Arrived, and So Have Our Incredible Yoga Deals!",
  },
  {
    img: "/assets/images/resource/blog1-2.jpg",
    date: "Sep 30, 2025",
    title: "Yoga Asanas to Soothe the Mind and Alleviate Stress",
  },
  {
    img: "/assets/images/resource/blog1-3.jpg",
    date: "Jun 22, 2025",
    title: "Top Yoga Poses for Effective Backache and Pain Relief",
  },
  {
    img: "/assets/images/resource/blog1-1.jpg",
    date: "Aug 20, 2025",
    title: "Amazing Spa Offers This Spring Season",
  },
  {
    img: "/assets/images/resource/blog1-2.jpg",
    date: "Aug 20, 2025",
    title: "Special Spa & Massage Services for VIP Clients",
  },
  {
    img: "/assets/images/resource/blog1-3.jpg",
    date: "Aug 20, 2025",
    title: "Looks reasonable. The generate is therefore always.",
  },
];

const BlogSection = () => {
  return (
    <section id="news" className="blog-section style-two">
      <div className="auto-container">
        {/* Section Title */}
        <div className="sec-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
          <figure className="image">
            <Image src="/assets/images/icons/icon1.png" width={40} height={47} alt="Icon" />
          </figure>
          <span className="sub-title">Blogs</span>
          <h2 className="words-slide-up text-split">News & Articles</h2>
        </div>

        <div className="carousel-outer wow fadeInUp">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            className="blog-carousel"
          >
            {blogData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="blog-block mb-0">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="/news-details">
                          <Image src={item.img} width={400} height={300} alt="Blog" />
                          <Image src={item.img} width={400} height={300} alt="Blog" />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <ul className="post-meta">
                        <li className="categories">
                          <a href="/news-details">Trending</a>
                        </li>
                        <li className="date">{item.date}</li>
                      </ul>
                      <h4 className="title">
                        <Link href="/news-details">{item.title}</Link>
                      </h4>
                      <Link className="read-more" href="/news-details">
                        Read More <i className="icon fa-regular fa-angle-right"></i>
                      </Link>
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

export default BlogSection;
