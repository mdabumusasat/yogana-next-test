"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLinks from "../NavLinks";
import MobileMenu from "../MobileMenu";
import MenuSingle from "../MenuSingle";

function HeaderInner({ handleOpen, searchToggle, handleRemove, scroll }) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const handleToggle = () => {
    setIsSearchActive(!isSearchActive);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSingleMenu, setIsSingleMenu] = useState(false);
  
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.body.getAttribute("data-tm-layout") === "dark";
      setIsDarkMode(isDark);

      setIsSingleMenu(document.body.classList.contains("single-menu"));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-tm-layout"],
    });
    return () => observer.disconnect();
  }, []);
  const MenuComponent = isSingleMenu ? MenuSingle : NavLinks;

  return (
    <>
      <header
        className={`main-header header-style-one ${scroll ? "fixed-header" : ""}${
        searchToggle ? " search-active" : ""
      }`}>
        <div className="outer-box">
          <div className="header-top">
            <div className="inner-container">
              <div className="top-left">
                <ul className="list-style-one">
                  <li>
                    <Link href="#">alma.lawson@example.com</Link>
                  </li>
                </ul>
              </div>
              <div className="top-right">
                <ul className="list-style-two">
                  <li>
                    Mon to Sat: 9:00am – 6:00pm Sun:{" "}
                    <Link className="active" href="#">
                      Closed
                    </Link>
                  </li>
                </ul>
                <ul className="social-icon-one">
                  <li><Link href="#"><i className="icon fa fa-x" /></Link></li>
                  <li><Link href="#"><i className="icon fab fa-facebook-f" /></Link></li>
                  <li><Link href="#"><i className="icon fab fa-pinterest-p" /></Link></li>
                  <li><Link href="#"><i className="icon fab fa-vimeo-v" /></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-lower">
            <div className="main-box">
              {/* Logo */}
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <img src="/assets/images/logo.png" alt="Logo" />
                  </Link>
                </div>
              </div>
              {/* Navigation */}
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <MenuComponent extraClassName="main-menu-list" />
                </nav>
              </div>
              {/* Right Tools */}
              <div className="outer-box">
                {/* Search */}
                <button className="ui-btn search-btn" onClick={handleToggle}>
                  <i className="icon fal fa-search"></i>
                </button>
                <div className="divider"></div>
                {/* Contact Btn */}
                <div className="btn-box">
                  <Link href="/page-contact" className="theme-btn btn-style-two">
                    <span className="btn-title">Book Now</span>
                  </Link>
                </div>
                {/* Mobile Menu Toggle */}
                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleRemove} />
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/">
                  <img src="/assets/images/logo-2.png" alt="Logo" />
                </Link>
              </div>
              <div className="close-btn" onClick={handleRemove}>
                <i className="icon fa fa-times"></i>
              </div>
            </div>
                <MobileMenu />
            <ul className="contact-list-one">
              <li>
                <i className="icon lnr-icon-envelope1"></i>
                <span className="title">Send Email</span>
                <div className="text">
                  <Link href="#">alma.lawson@example.com</Link>
                </div>
              </li>
            </ul>
            <ul className="social-links">
              <li><Link href="#"><i className="icon fa fa-x" /></Link></li>
              <li><Link href="#"><i className="icon fab fa-facebook-f" /></Link></li>
              <li><Link href="#"><i className="icon fab fa-pinterest-p" /></Link></li>
              <li><Link href="#"><i className="icon fab fa-vimeo-v" /></Link></li>
            </ul>
          </nav>
        </div>

        {/* Search Popup */}
        <div className={`search-popup ${isSearchActive ? "active" : ""}`}>
          <span className="search-back-drop" onClick={handleToggle}></span>
          <button className="close-search" onClick={handleToggle}>
            <span className="fa fa-times"></span>
          </button>
          <div className="search-inner">
            <form>
              <div className="form-group">
                <input type="search" placeholder="Search..." required />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sticky Header */}
        <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <Link href="/">
                  <img src="/assets/images/logo.png" alt="Logo" />
                </Link>
              </div>

              <div className="nav-outer">
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <MenuComponent extraClassName="main-menu-list" />
                  </div>
                </nav>

                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderInner;
