import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../sections/home6/Banner";
import About from "../sections/home6/About";
import Marquee from "../sections/home6/Marquee";
import Services from "../sections/home6/Services";
import About2 from "../sections/home6/About2";
import HeroBanner from "../sections/home6/HeroBannerDark";
import Teams from "../sections/home6/Teams";
import ChooseUs from "../sections/home6/ChooseUs";
import FunFact from "../sections/home6/FunFact";
import Pricing from "../sections/home6/Pricing";
import Testimonials from "../sections/home6/Testimonial";
import News from "../sections/home6/News";

export const metadata = {
  title: `Home Layout6 Dark || ${SITE_NAME}`,
};

function Home6Dark() {
    return (
        <>
        <LayoutWrapper HeaderStyle="six" darkMode="1">
            <Banner />
            <About />
            <Marquee />
            <Services />
            <About2 />
            <HeroBanner />
            <Teams />
            <ChooseUs />
            <FunFact />
            <Pricing />
            <Testimonials />
            <News />
        </LayoutWrapper>
        </>
    );
}

export default Home6Dark