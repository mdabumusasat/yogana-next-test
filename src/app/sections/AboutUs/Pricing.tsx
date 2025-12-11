"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

// Tabs list
const tabs = [
  { id: "tab1", title: "Meditation", icon: "/assets/images/icons/theme-icon9.png" },
  { id: "tab2", title: "Anusara Yoga", icon: "/assets/images/icons/theme-icon10.png" },
  { id: "tab3", title: "Balancing Yoga", icon: "/assets/images/icons/theme-icon11.png" },
  { id: "tab4", title: "Relaxing Pose", icon: "/assets/images/icons/theme-icon12.png" },
  { id: "tab5", title: "Simhasana Yoga", icon: "/assets/images/icons/theme-icon13.png" },
];

// Pricing data
const pricingItems = [
  { img: "/assets/images/resource/price4-1.png", title: "Aroma therapy", text: "20 mins Revitalize Facial", price: "$50" },
  { img: "/assets/images/resource/price4-2.png", title: "Aroma therapy", text: "20 mins Revitalize Facial", price: "$50" },
  { img: "/assets/images/resource/price4-3.png", title: "Sauna relax", text: "20 mins Revitalize Facial", price: "$50" },
  { img: "/assets/images/resource/price4-4.png", title: "Hydrating Facial", text: "20 mins Revitalize Facial", price: "$50" },
  { img: "/assets/images/resource/price4-5.png", title: "Geothermal spa", text: "20 mins Revitalize Facial", price: "$50" },
  { img: "/assets/images/resource/price4-6.png", title: "Prenatal Massage", text: "20 mins Revitalize Facial", price: "$50" },
  { img: "/assets/images/resource/price4-7.png", title: "Aroma therapy", text: "20 mins Revitalize Facial", price: "$50" },
  { img: "/assets/images/resource/price4-8.png", title: "Hot Stone", text: "20 mins Revitalize Facial", price: "$50" },
];

export default function PricingSectionFive() {
  const [activeTab, setActiveTab] = useState("tab2");

  return (
    <section className="pricing-section-five style-two">
      <div className="outer-box">
        <div className="container">
          <div
            className="sec-title text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
          >
            <span className="sub-title">Pricing Package</span>
            <h2>
              Discover Our Popular <br /> Pricing Package
            </h2>
          </div>

          {/* Tab Buttons */}
          <div className="tabs-style-one wow fadeInUp" data-wow-delay=".4s">
            <ul className="tab-buttons clearfix">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? "active-btn" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="icon">
                    <Image
                      className="icon-img"
                      src={tab.icon}
                      alt={tab.title}
                      width={42}
                      height={47}
                    />
                    <svg width="100" height="88" viewBox="0 0 100 88">
                      <path d="M37.6349 0.600082C36.1379 0.87019 34.3714 1.35038 33.7427 1.6505C33.1439 1.98063 30.8984 2.4008 28.8025 2.58087C13.1439 3.93141 1.85644 21.4884 0.269613 46.9086C-1.01781 67.3168 7.84446 78.6013 30.09 84.9038C51.6469 91.0262 65.8684 87.845 80.7187 73.5893C104.82 50.42 106.288 20.6781 83.8624 9.09348C71.5271 2.70092 49.3415 -1.38071 37.6349 0.600082Z"/>
                    </svg>
                  </div>
                  <span className="title">{tab.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tabs Content */}
          <div className="tabs-content animated fadeIn wow" data-wow-delay=".6s">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab ${activeTab === tab.id ? "active-tab" : ""}`}>
                {activeTab === tab.id && (
                  <div className="tab-block">
                    <div className="row">
                      {pricingItems.map((item, index) => (
                        <div key={index} className="pricing-block-five col-lg-6">
                          <div className="inner-box">
                            <div className="image-box">
                              <figure className="image overlay-anim mb-0">
                                <Image
                                  src={item.img}
                                  alt={item.title}
                                  width={400}
                                  height={300}
                                />
                              </figure>
                            </div>
                            <div className="content-box">
                              <div className="inner">
                                <h4 className="title">{item.title}</h4>
                                <div className="text">{item.text}</div>
                              </div>
                              <div className="price">
                                <span>from</span> {item.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
