"use client";

import React, {useState} from "react";
import Link from "next/link";
import ModalVideo from 'react-modal-video';


export default function VideoSection() {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="video-section">
      <div
        className="bg bg-image"
        style={{ backgroundImage: "url(/assets/images/background/bg-video1.jpg)" }}
      ></div>

      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-title mb-0 wow fadeInUp">
              <h2 className="words-slide-up text-split">
                Book & feel our Incredible <br /> Spa Experience
              </h2>

              <div className="info-box">
                <Link
                  href="/page-contact"
                  className="theme-btn btn-style-two mt-0"
                >
                  <span className="btn-title">Make Appointment</span>
                </Link>

                <div className="outer-box">
                  <h4>Watch Now</h4>
                  <a
                    onClick={() => setOpen(true)}
                    className="play-now"
                    data-fancybox="gallery"
                    data-caption=""
                  >
                    <i className="icon fas fa-play p-0" aria-hidden="true"></i>
                    <span className="ripple"></span>
                  </a>
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
