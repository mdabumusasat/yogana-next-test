"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    icon: "/assets/images/icons/icon-service1.png",
    title: "Laughter Yoga",
    text: "A unique form of yoga that combines laugh exercises with breathing techniques to promote mental and physical well-being. is a wonderful practice that combines",
    delay: ".3s",
  },
  {
    id: 2,
    icon: "/assets/images/icons/icon-service2.png",
    title: "Bikram Yoga",
    text: "A style of yoga practiced in a heated room around 105°F/40°C consisting of a set series of 26 poses and 2 breathing exerci known for its traditional practices",
    delay: ".5s",
  },
  {
    id: 3,
    icon: "/assets/images/icons/icon-service3.png",
    title: "Vinyasa Yoga",
    text: "A dynamic style of yoga that connects breath with movement in a continuous of poses. Yoga is a wonderful practice combines physical postures",
    delay: ".5s",
  },
];

export default function ServicesSectionSix() {
  return (
    <section id="services" className="services-section-six pull-up">
      <div className="bg bg-image-four" style={{ backgroundImage: "url(/assets/images/background/bg-service3.png)" }}></div>
      <div className="leaf-1 bounce-y">
        <Image src="/assets/images/resource/service-leaf1-1.png" width={80} height={80} alt="" />
      </div>
      <div className="leaf-2 bounce-y">
        <Image src="/assets/images/resource/service-leaf1-2.png" width={80} height={80} alt="" />
      </div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="sec-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
            <div className="title-stroke-text">Services</div>
            <figure className="image">
              <Image src="/assets/images/icons/icon1.png" width={50} height={50} alt="Icon" />
            </figure>
            <span className="sub-title">What We Do</span>
            <h2 className="words-slide-up text-split">Our Services</h2>
          </div>

          <div className="row justify-content-center">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-block-six col-lg-4 col-md-6 wow ${index === 2 ? "fadeInRight" : "fadeInLeft"}`}
                data-wow-delay={service.delay}
              >
                <div className="inner-box">
                  <div className="thumb-icon">
                    <div
                      className="bg bg-image"
                      style={{ backgroundImage: "url(/assets/images/resource/service-icon-bg.svg)" }}
                    ></div>
                    <Image src={service.icon} width={60} height={60} alt={service.title} />
                  </div>

                  <div className="shape-btn">
                    <svg width="160" height="160" viewBox="0 0 160 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.1574 20.5622C18.5298 6.25806 6.20765 0.894009 0 0H142V97C138.648 83.4111 126.769 80.6098 121.248 80.9078H35.3836C22.3475 80.1926 18.4678 69.8817 18.1574 64.8157C18.0022 56.0246 17.7849 34.8664 18.1574 20.5622Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <div className="service-btn">
                    <Link className="btn" href="/page-contact">
                      <i className="fa-sharp far fa-arrow-right"></i>
                    </Link>
                  </div>

                  <div className="read-more">
                    <i className="flaticon flaticon-stethoscope-3"></i>
                  </div>

                  <div className="service-content">
                    <h4 className="title">{service.title}</h4>
                    <div className="text">{service.text}</div>
                    <Link href="/page-contact" className="theme-btn btn-style-two">
                      <span className="btn-title">Book Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-bottom">
            <div className="inner-text">
              You Get More Services{" "}
              <Link href="/page-services">
                Explore Now <i className="fa-sharp far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
