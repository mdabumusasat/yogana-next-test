"use client";

import React from "react";
import Link from "next/link";

const AboutSectionTen = () => {
  return (
    <section id="about" className="about-section-ten">
      <div className="shape1 bounce-y">
        <img src="/assets/images/resource/about12-3.png" alt="Decorative Shape" />
      </div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            <div className="col-lg-5 wow fadeInRight">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Get to know us</span>
                  <h2 className="title words-slide-up">
                    outstanding Service & unique yoga.
                  </h2>
                  <div className="text">
                    Yoga is an ancient practice that combines physical postures,
                    breathing techniques, meditation, and mindfulness to promote
                    overall well-being. It aims to create harmony.
                  </div>
                </div>
                <Link
                  href="/page-about"
                  className="theme-btn btn-style-two btn pricing-btn">
                  <span className="btn-title">Know More</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInLeft">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim mb-0">
                    <img src="/assets/images/resource/about12-1.jpg" alt="Yoga Pose" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-3 wow fadeInLeft">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim mb-0">
                    <img src="/assets/images/resource/about12-2.jpg" alt="Yoga Pose" />
                  </figure>
                  <figure className="image-1 bounce-z mb-0">
                    <img src="/assets/images/icons/icon-text-4.png" alt="Icon" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTen;
