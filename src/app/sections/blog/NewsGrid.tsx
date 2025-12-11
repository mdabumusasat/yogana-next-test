import React from "react";
import Link from "next/link";

const blogData = [
  {
    img: "/assets/images/resource/blog5-1.jpg",
    category: "Trending",
    date: "Aug 20, 2025",
    title: "Spring is in the Air and So Our These Amazing Spa Offers",
    link: "/news-details",
  },
  {
    img: "/assets/images/resource/blog5-2.jpg",
    category: "Trending",
    date: "Aug 20, 2025",
    title: "We giving Amazing special spa and massage service for vip.",
    link: "/news-details",
  },
  {
    img: "/assets/images/resource/blog5-3.jpg",
    category: "Trending",
    date: "Aug 20, 2025",
    title: "Looks reasonable. The generate is therefore always.",
    link: "/news-details",
  },
  {
    img: "/assets/images/resource/blog6-1.jpg",
    category: "Trending",
    date: "Aug 20, 2025",
    title: "Looks reasonable. The generate is therefore always.",
    link: "/news-details",
  },
  {
    img: "/assets/images/resource/blog6-2.jpg",
    category: "Trending",
    date: "Aug 20, 2025",
    title: "Spring is in the Air and So Our These Amazing Spa Offers",
    link: "/news-details",
  },
  {
    img: "/assets/images/resource/blog5-3.jpg",
    category: "Trending",
    date: "Aug 20, 2025",
    title: "We giving Amazing special spa and massage service for vip.",
    link: "/news-details",
  },
];

export default function BlogSectionTwo() {
  return (
    <section className="blog-section-two">
      <div className="auto-container">
        <div className="row">
          {blogData.map((item, index) => (
            <div className="blog-block col-lg-4 col-md-6" key={index}>
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href={item.link}>
                        <img src={item.img} alt="Blog" />
                        <img src={item.img} alt="Blog" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                    <ul className="post-meta">
                        <li className="categories">
                        <Link href={item.link}>
                            {item.category}
                        </Link>
                        </li>
                        <li className="date">{item.date}</li>
                    </ul>
                    <h4 className="title">
                        <Link href={item.link}>
                        {item.title}
                        </Link>
                    </h4>
                    <Link href={item.link} className="read-more">
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
