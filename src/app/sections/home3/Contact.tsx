"use client";

import React from "react";

const ContactSectionThree = () => {
  return (
    <section id="contact" className="contact-section-three">
      {/* Background Images */}
      <div
        className="bg bg-image"
        style={{ backgroundImage: "url(/assets/images/resource/contact-bg3.jpg)" }}
      ></div>

      <div className="outer-box">
        <div
          className="bg bg-image"
          style={{ backgroundImage: "url(/assets/images/resource/contact-bg4.jpg)" }}
        ></div>

        {/* Form Column */}
        <div className="form-column">
          <div className="inner-column">
            <div className="contact-form-three wow fadeInLeft">
              <div className="sec-title">
                <span className="sub-title">Contact us</span>
                <h2 className="words-slide-up text-split">
                  Your Journey to Yoga Starts <br /> Here – Contact Us
                </h2>
              </div>

              {/* Contact Form */}
              <form id="contact-form">
                <div className="row gx-3">
                  <div className="form-group col-md-6">
                    <input type="text" name="first_name" placeholder="Name" required />
                  </div>
                  <div className="form-group col-md-6">
                    <input type="email" name="email" placeholder="Email" required />
                  </div>
                  <div className="form-group col-md-6">
                    <input type="tel" name="phone" placeholder="Phone" required />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="ChooseOurService"
                      placeholder="Choose Our Service"
                      required
                    />
                  </div>
                  <div className="form-group col-lg-12">
                    <textarea
                      name="form_message"
                      placeholder="Write Message..."
                      required
                    ></textarea>
                  </div>

                  <div className="form-group col-lg-6">
                    <button type="submit" className="theme-btn btn-style-one w-auto">
                      <span className="btn-title">Submit Now</span>
                    </button>
                  </div>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionThree;
