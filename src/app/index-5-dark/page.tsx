import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../sections/home5/Banner";
import Marquee from "../sections/home5/Marquee";
import About from "../sections/home5/About";
import HeroBanner from "../sections/home5/HeroBanner";
import Funfact from "../sections/home2/Funfact";
import Services from "../sections/home5/Services";
import Pricing from "../sections/home5/Pricing";
import Contact from "../sections/home5/Contact";
import Featured from "../sections/home5/Featured";
import Client from "../sections/home5/Clients";
import Testimonials from "../sections/home5/Testimonials";
import News from "../sections/home2/News";

export const metadata = {
  title: `Home Layout5 Dark || ${SITE_NAME}`,
};

function Home5Dark() {
    return (
        <>
        <LayoutWrapper HeaderStyle="five" darkMode="1">
            <Banner />
            <Marquee />
            <About />
            <HeroBanner />
            <Funfact />
            <Services />
            <Pricing />
            <Contact />
            <Featured />
            <Client />
            <Testimonials />
            <News />
        </LayoutWrapper>
        </>
    );
}

export default Home5Dark