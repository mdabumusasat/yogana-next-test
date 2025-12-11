"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSectionSix = () => {
  const listItems = [
    "Velit orci consectetur ligula, eget egestas magner time over",
    "Pelit orci consectetur ligula time of money of you.",
    "Eget egestas magn over the year of time.",
  ];

  return (
    <section id="about" className="about-section-six pb-sm-40 pb-lg-70 pb-150 pt-50">
      <div className="anim-icons bounce-y">
        <Image
          src="/assets/images/resource/about9-4.png"
          alt=""
          width={120}
          height={120}
        />
      </div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="row align-items-center">
            <div className="image-column col-xl-6 col-lg-6 wow fadeInLeft">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image mb-0 overlay-anim">
                    <Image
                      src="/assets/images/resource/about9-1.jpg"
                      alt="About Image"
                      width={550}
                      height={550}
                    />
                  </figure>
                  <figure className="image-2 mb-0 overlay-anim bounce-y">
                    <Image
                      src="/assets/images/resource/about9-2.jpg"
                      alt="About Image"
                      width={350}
                      height={350}
                    />
                  </figure>
                  <div
                    className="bg bg-image-one bounce-x"
                    style={{
                      backgroundImage: `url(/assets/images/resource/about9-3.png)`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="content-column col-xl-6 ps-3 ps-lg-6 col-lg-6 wow fadeInRight">
              <div className="inner-column">
                <div className="sec-title mb-0">
                  <span className="sub-title">Get to know us</span>

                  <h2 className="words-slide-up">
                    Living an outstanding & <br />
                    unique through yoga.
                  </h2>
                  <div className="text">
                    Yoga is an ancient practice that combines physical postures,
                    breathing techniques, meditation, and mindfulness to promote
                    overall well-being It aims to create harmony between the
                    body,
                  </div>
                </div>
                <ul className="list-style">
                  {listItems.map((item, index) => (
                    <li key={index}>
                      <figure className="icon">
                        <Image
                          src="/assets/images/icons/theme-icon4.png"
                          alt="Icon"
                          width={18}
                          height={18}
                        />
                      </figure>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="author-box">
                  <div className="inner d-block d-sm-flex">
                    <Link
                      href="/page-about"
                      className="theme-btn btn-style-two btn pricing-btn mb-4 mb-sm-0">
                      <span className="btn-title">Know more</span>
                    </Link>
                    <figure className="thumb">
                      <Image
                        src="/assets/images/resource/about1-2.png"
                        alt="Thumb"
                        width={80}
                        height={80}
                      />
                    </figure>
                    <div className="info">
                      <div className="sign">
                        <Image
                          src="/assets/images/resource/about-sign1.png"
                          alt="Signature"
                          width={130}
                          height={60}
                        />
                      </div>
                      <div className="name">
                        Michale – <span className="designation">Co Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionSix;
