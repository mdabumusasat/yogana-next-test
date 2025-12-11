import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../sections/home2/Banner";
import Marquee from "../sections/home2/Marquee";
import About from "../sections/home2/About";
import Funfact from "../sections/home2/Funfact";
import Services from "../sections/home2/Services";
import Banner2 from "../sections/home2/Banner2";
import Team from "../sections/home2/Team";
import Product from "../sections/home2/Product";
import Pricing from "../sections/home2/Pricing";
import Testimonial from "../sections/home2/Testimonial";
import News from "../sections/home2/News";

export const metadata = {
  title: `Home Layout2 || ${SITE_NAME}`,
};

export default function Home2() {
  return (
    <LayoutWrapper HeaderStyle="two">
      <Banner />
      <Marquee />
      <About />
      <Funfact />
      <Services />
      <Banner2 />
      <Team />
      <Product />
      <Pricing />
      <Testimonial />
      <News />
    </LayoutWrapper>
  );
}