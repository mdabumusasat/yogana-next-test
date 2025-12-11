import React from 'react';
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../sections/home1/Banner";
import Services from "../sections/home1/Services";
import About from '../sections/home1/About';
import Video from '../sections/home1/Video';
import Packages from '../sections/home1/Packages';
import Featured from "../sections/home1/FeaturedDark";
import Testimonial from "../sections/home1/Testimonial";
import Instagram from "../sections/home1/InstagramDark";
import News from "../sections/home1/NewsDark";

export const metadata = {
  title: `Home Layout1 Dark || ${SITE_NAME}`,
};

function Home1Dark() {
    return (
        <>
        <LayoutWrapper darkMode="1">
            <Banner />
            <Services />
            <About />
            <Video />
            <Packages />
            <Featured />
            <Testimonial />
            <Instagram />
            <News />
        </LayoutWrapper>
        </>
    );
}

export default Home1Dark