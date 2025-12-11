"use client";
import React, {useState} from "react";
import ModalVideo from 'react-modal-video';

const VideoSectionThree = () => {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="video-section-three relative">
      <div
        className="bg bg-image absolute inset-0"
        style={{
          backgroundImage: "url(/assets/images/background/bg-video3.jpg)",
        }}/>
      <div className="video1 bounce-x"></div>
      <div className="auto-container relative z-10">
        <div className="row">
          <div className="col-lg-12">
            <div className="content mb-0 text-center">
              <a
                onClick={() => setOpen(true)}
                className="play-now wow fadeInUp"
                data-fancybox="gallery"
                data-caption="">
                <i className="icon fas fa-play p-0" />
                <span className="ripple"></span>
              </a>
              <h3
                className="words-slide-up text-split wow fadeInUp"
                data-wow-delay=".3s">
                Shop & Get 20% Off <br /> Yoga Product By it Brands
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
};

export default VideoSectionThree;
