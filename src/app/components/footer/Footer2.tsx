"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="main-footer footer-style-two">
      {/* Background Image */}
      <div
        className="bg bg-image"
        style={{ backgroundImage: "url(/assets/images/background/bg-footer2.jpg)" }}
      ></div>
      {/* Widgets Section */}
      <div className="widgets-section">
        <div className="footer1-1 bounce-x"></div>
        <div className="footer-pattrn1 bounce-y"></div>
        <div className="auto-container">
          <div className="row">
            {/* Column 1 */}
            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInUp">
              <div className="footer-widget about-widget">
                <div className="logo">
                  <Link href="/">
                    <img src="/assets/images/logo-2.png" alt="Logo" />
                  </Link>
                </div>
                <div className="text">
                  Proin efficitur, mauris vel condimentum pulvinar, velit orci
                  consectetur ligul.
                </div>
                {/* Subscribe Form */}
                <div className="subscribe-form">
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        id="Yemail"
                        name="Yemail"
                        className="email"
                        placeholder="Enter Your E-mail"
                        required
                      />
                      <button type="button" className="theme-btn">
                        <span className="btn-title">
                          <i className="fa-sharp fa-thin fa-paper-plane"></i>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                {/* Social Icons */}
                <ul className="social-icon">
                  <li>
                    <Link href="#">
                      <i className="icon fa fa-x"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon fab fa-pinterest-p"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon fab fa-vimeo-v"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Column 2 */}
            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInLeft">
              <div className="footer-widget links-widget">
                <h3 className="widget-title">Links</h3>
                <ul className="user-links">
                  <li><Link href="#">About</Link></li>
                  <li><Link href="#">Pricing</Link></li>
                  <li><Link href="#">Shop</Link></li>
                  <li><Link href="#">Contact</Link></li>
                </ul>
              </div>
            </div>
            {/* Column 3 */}
            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInLeft">
              <div className="footer-widget timetable-widget">
                <h3 className="widget-title">Open Hours</h3>
                <ul className="timetable">
                  <li>
                    Monday to Friday : <span>09:00-20:00</span>
                  </li>
                  <li>
                    Saturday: <span>09:00-18:00</span>
                  </li>
                  <li>
                    Sunday: <span>09:00-18:00</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Column 4 */}
            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInRight">
              <div className="footer-widget contacts-widget">
                <h3 className="widget-title">Contact</h3>
                <div className="text">
                  2972 Westheimer Rd. Santa Ana, Illinois
                </div>
                <ul className="contact-info">
                  <li>
                    <Link className="text-style-two" href="tel:907-555-0101">
                      (907) 555-0101
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-style-one"
                      href="#"
                    >
                      yourmail@company.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              © 2025 Yogana, <Link href="/">All Rights Reserved</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
