"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Meditation",
    bgImage: "/assets/images/resource/service6-1.jpg",
    overlayImage: "/assets/images/resource/service1-2.png",
    icon: "/assets/images/icons/theme-icon5.png",
  },
  {
    title: "Aroma Therapy",
    bgImage: "/assets/images/resource/service6-1.jpg",
    overlayImage: "/assets/images/resource/service1-2.png",
    icon: "/assets/images/icons/theme-icon6.png",
  },
  {
    title: "Yoga",
    bgImage: "/assets/images/resource/service6-1.jpg",
    overlayImage: "/assets/images/resource/service1-2.png",
    icon: "/assets/images/icons/theme-icon7.png",
  },
  {
    title: "Sound Therapy",
    bgImage: "/assets/images/resource/service6-1.jpg",
    overlayImage: "/assets/images/resource/service1-2.png",
    icon: "/assets/images/icons/theme-icon8.png",
  },
  {
    title: "Thai Massage",
    bgImage: "/assets/images/resource/service1-1.png",
    overlayImage: "/assets/images/resource/service1-2.png",
    icon: "/assets/images/icons/theme-icon8.png",
  },
  {
    title: "Sauna Relax",
    bgImage: "/assets/images/resource/service1-1.png",
    overlayImage: "/assets/images/resource/service1-2.png",
    icon: "/assets/images/icons/theme-icon5.png",
  },
  {
    title: "Make-up",
    bgImage: "/assets/images/resource/service1-1.png",
    overlayImage: "/assets/images/resource/service1-2.png",
    icon: "/assets/images/icons/theme-icon7.png",
  },
  {
    title: "Face Treatments",
    bgImage: "/assets/images/resource/service1-1.png",
    overlayImage: "/assets/images/resource/service1-2.png",
    icon: "/assets/images/icons/theme-icon6.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section pt-100 pb-0">
      <div className="service1-pattrn1 bounce-y"></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <div className="service-block mb-30">
                  <div className="inner-box">
                    <div className="image-box">
                      <div
                        className="bg-image"
                        style={{ backgroundImage: `url(${service.bgImage})` }}
                      ></div>
                      <div
                        className="bg-image-two"
                        style={{ backgroundImage: `url(${service.overlayImage})` }}
                      ></div>
                    </div>
                    <div className="content-box">
                      <figure className="icon mb-0">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={50}
                          height={50}
                        />
                      </figure>
                      <h4 className="title">
                        <Link href="/page-service-details">{service.title}</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
