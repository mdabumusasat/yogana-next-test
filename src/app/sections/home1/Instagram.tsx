"use client";
import React from "react";
import Link from "next/link";
const instagramImages = [
  { id: 1, img: "/assets/images/resource/instagram1-1.jpg" },
  { id: 2, img: "/assets/images/resource/instagram1-2.jpg" },
  { id: 3, img: "/assets/images/resource/instagram1-3.jpg" },
  { id: 4, img: "/assets/images/resource/instagram1-4.jpg" },
  { id: 5, img: "/assets/images/resource/instagram1-5.jpg" },
  { id: 6, img: "/assets/images/resource/instagram1-6.jpg" },
];

const InstagramSection = () => {
  return (
    <section className="instagram-section bg-f7f4">
      <div className="icon-shape1 bounce-y"></div>
      <div className="icon-shape2 bounce-y"></div>
      <div className="auto-container">
        <div className="sec-title text-center wow fadeInUp">
          <h4 className="words-slide-up text-split">Follow On Instagram</h4>
        </div>
        <div className="row wow fadeInUp">
          {instagramImages.map((item) => (
            <div key={item.id} className="instagram-block col-lg-2 col-md-3 col-sm-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link className="lightbox-image" href={item.img}>
                      <img src={item.img} alt="Instagram" />
                    </Link>
                  </figure>
                  <i className="icon fab fa-instagram"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
