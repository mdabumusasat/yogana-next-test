"use client";

import React from "react";

export default function AboutSectionEight() {
  return (
    <section className="about-section-eight bg-white pt-120">
      <div className="anim-icons bounce-y">
        <img src="/assets/images/resource/about11-3.png" alt="" />
      </div>

      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-7 wow fadeInRight">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Get to know us</span>
                  <h2 className="words-slide-up">
                    Living an outstanding & <br className="d-none d-xl-block" />
                    unique through yoga.
                  </h2>
                </div>

                <div className="row">
                  {/* Image Box */}
                  <div className="image-box mb-5 mb-lg-0 col-md-5">
                    <div className="inner-box">
                      <figure className="image mb-0 overlay-anim">
                        <img src="/assets/images/resource/about11-2.jpg" alt="Image" />
                      </figure>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="content-box mb-5 mb-md-0 col-md-7">
                    <div className="inner-box">
                      <div className="text">
                        Yoga is an ancient practice that originated in India,
                        encompassing physical, mental, and spiritual disciplines
                        aimed at achieving harmony between the body and mind. 
                        The word yoga comes from the Sanskrit root "yuj" which
                        means to yoke. These are the poses commonly associated
                        with yoga designed to improve flexibility, strength, and
                        balance practices.
                      </div>
                      <div className="exp-box">
                        <div className="inner">
                          <h2 className="title" data-text="35">
                            35 <span>+</span>
                          </h2>
                          <span className="text">Years of <br />Experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="image-column col-lg-5 wow fadeInLeft">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image mb-0 overlay-anim">
                    <img src="/assets/images/resource/about11-1.jpg" alt="Image" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
