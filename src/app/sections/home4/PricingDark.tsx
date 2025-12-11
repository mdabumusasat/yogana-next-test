import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const pricingData = [
  {
    id: 1,
    title: 'Regular Plan',
    subtitle: 'For Small Businesses',
    price: '$19.99',
    period: '/ Monthly',
    features: [
      'Email marketing',
      'Unlimited chat history',
      'Unlimited landing pages',
      'Automation templates',
      'Great Customer Support',
    ],
    btnClass: 'btn-one-light',
    delay: '00ms',
  },
  {
    id: 2,
    title: 'Standard Plan',
    subtitle: 'For Medium Businesses',
    price: '$29.99',
    period: '/ Monthly',
    features: [
      'Email marketing',
      'Unlimited chat history',
      'Unlimited landing pages',
      'Automation templates',
      'Great Customer Support',
    ],
    btnClass: 'btn-one-rounded',
    popular: true,
    active: 'active',
    delay: '200ms',
  },
  {
    id: 3,
    title: 'Premium Plan',
    subtitle: 'For Big Businesses',
    price: '$99.10',
    period: '/ Monthly',
    features: [
      'Email marketing',
      'Unlimited chat history',
      'Unlimited landing pages',
      'Automation templates',
      'Great Customer Support',
    ],
    btnClass: 'btn-one-light',
    delay: '400ms',
  },
];

function Pricing (){
  return (
    <section className="pricing-section-two have-after pt-120 pb-120">
      <figure className="sec-shape">
        <img src="/assets/images/shape/pricing-four-shape.png" alt="Pricing Shape" />
      </figure>
      <div className="container">
        <div className="sec-title center mb-30">
          <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">pricing plan</h6>
          <h2 className="title wow splt-txt" data-splitting>Secure the success of your <br /> business journey…</h2>
          <p className="text wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms"> Business consulting is a dynamic and multifaceted field that plays a pivotal <br />role in helping organizations thrive in today's competitive landscape.</p>
        </div>
        <div className="row g-4 align-items-end">
          {pricingData.map((plan) => (
            <div className="col-md-6 col-xl-4 wow fadeInUp" data-wow-delay={plan.delay} data-wow-duration="1500ms" key={plan.id}>
              <div className={`pricing-block-two ${plan.active}`}>
                {plan.popular && <div className="popular">Popular Package</div>}
                <div className="inner-box">
                  <figure className="shape">
                    <img src="/assets/images/shape/pricing-shape.png" alt="Pricing Shape" />
                  </figure>
                  <div className="top">
                    <span className="title">{plan.title}</span>
                    <p className="sub-title">{plan.subtitle}</p>
                  </div>
                  <ul className="list">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="bottom">
                    <h3 className="title">{plan.price}<span>{plan.period}</span></h3>
                    <h6 className="sub-title">{plan.subtitle}</h6>
                  </div>
                  <Link href="/page-pricing" className={`${plan.btnClass} mt-50`}>Choose Package</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;