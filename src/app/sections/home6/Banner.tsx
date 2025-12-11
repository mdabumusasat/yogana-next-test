"use client";
import ModalVideo from 'react-modal-video';
import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

export default function BannerSectionThree() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="banner-section-three relative overflow-hidden">
      <div className="shape-image-curve"></div>
      <div className="shape-image-leaf bounce-y"></div>
      <div className="shape-image6-1 bounce-y"></div>
      <div
        className="bg-image"
        style={{
          backgroundImage: "url(/assets/images/main-slider/bg-slider3-1.png)",
        }}
      ></div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="banner-carousel-one">
        <SwiperSlide>
          <div className="slide-item">
            <div className="auto-container">
              <div className="float-text animate-5">YOGANA</div>
              <div className="shape-image6-2 animate-6"></div>
              <div className="row">
                <div className="content-box col-xl-4 col-lg-4 col-md-12">
                  <h1 className="title animate-2">Treat your body & soul</h1>
                  <div className="text animate-3">
                    At Yogana, your health is celebrated with every detail,
                    & our serene environment will make your stay unforgettable.
                  </div>
                </div>
                <div className="image-column col-xl-5 col-lg-4 col-md-12">
                  <div className="image-box">
                    <figure className="image animate-3">
                      <Image
                        src="/assets/images/main-slider/slide6-1.jpg"
                        alt="Yoga Banner"
                        width={500}
                        height={500}
                      />
                    </figure>
                    <div className="text-rotate animate-5">
                      <div className="icon-text-2"></div>
                      <a
                        onClick={() => setOpen(true)}
                        className="play-btn-two"
                        data-fancybox="gallery">
                        <i className="icon fa-light fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content-box col-xl-3 col-lg-4 col-md-12">
                  <div className="inner-content">
                    <div className="text animate-3">
                      Your health is our top priority, & we are confident that
                      you will adore your stay at Yogana.
                    </div>
                    <div className="btn-box animate-4">
                      <Link href="/page-contact" className="theme-btn btn-style-transparent">
                        <span className="btn-title">APPOINTMENT Now</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
}
