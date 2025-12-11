"use client";
import React, {useState} from "react";
import ModalVideo from 'react-modal-video';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function BannerSectionFour() {
  const [isOpen, setOpen] = useState(false);
  const slides = [1, 2, 3];
  return (
    <>
    <section className="banner-section-four">
      <div className="anim-icons">
        <img className="img-1 bounce-y" src="/assets/images/banner/banner4-2.png" alt="Image"/>
        <img className="img-2 bounce-z" src="/assets/images/banner/banner4-3.png" alt="Image"/>
        <img className="img-3 bounce-y" src="/assets/images/banner/banner4-4.png" alt="Image"/>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500 }}
        loop
        className="banner-carousel-one">
        {slides.map((_, index) => (
          <SwiperSlide key={index}>
            <div className="slide-item">
              <div className="auto-container">
                <div className="row">
                  <div className="content-box col-lg-6 col-md-12 col-sm-12">
                    <h1 className="title animate-2">Yogana</h1>
                    <span className="title-two animate-3">Studio</span>
                    <span className="title-three animate-4">
                      You Looking For Yoga Studio
                    </span>
                    <a
                      onClick={() => setOpen(true)}
                      className="play-now animate-5"
                      data-fancybox="gallery"
                    >
                      <i className="icon fas fa-play p-0" aria-hidden="true"></i>
                    </a>
                    <div className="text animate-6">
                      Yoga encompasses various styles, including <br />
                      hatha vinyasa ashtanga bikram kundalini <br />
                      restorative each with its unique approach <br />
                      movement and mindfulness.
                    </div>
                  </div>
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="image-box">
                      <figure className="image mb-0">
                        <div className="fadeInUpBig"><div className="round-shape"></div></div>
                        <img className="animate-3" src="/assets/images/banner/banner4-1.jpg" alt="Image"/>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
}