import React from 'react';
import Link from 'next/link';

const featuresData = [
  {
    icon: 'feature-icon-6.1.svg',
    alt: 'Risk Assessment Icon',
    title: 'Risk Assessment & Analysis',
    desc: 'Estimating the financial impact of uncovered risks',
    delay: '00ms',
  },
  {
    icon: 'feature-icon-6.2.svg',
    alt: 'Policy Selection Icon',
    title: 'Policy Selection & Procurement',
    desc: 'Estimating the financial impact of uncovered risks',
    delay: '100ms',
  },
  {
    icon: 'feature-icon-6.3.svg',
    alt: 'Review and Risk Management Icon',
    title: 'Ongoing Review & Risk Management',
    desc: 'Estimating the financial impact of uncovered risks',
    delay: '200ms',
  },
  {
    icon: 'feature-icon-6.4.svg',
    alt: 'Benefits Icon',
    title: 'Benefits of Insurance Consulting',
    desc: 'Estimating the financial impact of uncovered risks',
    delay: '300ms',
  },
];

function Features() {
  return (
    <>
    <section id='product' className="feature-two-home6 pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="sec-title wow fadeInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
              <h6 className="sub-title style-red">Our expertise</h6>
              <h2 className="title">We provide consulting <br /> to strategic growth.</h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="sec-title wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="text">
                Insurance consulting is a specialized service that provides expert advice and strategic guidance to individuals
              </div>
            </div>
          </div>
        </div>

        <div className="feature-two__wrp">
          <div className="row g-4">
            {featuresData.map((item, index) => (
              <div key={index} className={`col-md-6 col-xl-3 wow fadeInLeft`} data-wow-delay={item.delay} data-wow-duration="1500ms">
                <div className="feature-two__item">
                  <div className="feature__icon">
                    <img src={`/assets/images/icon/${item.icon}`} alt={item.alt} />
                  </div>
                  <div className="feature__content">
                    <h4 className="title"><Link className="hover-link" href="/page-service-details">{item.title}</Link></h4>
                    <p className="text">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="feature-two__text mt-5 mt-xl-0 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
            <span className="icon">
              <img src="/assets/images/icon/spark-icon.svg" alt="Arrow Icon" />
            </span>
            <div className="text">
              We Strive To Lead The way In The business{' '}
              <Link href="/page-services">Know All Features <span className="far fa-arrow-right pl-10" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Features;
