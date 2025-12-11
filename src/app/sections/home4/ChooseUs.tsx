"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const WhyChooseUsFour = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    const counters = countersRef.current;

    const animateCounter = (el) => {
      const speed = parseInt(el.dataset.speed, 10);
      const stop = parseInt(el.dataset.stop, 10);

      let current = 0;
      const increment = stop / (speed / 50);

      const updateCounter = () => {
        current += increment;

        if (current < stop) {
          el.innerText = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          el.innerText = stop;
        }
      };

      updateCounter();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    counters.forEach((counter) => {
      if (counter) observer.observe(counter);
    });
  }, []);

  return (
    <section className="why-choose-us-four">
      <div className="anim-icons">
        <Image
          className="img-4 bounce-x"
          src="/assets/images/resource/whychose4.png"
          alt=""
          width={200}
          height={200}
        />
        <Image
          className="img-5 bounce-y"
          src="/assets/images/resource/whychose5.png"
          alt=""
          width={200}
          height={200}
        />
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-6">
            <div className="inner-column">
              <div className="sec-title">
                <figure className="image">
                  <Image
                    src="/assets/images/icons/icon1.png"
                    alt=""
                    width={47}
                    height={45}
                  />
                </figure>
                <span className="sub-title">Why Choose Us</span>
                <h2 className="title words-slide-up">
                  Why Our Yoga Practice Stands Out
                </h2>
                <div className="text">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will
                  give you a complete account of the system, and expound the
                  actual teachings of the great explorer of the truth.
                </div>
              </div>
              <div className="counter-info">
                <div className="counter-block">
                  <div className="count-box">
                    <span
                      className="count-text"
                      data-speed="4000"
                      data-stop="300"
                      ref={(el) => {
                        countersRef.current[0] = el;
                    }}>
                      0
                    </span>
                    +
                  </div>
                  <h4 className="counter-title">Grateful Clients</h4>
                </div>
                <div className="counter-block">
                  <div className="count-box">
                    <span
                      className="count-text"
                      data-speed="3000"
                      data-stop="150"
                      ref={(el) => {
                        countersRef.current[0] = el;
                    }}>
                      0
                    </span>
                    +
                  </div>
                  <h4 className="counter-title">Completed Projects</h4>
                </div>
              </div>
              <Link href="/page-about" className="theme-btn btn-style-two btn pricing-btn">
                <span className="btn-title">Book Now</span>
              </Link>
            </div>
          </div>
          <div className="image-column col-lg-6">
            <div className="inner-column">
              <div className="image-box">

                <figure className="image-one mb-0 overlay-anim">
                  <Image
                    src="/assets/images/resource/whychose1.png"
                    alt=""
                    width={500}
                    height={500}
                  />
                </figure>
                <div className="anim-icons">
                  <Image
                    className="img-1 bounce-x"
                    src="/assets/images/resource/whychose2.png"
                    alt=""
                    width={180}
                    height={180}/>
                  <Image
                    className="img-2 bounce-z"
                    src="/assets/images/resource/whychose3.png"
                    alt=""
                    width={160}
                    height={160}/>
                  <Image
                    className="img-3 bounce-y"
                    src="/assets/images/resource/whychose3.png"
                    alt=""
                    width={160}
                    height={160}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsFour;
