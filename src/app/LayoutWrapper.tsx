"use client";

import React, { useEffect, useState } from "react";
import BackToTop from "../app/components/elements/BackToTop";
import Footer from "./components/footer/Footer";
import Footer2 from "./components/footer/Footer2";
import Header from "./components/header/Header";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Header4 from "./components/header/Header4";
import Header5 from "./components/header/Header5";
import Header6 from "./components/header/Header6";
import HeaderInner from "./components/header/HeaderInner";
import "animate.css/animate.min.css";

let WOW: any;
if (typeof window !== "undefined") {
  WOW = require("wowjs/dist/wow").WOW;
}

interface LayoutProps {
  children: React.ReactNode;
  HeaderStyle?: string;
  FooterStyle?: string;
  darkMode?: string;
  menuType?: string;
}

const LayoutWrapper: React.FC<LayoutProps> = ({
  children,
  HeaderStyle,
  FooterStyle,
  darkMode,
  menuType,
}) => {
  const [scroll, setScroll] = useState(false);
  const [searchToggle, setSearchToggled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // WOW animations
  useEffect(() => {
    if (WOW) new WOW({ live: false }).init();
  }, []);

  // Dark mode
  useEffect(() => {
    if (darkMode === "1") {
      document.body.setAttribute("data-tm-layout", "dark");
      document.body.classList.add("dark");
    } else {
      document.body.removeAttribute("data-tm-layout");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Menu type
  useEffect(() => {
    if (menuType === "single") document.body.classList.add("single-menu");
    else document.body.classList.remove("single-menu");
  }, [menuType]);

  // Handlers
  const handleOpen = () => document.body.classList.add("mobile-menu-visible");
  const handleOpen2 = () => document.body.classList.add("company-info-visible");
  const handleRemove = () =>
    document.body.classList.remove("mobile-menu-visible");
  const handleRemove2 = () =>
    document.body.classList.remove("company-info-visible");
  const handleToggle = () =>
    document.body.classList.toggle("search-popup-visible");

  const renderHeader = () => {
    const props = {
      handleOpen,
      handleRemove,
      handleRemove2,
      handleToggle,
      scroll,
      searchToggle,
    };

    switch (HeaderStyle) {
      case "two":
        return <Header2 {...props} />;
      case "three":
        return <Header3 {...props} />;
      case "four":
        return <Header4 {...props} />;
      case "five":
        return <Header5 {...props} />;
      case "six":
        return <Header6 {...props} />;
      case "headerInner":
        return <HeaderInner {...props} />;
      default:
        return <Header {...props} />;
    }
  };

  const renderFooter = () => {
    switch (FooterStyle) {
      case "two":
        return <Footer2 />;
      default:
        return <Footer />;
    }
  };

  return (
    <div id="top">
      <div className="page-wrapper">
        {renderHeader()}
        {children}
        {renderFooter()}
        <BackToTop />
      </div>
    </div>
  );
};

export default LayoutWrapper;
