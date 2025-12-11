import React from "react";
import Link from "next/link";

const AboutUsStyle12 = () => {
  return (
    <section className="about-us-style12">
      <div className="shape1 bounce-y">
        <img src="/assets/images/icons/shape12-1.png" alt="Shape 1" />
      </div>

      <div className="shape2 bounce-y">
        <img src="assets/images/icons/shape12-2.png" alt="Shape 2" />
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-6 d-none d-xl-block">
            <div className="image-column wow fadeInRight">
              <div className="inner-content">
                <img className="img-1 bounce-y" src="/assets/images/resource/about5-1.png" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-10">
            <div className="content-column wow fadeInLeft">
              <div className="inner-content">
                <div className="sec-title">
                  <div className="title-stroke">yogana</div>
                  <span className="sub-title">Wellness Spa Retreats</span>
                  <h2 className="title words-slide-up text-split">
                    Stretch, breathe and let go
                  </h2>
                  <div className="text">
                    Proin efficitur, mauris vel condimentum pulvinar,
                    velit orci consectetur 
                    <br className="d-none d-lg-block" />
                    ligula, eget egestas magna mi ut arcu. Phasellus nec.
                  </div>
                </div>
                <div className="list-style12 d-flex align-items-center">
                  <ul className="list-style12">
                    <li>
                      <img className="me-2" src="/assets/images/icons/list-style-icon1.svg" alt="Icon" /> Yoga Style
                    </li>
                    <li>
                      <img className="me-2" src="/assets/images/icons/list-style-icon1.svg" alt="Icon" /> Meditation
                    </li>
                  </ul>
                  <ul className="list-style12 ml-40">
                    <li>
                      <img className="me-2" src="/assets/images/icons/list-style-icon1.svg" alt="Icon" /> Yoga Pose
                    </li>
                    <li>
                      <img className="me-2" src="/assets/images/icons/list-style-icon1.svg" alt="Icon" /> Audio Therapy
                    </li>
                  </ul>
                </div>
                <Link
                  href="/page-contact"
                  className="theme-btn btn-style-two btn pricing-btn">
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

export default AboutUsStyle12;
