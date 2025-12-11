"use client";
import React from "react";
import { useState } from "react";

export default function FaqSection() {
  const faqsLeft = [
    {
      question: "What warranties do I have for installation?",
      answer:
        "There are many variations of passages of available, but the majority have suffered alteration in some form.",
    },
    {
      question: "What is included in your services?",
      answer:
        "There are many variations of passages of available, but the majority have suffered alteration in some form.",
    },
    {
      question: "What are the payment methods?",
      answer:
        "There are many variations of passages of available, but the majority have suffered alteration in some form.",
    },
    {
      question: "How fast I get my order?",
      answer:
        "There are many variations of passages of available, but the majority have suffered alteration in some form.",
    },
  ];

  const faqsRight = [
    {
      question: "Produce Your Own Clean Save The Environment",
      answer:
        "Reduce, reuse, and recycle: This is a classic but effective way to reduce waste and conserve resources.",
    },
    {
      question: "On-Site Service And Support For Certification",
      answer:
        "On-site service and support for certification refers to the assistance provided during the certification process.",
    },
    {
      question: "Light Source For Stable Conversion Efficiency",
      answer:
        "In solar energy, stable light sources provide consistent output to measure solar cell performance accurately.",
    },
  ];

  const [leftActive, setLeftActive] = useState(0);
  const [rightActive, setRightActive] = useState(0);

  const toggleLeft = (index) => {
    setLeftActive(leftActive === index ? null : index);
  };

  const toggleRight = (index) => {
    setRightActive(rightActive === index ? null : index);
  };

  return (
    <section className="faqs-section pt-120 pb-120">
      <div className="auto-container">
        <div className="row">
          <div className="faq-column col-lg-6">
            <div className="inner-column">
              <ul className="accordion-box style-two">
                {faqsLeft.map((item, index) => (
                  <li
                    className={`accordion block ${
                      leftActive === index ? "active-block" : ""
                    }`}
                    key={index}>
                    <div
                      className={`acc-btn ${leftActive === index ? "active" : ""}`}
                      onClick={() => toggleLeft(index)}>
                      {item.question}
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div
                      className={`acc-content ${
                        leftActive === index ? "current" : ""
                      }`}>
                      <div className="content">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right Column */}
          <div className="faq-column col-lg-6">
            <div className="inner-column">
              <ul className="accordion-box style-two">
                {faqsRight.map((item, index) => (
                  <li
                    className={`accordion block ${
                      rightActive === index ? "active-block" : ""
                    }`}
                    key={index}>
                    <div
                      className={`acc-btn border-bottom-0 ${
                        rightActive === index ? "active" : ""
                      }`}
                      onClick={() => toggleRight(index)}>
                      {item.question}
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div
                      className={`acc-content ${rightActive === index ? "current" : ""}`}>
                      <div className="content border-bottom-0">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
