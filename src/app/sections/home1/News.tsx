"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const blogPosts = [
  {
    id: 1,
    image: "/assets/images/resource/blog1-1.jpg",
    category: "Trending",
    date: "Aug 20, 2025",
    title: "Spring Has Arrived, and So Have Our Incredible Yoga Deals!",
    link: "/news-details",
  },
  {
    id: 2,
    image: "/assets/images/resource/blog1-2.jpg",
    category: "Trending",
    date: "Sep 30, 2025",
    title: "Yoga Asanas to Soothe the Mind and Alleviate Stress",
    link: "/news-details",
  },
  {
    id: 3,
    image: "/assets/images/resource/blog1-3.jpg",
    category: "Trending",
    date: "Jun 22, 2025",
    title: "Top Yoga Poses for Effective our Backache and Pain Relief",
    link: "/news-details",
  },
  {
    id: 4,
    image: "/assets/images/resource/blog1-1.jpg",
    category: "Trending",
    date: "Aug 20, 2025",
    title: "Spring Has Arrived, and So Have Our Incredible Yoga Deals!",
    link: "/news-details",
  },
  {
    id: 5,
    image: "/assets/images/resource/blog1-2.jpg",
    category: "Trending",
    date: "Sep 30, 2025",
    title: "Yoga Asanas to Soothe the Mind and Alleviate Stress",
    link: "/news-details",
  },
   {
    id: 6,
    image: "/assets/images/resource/blog1-3.jpg",
    category: "Trending",
    date: "Jun 22, 2025",
    title: "Top Yoga Poses for Effective our Backache and Pain Relief",
    link: "/news-details",
  },
];

export default function BlogSection() {
  return (
    <section id="news" className="blog-section bg-f7f4">
      <div className="auto-container">
        <div className="sec-title text-center">
          <figure className="image">
            <Image
              src="/assets/images/icons/icon1.png"
              width={47}
              height={45}
              alt="Icon"/>
          </figure>
          <span className="sub-title">Blogs</span>
          <h2 className="words-slide-up text-split">News & Articles</h2>
        </div>
        <div className="carousel-outer">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}>
            {blogPosts.map((post) => (
                <SwiperSlide key={post.id}>
                    <div className="blog-block mb-0">
                    <div className="inner-box">
                        <div className="image-box">
                        <Link href={post.link}>
                            <Image
                            src={post.image}
                            width={400}
                            height={250}
                            alt={post.title}
                            />
                        </Link>
                        </div>
                        <div className="content-box">
                        <ul className="post-meta">
                            <li className="categories">
                            <Link href={post.link}>{post.category}</Link>
                            </li>
                            <li className="date">{post.date}</li>
                        </ul>
                        <h4 className="title">
                            <Link href={post.link}>{post.title}</Link>
                        </h4>
                        <Link className="read-more" href={post.link}>
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
}
