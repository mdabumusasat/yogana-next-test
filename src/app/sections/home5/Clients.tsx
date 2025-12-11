"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const clients = [
  "/assets/images/resource/client1-1.png",
  "/assets/images/resource/client1-2.png",
  "/assets/images/resource/client1-3.png",
  "/assets/images/resource/client1-4.png",
  "/assets/images/resource/client1-5.png",
  "/assets/images/resource/client1-2.png",
  "/assets/images/resource/client1-3.png",
];

export default function ClientsSection() {
  return (
    <section className="clients-section">
      <div className="auto-container">
        <div className="carousel-outer">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="client-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="#">
                          <img src={client} alt={`Client ${index + 1}`} />
                        </Link>
                      </figure>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
