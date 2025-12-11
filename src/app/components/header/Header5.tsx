"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLinks from "../NavLinks";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import MenuSingle from "../MenuSingle";

function Header5({ handleOpen, searchToggle, handleRemove, scroll }) {
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
    <header className={`main-header header-style-one style-home5 ${scroll ? "fixed-header" : ""}${
        searchToggle ? " search-active" : ""
      }`}>
      <div className="outer-box">
        <div className="header-top">
          <div className="inner-container">
            <div className="top-left">
              <ul className="list-style-one">
                <li><Link href="#">ENG</Link></li>
              </ul>
            </div>
            <div className="top-right">
              <ul className="list-style-two">
                <li>
                  Mon to Sat: 9:00am – 6:00pm Sun: <Link className="active" href="#">Closed</Link>
                </li>
              </ul>
              <ul className="social-icon-one">
                <li><Link href="#"><span className="icon fa fa-x"></span></Link></li>
                <li><Link href="#"><span className="icon fab fa-facebook-f"></span></Link></li>
                <li><Link href="#"><span className="icon fab fa-pinterest-p"></span></Link></li>
                <li><Link href="#"><span className="icon fab fa-vimeo-v"></span></Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Header Lower */}
        <div className="header-lower">
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <Link href="/"><LogoImage /></Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="nav-outer">
              <nav className="nav main-menu">
                <MenuComponent extraClassName="main-menu-list" />
              </nav>
            </div>
            {/* Outer Box */}
            <div className="outer-box">
              <button className="ui-btn search-btn" onClick={handleToggle}>
                <i className="icon fal fa-search"></i>
              </button>
              <div className="divider"></div>
              <div className="btn-box">
                <Link href="/page-contact" className="theme-btn btn-style-transparent">
                  <span className="btn-title">CONTACT US</span>
                </Link>
              </div>
              <div className="mobile-nav-toggler" onClick={handleOpen}>
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleRemove}></div>
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link href="/"><img src="/assets/images/logo-2.png" alt="" /></Link>
            </div>
            <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times"></i></div>
          </div>
          <ul className="navigation clearfix">
            <MobileMenu />
          </ul>
        </nav>
      </div>

      {/* Search Popup */}

      <div className={`search-popup ${isSearchActive ? "active" : ""}`}>
        <span className="search-back-drop" onClick={handleToggle}></span>
        <button className="close-search" onClick={handleToggle}><span className="fa fa-times"></span></button>
        <div className="search-inner">
          <form method="post" action="/">
            <div className="form-group">
              <input type="search" name="search-field" placeholder="Search..." required />
              <button type="submit"><i className="fa fa-search"></i></button>
            </div>
          </form>
        </div>
      </div>


            {/* ===== Sticky Header ===== */}
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
                  <MenuComponent extraClassName="main-menu-list" />
                </div>
              </nav>
              <div className="mobile-nav-toggler" onClick={handleOpen}>
                <span className="icon lnr-icon-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header5;