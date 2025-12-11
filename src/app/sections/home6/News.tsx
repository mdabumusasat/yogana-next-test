import React from "react";
import Link from "next/link";

const blogData = [
  {
    img: "/assets/images/resource/blog6-1.jpg",
    category: "Trending",
    date: "Aug 20, 2025",
    title: "Spring is in the Air and So Our These Amazing Spa Offers",
    delay: ".3s",
  },
  {
    img: "/assets/images/resource/blog6-2.jpg",
    category: "Trending",
    date: "Aug 20, 2025",
    title: "We giving Amazing special spa and message service for vip.",
    delay: ".5s",
  },
  {
    img: "/assets/images/resource/blog5-3.jpg",
    category: "Trending",
    date: "Aug 20, 2025",
    title: "Looks reasonable. The generate is therefore always.",
    delay: ".5s",
  },
];

export default function BlogSectionTwo() {
  return (
    <section id="news" className="blog-section-two">
      <div className="auto-container">
        <div className="sec-title text-center wow fadeInUp">
          <figure className="image">
            <img src="/assets/images/icons/icon1.png" alt="Image" />
          </figure>
          <span className="sub-title">Blogs</span>
          <h2 className="words-slide-up text-split">News & Articles</h2>
        </div>
        <div className="row">
          {blogData.map((blog, i) => (
            <div
              key={i}
              className={`blog-block col-lg-4 col-md-6 wow ${
                i === 2 ? "fadeInRight" : "fadeInLeft"
              }`}
              data-wow-delay={blog.delay}>
              <div className="inner-box">
                {/* Image Box */}
                <div className="image-box">
                  <figure className="image">
                    <Link href="/news-details">
                      <img src={blog.img} alt="Image" />
                      <img src={blog.img} alt="Image" />
                    </Link>
                  </figure>
                </div>
                {/* Content Box */}
                <div className="content-box">
                  <ul className="post-meta">
                    <li className="categories">
                      <Link href="/news-details">{blog.category}</Link>
                    </li>
                    <li className="date">{blog.date}</li>
                  </ul>
                  <h4 className="title">
                    <Link href="/news-details">{blog.title}</Link>
                  </h4>
                  <Link className="read-more" href="/news-details">
                    Read More <i className="icon fa-regular fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
