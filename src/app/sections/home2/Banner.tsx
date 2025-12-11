"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BannerSectionFive() {
  return (
    <section className="banner-section-five">
      <div className="anim-icons">
        <Image
          className="img-1 bounce-y"
          src="/assets/images/banner/banner4-2.png"
          width={100}
          height={100}
          alt="Decorative Banner"
        />
        <Image
          className="img-2 bounce-z"
          src="/assets/images/banner/banner4-3.png"
          width={100}
          height={100}
          alt="Decorative Banner"
        />
        <Image
          className="img-3 bounce-y"
          src="/assets/images/banner/banner4-4.png"
          width={100}
          height={100}
          alt="Decorative Banner"
        />
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7">
            <div className="inner-content">
              <h2 className="title">
                Yoga where mind, <br className="d-none d-lg-block" /> body,{" "}
                <a href="/page-services" /> and <br className="d-none d-lg-block" /> soul unite.
              </h2>
              <p className="text">
                Yoga is an ancient practice that originated thousands of years ago, and it <br />
                encompasses physical, mental, and spiritual disciplines. The word yoga comes <br />
                from the Sanskrit “yuj” meaning to unite or to join in the context of yoga.
              </p>
              <Link href="/page-contact" className="theme-btn btn-style-one mt-25">
                APPOINTMENT NOW
              </Link>
            </div>
          </div>
          <div className="image-column col-lg-5">
            <div className="image-box">
              <figure className="image">
                <div className="fadeInUpBig">
                  <div className="round-shape"></div>
                </div>
                <Image
                  className="animate-3"
                  src="/assets/images/banner/banner5-1.png"
                  width={500}
                  height={500}
                  alt="Yoga Banner"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
