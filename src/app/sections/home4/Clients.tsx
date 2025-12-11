"use client";
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const clientsData = [
  { id: 1, logo: '/assets/images/brand/brand-two-image1.png', name: 'Client 1' },
  { id: 2, logo: '/assets/images/brand/brand-two-image2.png', name: 'Client 2' },
  { id: 3, logo: '/assets/images/brand/brand-two-image3.png', name: 'Client 3' },
  { id: 4, logo: '/assets/images/brand/brand-two-image4.png', name: 'Client 4' },
  { id: 5, logo: '/assets/images/brand/brand-two-image5.png', name: 'Client 5' },
  { id: 6, logo: '/assets/images/brand/brand-two-image1.png', name: 'Client 1' },
  { id: 7, logo: '/assets/images/brand/brand-two-image2.png', name: 'Client 2' },
  { id: 8, logo: '/assets/images/brand/brand-two-image3.png', name: 'Client 3' },
  { id: 9, logo: '/assets/images/brand/brand-two-image4.png', name: 'Client 4' },
  { id: 10, logo: '/assets/images/brand/brand-two-image5.png', name: 'Client 5' },
];

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1023: {
      slidesPerView: 5,
    },
  },
};

function Clients() {
  return (
    <section className="brand-section-two pt-60">
      <div className="container">
        <div className="outer-box">
          <Swiper {...swiperOptions} className="swiper brand-slider">
            {clientsData.map((client) => (
              <SwiperSlide key={client.id} className="swiper-slide">
                <div className="brand-block">
                  <Link href="/">
                    <img src={client.logo} alt={client.name} />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Clients;
