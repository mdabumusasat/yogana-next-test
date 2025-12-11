"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";  
import ModalVideo from 'react-modal-video';

const yogaTypes = [
  { id: 1, icon: "/assets/images/icons/theme-icon17.png", title: "Hatha Yoga" },
  { id: 2, icon: "/assets/images/icons/theme-icon18.png", title: "Chair Yoga" },
  { id: 3, icon: "/assets/images/icons/theme-icon19.png", title: "Teen Yoga" },
];

export default function AboutSection() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section id="about" className="about-section-seven">
      <div className="anim-icons">
        <Image
          className="img-1 bounce-y"
          src="/assets/images/resource/about10-4.png"
          width={100}
          height={100}
          alt="Decorative Icon"/>
        <Image
          className="img-2 bounce-y"
          src="/assets/images/resource/about10-5.png"
          width={100}
          height={100}
          alt="Decorative Icon"/>
      </div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="row align-items-center">
            <div className="image-column col-lg-6 order-2 order-lg-0">
              <div className="inner-column">
                <div className="image-box">
                  <div className="play-box">
                    <a
                      onClick={() => setOpen(true)}
                      className="play-btn-two"
                      data-fancybox="gallery"
                      data-caption="">
                      <i className="icon fa-solid fa-play" aria-hidden="true"></i>
                    </a>
                  </div>
                  <figure className="image-one mb-0 overlay-anim">
                    <Image
                      src="/assets/images/resource/about10-1.jpg"
                      width={500}
                      height={300}
                      alt="Yoga Image One"
                    />
                  </figure>
                  <figure className="image-two mb-0 overlay-anim">
                    <Image
                      src="/assets/images/resource/about10-2.jpg"
                      width={500}
                      height={300}
                      alt="Yoga Image Two"
                    />
                  </figure>
                  <div
                    className="bg bg-image-one bounce-x"
                    style={{ backgroundImage: "url(/assets/images/resource/about10-3.jpg)" }}
                  ></div>
                  <div
                    className="bg bg-image-two bounce-y"
                    style={{ backgroundImage: "url(/assets/images/resource/about10-4.jpg)" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="content-column col-lg-6">
              <div className="inner-column">
                <div className="sec-title mb-0">
                  <span className="sub-title">Get to know us</span>
                  <h2 className="words-slide-up">
                    Transform Your Body Yoga Is Best Version
                  </h2>
                  <div className="text">
                    Yoga postures, or asanas, are designed to promote flexibility,
                    strength, and balance. These poses stretch and strengthen the body,
                    enhancing both physical health and mental focus. From foundational
                    poses like Mountain Pose.
                  </div>
                </div>
                <div className="row">
                  {yogaTypes.map((type) => (
                    <div key={type.id} className="list-box col-sm-4">
                      <div className="inner">
                        <figure className="thumb">
                          <Image
                            src={type.icon}
                            width={60}
                            height={60}
                            alt={type.title}
                          />
                        </figure>
                        <h4 className="title">{type.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="author-box">
                  <div className="inner">
                    <Link
                      href="/page-about"
                      className="theme-btn btn-style-two btn pricing-btn">
                      <span className="btn-title">Know More</span>
                    </Link>
                    <div className="contact-info">
                      <div className="icon-box">
                        <Image
                          src="/assets/images/icons/comment1.png"
                          width={40}
                          height={40}
                          alt="Chat Icon"
                        />
                      </div>
                      <div className="sign">
                        <div className="text">Chat Us Anytime</div>
                        <Link href="#">(000) 222-000</Link>
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
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
}
