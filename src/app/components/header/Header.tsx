"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "../NavLinks";
import MobileMenu from "../MobileMenu";
import MenuSingle from "../MenuSingle";

function Header({ handleOpen, handleRemove, handleToggle, scroll }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSingleMenu, setIsSingleMenu] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark =
        document.body.getAttribute("data-tm-layout") === "dark";
      setIsDarkMode(isDark);
    };
    setIsSingleMenu(document.body.classList.contains("single-menu"));

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
      <header className={`main-header header-style-four ${ scroll ? "fixed-header" : "" }`}>
        <div className="outer-box">
          <div className="header-lower">
            <div className="main-box">
              {/* Logo */}
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <LogoImage />
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <MenuComponent extraClassName="main-menu-list" />
                </nav>
              </div>

              {/* Mobile Toggle */}
              <div className="outer-box">
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
                <Link href="/">
                  <img src="/assets/images/logo-2.png" alt="Logo" />
                </Link>
              </div>
              <div className="close-btn" onClick={handleRemove}>
                <i className="icon fa fa-times"></i>
              </div>
            </div>
            <ul className="navigation onepage-nav clearfix">
              <MobileMenu />
            </ul>
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
          </nav>
        </div>

        {/* Search Popup */}
        <div className="search-popup">
          <span className="search-back-drop" onClick={handleToggle}></span>
          <button className="close-search" onClick={handleToggle}>
            <span className="fa fa-times"></span>
          </button>

          <div className="search-inner">
            <form method="post" action="/">
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  placeholder="Search..."
                  required
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sticky Header */}
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

export default Header;
