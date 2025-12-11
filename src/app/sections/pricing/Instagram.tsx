"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/assets/images/resource/instagram1-1.jpg",
  "/assets/images/resource/instagram1-2.jpg",
  "/assets/images/resource/instagram1-3.jpg",
  "/assets/images/resource/instagram1-1.jpg",
  "/assets/images/resource/instagram1-4.jpg",
  "/assets/images/resource/instagram1-5.jpg",
];

const InstagramSection = () => {
  return (
    <section className="instagram-section">
      <div className="icon-instagram1-6 bounce-x"></div>
      <div className="icon-instagram1-7 bounce-y"></div>

      <div className="auto-container">
        <div className="sec-title text-center">
          <h4 className="words-slide-up text-split">Follow On Instagram</h4>
        </div>

        <div className="row">
          {images.map((src, index) => (
            <div
              className="instagram-block col-lg-2 col-md-3 col-sm-6"
              key={index}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <Image
                        src={src}
                        alt={`Instagram ${index + 1}`}
                        width={300}
                        height={300}
                        className="w-100"
                      />
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
