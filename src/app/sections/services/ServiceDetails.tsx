"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const sidebarLinks = [
  "Meditation",
  "Aroma Therapy",
  "Yoga Mind",
  "Sound Therapy",
  "Body Glow & Wraps",
  "Body Treatments",
];

const faqs = [
  {
    question: "Is my technology allowed on tech?",
    answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    question: "How to soft launch your business?",
    answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    active: true,
  },
  {
    question: "How to turn visitors into contributors",
    answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    question: "How can I find my solutions?",
    answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
];

const ServiceDetails = () => {
  const [activeFaq, setActiveFaq] = useState(faqs.findIndex(f => f.active) || 0);

  return (
    <section className="services-details pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="service-sidebar">
              <div className="sidebar-widget service-sidebar-single">
                <div className="sidebar-service-list">
                  <ul>
                    {sidebarLinks.map((link, index) => (
                      <li key={index}>
                        <Link href="/page-service-details"
                           className={index === 0 ? "current" : ""}>
                            <i className="fas fa-angle-right"></i>
                            <span>{link}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-details-help">
                  <div className="help-shape-1"></div>
                  <div className="help-shape-2"></div>
                  <h2 className="help-title">
                    Contact with <br /> us for any <br /> advice
                  </h2>
                  <div className="help-icon">
                    <span className="lnr-icon-phone-handset"></span>
                  </div>
                  <div className="help-contact">
                    <p>Need help? Talk to an expert</p>
                    <Link href="#">+892 (123) 112 - 9999</Link>
                  </div>
                </div>
                <div className="sidebar-widget service-sidebar-single mt-4">
                  <div
                    className="service-sidebar-single-btn wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="1200m">
                    <Link href="#" className="theme-btn btn-style-one d-grid">
                      <span className="btn-title">
                        <span className="fas fa-file-pdf"></span> download pdf file
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="services-details__content">
              <Image
                src="/assets/images/resource/service-details.jpg"
                alt="Service Details"
                width={800}
                height={400}
                className="mb-4"/>
              <h3>Service Overview</h3>
              <p>
                Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem
                ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting.
              </p>
              <div className="content mt-40">
                <div className="text">
                  <h3>Service Center</h3>
                  <p>
                    Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem
                    ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <blockquote className="blockquote-one">
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining
                    essentially unchanged Lorem ipsum dolor sit amet consec tetur
                  </blockquote>
                </div>
                <div className="feature-list mt-4">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <Image
                        src="/assets/images/resource/service-d1.jpg"
                        alt="Service 1"
                        width={400}
                        height={250}
                        className="mb-3"
                      />
                      <p>
                        Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus
                        hic conse quatur copy typing refreshing
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <Image
                        src="/assets/images/resource/service-d2.jpg"
                        alt="Service 2"
                        width={400}
                        height={250}
                        className="mb-3"/>
                      <p>
                        Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus
                        hic conse quatur copy typing refreshing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-25">
                <h3>Frequently Asked Question</h3>
                <p>
                  Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem
                  ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <ul className="accordion-box wow fadeInRight">
                  {faqs.map((faq, index) => (
                    <li key={index} className={`accordion block ${activeFaq === index ? "active-block" : ""}`}>
                      <div
                        className={`acc-btn ${activeFaq === index ? "active" : ""}`}
                        onClick={() => setActiveFaq(index)}>
                        {faq.question}
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div className={`acc-content ${activeFaq === index ? "current" : ""}`}>
                        <div className="content">
                          <div className="text">{faq.answer}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceDetails;
