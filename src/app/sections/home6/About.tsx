import React from "react";
import Link from "next/link";

const AboutSectionEleven = () => {
  return (
    <section id="about" className="about-section-eleven">
      <div className="shape1 bounce-y">
        <img src="/assets/images/resource/about13-3.png" alt="Shape 1" />
      </div>
      <div className="shape2 bounce-x">
        <img src="/assets/images/resource/about13-4.png" alt="Shape 2" />
      </div>
      <div className="shape3 bounce-x">
        <img src="/assets/images/resource/about13-5.png" alt="Shape 3" />
      </div>
      <div className="large-container">
        <div className="outer-box">
          <div className="row">
            <div className="content-column col-lg-6 order-lg-2 wow fadeInRight">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Get to know us</span>
                  <h2 className="title words-slide-up">
                    Transform Your Body Yoga Is the Best Version
                  </h2>
                  <div className="inner-text">
                    <div className="text">
                      Experience ultimate relaxation and rejuvenation at our
                      luxurious spa. Escape the stresses of daily life and
                      indulge in soothing treatments designed to refresh your
                      body, mind, and spirit. Whether you're enjoying a calming
                      massage, a revitalizing facial, or a serene aromatherapy.
                    </div>
                    <Link
                      href="/page-about"
                      className="theme-btn btn-style-two btn pricing-btn">
                      <span className="btn-title">Know more</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-4 order-lg-1 wow fadeInLeft">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim mb-0">
                    <img src="/assets/images/resource/about13-1.jpg" alt="Main" />
                  </figure>
                  <figure className="image-1 bounce-y mb-0">
                    <img src="/assets/images/icons/shape8-1.png" alt="Shape Icon" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="image-column-two col-lg-2">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim mb-0">
                    <img src="/assets/images/resource/about13-2.jpg" alt="Secondary" />
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

export default AboutSectionEleven;
