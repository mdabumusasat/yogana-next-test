"use client";

import React from "react";
import Image from "next/image";

const WhyChooseUsFive = () => {
  return (
    <section className="whychose-us-five">
      <div
        className="bg-image"
        style={{
          backgroundImage: "url(/assets/images/background/bg-why1-1.jpg)",
        }}
      ></div>
      <div
        className="bg-image2"
        style={{
          backgroundImage: "url(/assets/images/background/bg-why1-2.jpg)",
        }}
      ></div>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-10 col-xl-6 wow fadeInRight">
            <div className="image-content mb-lg-30">
              <Image
                className="img bounce-x"
                src="/assets/images/resource/whychose-us-home4.png"
                alt="Why Choose Us Image"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="col-lg-10 col-xl-6 wow fadeInLeft">
            <div className="whychose-content-box">
              <div className="inner-content">
                <div className="sec-title light">
                  <h2 className="words-slide-up text-split">
                    Why Our Service <br className="d-none d-lg-block" /> Stands Out
                  </h2>
                </div>
                {[
                  {
                    icon: "/assets/images/icons/wc-icon-1.png",
                    title: "Enhance Skin",
                    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
                  },
                  {
                    icon: "/assets/images/icons/wc-icon-2.png",
                    title: "Flexibility",
                    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
                  },
                  {
                    icon: "/assets/images/icons/wc-icon-3.png",
                    title: "Reduce Anxity",
                    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
                  },
                ].map((item, index) => (
                  <div
                    className={`whychose-icon-box d-flex mb-25`}
                    key={index}>
                    <div className="icon mr-20">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="contents">
                      <h4 className="title">{item.title}</h4>
                      <p className="text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsFive;
