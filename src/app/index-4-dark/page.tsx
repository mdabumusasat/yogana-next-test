import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../sections/home4/Banner";
import About from "../sections/home4/About";
import Funfact from "../sections/home2/Funfact";
import Service from "../sections/home4/Service";
import ChooseUs from "../sections/home4/ChooseUs";
import Packages from "../sections/home4/Packages";
import Teams from "../sections/home4/TeamsDark";
import Testimonial from "../sections/home4/TestimonialDark";
import Contact from "../sections/home4/Contact";
import News from "../sections/home3/News";

export const metadata = {
  title: `Home Layout4 Dark || ${SITE_NAME}`,
};

function Home4Dark() {
    return (
        <>
        <LayoutWrapper HeaderStyle="four" darkMode="1">
            <Banner />
            <About />
            <Funfact />
            <Service />
            <ChooseUs />
            <Packages />
            <Teams />
            <Testimonial />
            <Contact />
            <News />
        </LayoutWrapper>
        </>
    );
}

export default Home4Dark