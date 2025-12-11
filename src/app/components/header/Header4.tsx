"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLinks from "../NavLinks";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import MenuSingle from "../MenuSingle";

export default function HeaderFour({ handleOpen, handleRemove, searchToggle, scroll }) {
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

  const Logo = isDarkMode ? "/assets/images/logo-2.png" : "/assets/images/logo.png";
  const MenuComponent = isSingleMenu ? MenuSingle : NavLinks;

  const LogoImage = () => (
    <Image
      src={Logo}
      alt="Logo"
      width={150}
      height={50}
      style={{ width: "auto", height: "auto" }}
      priority
    />
  );


  return (
    <>
    <header className={`main-header header-style-six ${scroll ? "fixed-header" : ""}${
        searchToggle ? " search-active" : ""}`}>
      <div className="outer-box">
        <div className="header-lower">
          <div className="main-box">
            <div className="nav-outer">
              <nav className="nav main-menu">
                <MenuComponent extraClassName="main-menu-list" />
              </nav>
            </div>
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <LogoImage />
                </Link>
              </div>
            </div>
            <div className="outer-box">
              <button className="ui-btn search-btn" onClick={handleToggle}>
                <i className="icon fal fa-search"></i>
              </button>
              <div className="btn-box d-none d-xl-block">
                <Link href="/page-contact" className="theme-btn btn-style-one">
                  <span className="btn-title">Book Now</span>
                </Link>
              </div>
              <div className="mobile-nav-toggler"  onClick={handleOpen}>
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleRemove}></div>
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link href="/">
                <img src="/assets/images/logo-2.png" alt="" />
              </Link>
            </div>
            <div className="close-btn" onClick={handleRemove}>
              <i className="icon fa fa-times"></i>
            </div>
          </div>
          <ul className="navigation">
           <MobileMenu/>
          </ul>
          <ul className="contact-list-one">
            <li>
              <i className="icon lnr-icon-envelope1"></i>
              <span className="title">Send Email</span>
              <div className="text"><a href="#">alma.lawson@example.com</a></div>
            </li>
          </ul>
          <ul className="social-links">
            <li><a><i className="icon fa fa-x"></i></a></li>
            <li><a><i className="icon fab fa-facebook-f"></i></a></li>
            <li><a><i className="icon fab fa-pinterest-p"></i></a></li>
            <li><a><i className="icon fab fa-vimeo-v"></i></a></li>
          </ul>
        </nav>
      </div>
      <div className={`search-popup ${isSearchActive ? "active" : ""}`}>
        <span className="search-back-drop" onClick={handleToggle}></span>
        <button className="close-search" onClick={handleToggle}>
          <span className="fa fa-times"></span>
        </button>
        <div className="search-inner">
          <form>
            <div className="form-group">
              <input type="search" placeholder="Search..." required />
              <button type="submit"><i className="fa fa-search"></i></button>
            </div>
          </form>
        </div>
      </div>
        <div
          className={`sticky-header ${
            scroll ? "fixed-header animated slideInDown" : ""
          }`}
        >
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <Link href="/">
                  <LogoImage />
                </Link>
              </div>
              <div className="nav-outer">
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <ul className="navigation onepage-nav clearfix">
                      <MenuComponent extraClassName="main-menu-list" />
                    </ul>
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
}