import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../sections/home3/Banner";
import Service from "../sections/home3/Service";
import About from "../sections/home3/About";
import Video from "../sections/home3/Video";
import Gallery from "../sections/home3/Gallery";
import Pricing from "../sections/home3/Pricing";
import Testimonial from "../sections/home2/Testimonial";
import Team from "../sections/home3/Team";
import Contact from "../sections/home3/Contact";
import News from "../sections/home3/News";

export const metadata = {
  title: `Home Layout3 Dark || ${SITE_NAME}`,
};

function Home3Dark() {
    return (
        <>
        <LayoutWrapper HeaderStyle="three" darkMode="1">
            <Banner />
            <Service />
            <About />
            <Video />
            <Gallery />
            <Pricing />
            <Testimonial />
            <Team />
            <Contact />
            <News />
        </LayoutWrapper>
        </>
    );
}

export default Home3Dark