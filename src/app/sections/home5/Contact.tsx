"use client";
import React, { useState } from "react";
import PriceFilter from "../../components/elements/PriceFilter2";

const faqs = [
  {
    question: "What should I bring or wear to a yoga class?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum cubilia eget feugiat sociis augue senectus ligula.",
  },
  {
    question: "How do I choose the right yoga class or teacher?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum cubilia eget feugiat sociis augue senectus ligula.",
  },
  {
    question: "What’s the best time to do yoga?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum cubilia eget feugiat sociis augue senectus ligula.",
    defaultOpen: true,
  },
];

const ContactSectionTwo = () => {
  const [openIndex, setOpenIndex] = useState(
    faqs.findIndex((faq) => faq.defaultOpen) || 0
  );

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="contact" className="contact-section-two style-two">
      <div
        className="bg bg-image"
        style={{ backgroundImage: "url(/assets/images/background/bg-contact5.png)" }}
      ></div>
      <div
        className="bg bg-image2"
        style={{ backgroundImage: "url(/assets/images/background/bg-contact6.png)" }}
      ></div>
      <div className="faq1-shape-1 bounce-y"></div>
      <div className="container">
        <div className="outer-box">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInRight">

                <div className="sec-title">
                  <figure className="image">
                    <img src="/assets/images/icons/icon1.png" alt="Icon" />
                  </figure>
                  <span className="sub-title">Wellness Spa Retreats</span>
                  <h2>Every Question Matters on Your Yoga Journey</h2>
                  <div className="text">
                    With over four decades of experience providing solutions to
                    largescale enterprises throughout the globe time
                  </div>
                </div>

                <ul className="accordion-box style-three">
                  {faqs.map((faq, index) => (
                    <li
                      key={index}
                      className={`accordion block ${
                        openIndex === index ? "active border-0" : ""
                      }`}>
                      <div
                        className="acc-btn"
                        onClick={() => toggleAccordion(index)}>
                        {faq.question}{" "}
                        <i className="arrow fa fa-arrow-right"></i>
                      </div>
                      <div
                        className={`acc-content ${
                          openIndex === index ? "current" : ""
                        }`}>
                        <div className="content">
                          <div className="text">{faq.answer}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="contact-form-two wow fadeInLeft">
                  <div className="bg bg-pattern-1"></div>
                  <h3 className="title">Request A Quote</h3>
                  <form method="post" id="contact-form">
                    <div className="row gx-3">
                      {[
                        ["First Name", "first_name"],
                        ["Last Name", "last_name"],
                        ["Email", "email"],
                        ["Phone", "phone"],
                        ["Company", "company"],
                        ["Address", "address"],
                      ].map(([placeholder, name], idx) => (
                        <div className="form-group col-lg-6 col-md-6" key={idx}>
                          <input type="text" name={name} placeholder={placeholder} required />
                        </div>
                      ))}
                      <div className="form-group col-lg-12">
                        <label>Budget Range</label>
                        <PriceFilter/>
                      </div>
                      <div className="form-group col-lg-12">
                        <textarea
                          name="form_message"
                          className="form-control required"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="form-group col-lg-12">
                        <button
                          type="submit"
                          className="theme-btn btn-style-two hover-light"
                          name="submit-form">
                          <span className="btn-title">SUBMIT REQUEST</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionTwo;
