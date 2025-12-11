"use client";

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import ModalVideo from 'react-modal-video';

export default function AboutSection() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section id="about" className="about-section-nine">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="image-column col-lg-7 order-2 order-lg-0 wow fadeInRight">
            <div className="inner-column">
              <div className="image-box">
                <div className="exp-box bounce-x">
                  <div
                    className="bg bg-image"
                    style={{
                      backgroundImage:
                        "url(/assets/images/resource/about1-6.png)",
                    }}
                  ></div>
                  <div className="inner">
                    <h2 className="title" data-text="25+">
                      25+
                    </h2>
                    <span className="text">Experience</span>
                  </div>
                </div>
                <figure className="image-one mb-0 overlay-anim">
                  <Image
                    src="/assets/images/resource/about9-4.jpg"
                    alt="About Image"
                    width={600}
                    height={500}
                  />
                </figure>
                <figure className="image-two mb-0 overlay-anim bounce-y">
                  <Image
                    src="/assets/images/resource/about9-5.jpg"
                    alt="About Image"
                    width={500}
                    height={450}
                  />
                </figure>
              </div>
              <div
                className="bg flower-frame bounce-z"
                style={{
                  backgroundImage:
                    "url(/assets/images/resource/flower-frame1.png)",
                }}
              ></div>
            </div>
          </div>
          <div className="content-column col-lg-5 wow fadeInLeft">
            <div className="inner-column">
              <div className="sec-title mb-0">
                <figure className="image">
                  <Image
                    src="/assets/images/icons/icon1.png"
                    alt="Icon"
                    width={47}
                    height={45}
                  />
                </figure>
                <span className="sub-title">Our Services</span>
                <h2 className="words-slide-up">
                  Yoga Fuelled Purpose and Passion
                </h2>
                <div className="text">
                  These are the poses and movements that most people associate with yoga.
                  They help improve flexibility.
                </div>
              </div>
              <div className="outer-box">
                <ul className="list-style-two">
                  <li>
                    <i className="icon fa fa-circle-check"></i> Lorem Ipsum is not
                    simply random
                  </li>
                  <li>
                    <i className="icon fa fa-circle-check"></i> Sed ut perspiciatis
                    unde omnis
                  </li>
                  <li>
                    <i className="icon fa fa-circle-check"></i> Eaque ipsa quae ab
                    illo inventore
                  </li>
                  <li>
                    <i className="icon fa fa-circle-check"></i> But I must explain to
                    you how
                  </li>
                </ul>
                <div className="video-box">
                  <figure className="image-three mb-0 overlay-anim">
                    <Image
                      src="/assets/images/resource/about9-3.jpg"
                      alt="Video Thumbnail"
                      width={600}
                      height={450}
                    />
                  </figure>
                  <a
                    onClick={() => setOpen(true)}
                    className="play-btn-two"
                    data-fancybox="gallery">
                    <i className="icon fa-solid fa-play"></i>
                  </a>
                  <div className="flower4 bounce-y">
                    <Image
                      src="/assets/images/resource/flower4.png"
                      alt="Flower"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
              </div>
              <div className="author-box">
                <div className="inner">
                  <Link
                    href="/page-about"
                    className="theme-btn btn-style-two btn pricing-btn">
                    <span className="btn-title">Discover more</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
}
