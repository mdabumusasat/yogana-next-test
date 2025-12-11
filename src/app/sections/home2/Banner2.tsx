"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const BannerSectionTwo = () => {
  return (
    <section className="banners-section-two pt-120">
      <div className="container">
        <div className="row">
          <div className="banner-box-two col-lg-6 col-md-12 wow fadeInLeft">
            <div className="inner-box overlay-anim">
              <div className="image">
                <Image
                  src="/assets/images/resource/banner1-1.jpg"
                  alt="Yoga Style"
                  width={600}
                  height={500}
                />
              </div>
              <div className="content">
                <h3 className="title">Yoga Style</h3>
                <div className="text">
                  Yoga is a wonderful practice that combines physical postures
                </div>
                <Link href="/page-contact" className="theme-btn btn-style-two">
                  <span className="btn-title">Book Now</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="banner-box-two col-lg-6 col-md-12 wow fadeInRight">
            <div className="inner-box style-two overlay-anim">
              <div className="image">
                <Image
                  src="/assets/images/resource/banner1-2.jpg"
                  alt="Yoga Pose"
                  width={600}
                  height={500}
                />
              </div>
              <div className="content">
                <h3 className="title">Yoga Pose</h3>
                <div className="text">
                  There are many yoga poses, each with its own
                </div>
                <Link href="/page-contact" className="theme-btn btn-style-two">
                  <span className="btn-title">Book Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSectionTwo;
