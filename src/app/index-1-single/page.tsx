import React from 'react';
import { SITE_NAME } from "../Head";
import Banner from "../sections/home1/Banner";
import Services from "../sections/home1/Services";
import About from '../sections/home1/About';
import Video from '../sections/home1/Video';
import Packages from '../sections/home1/Packages';
import Featured from "../sections/home1/Featured";
import Testimonial from "../sections/home1/Testimonial";
import Instagram from "../sections/home1/Instagram";
import News from "../sections/home1/News";
import LayoutWrapper from "../LayoutWrapper";

export const metadata = {
  title: `Home Layout1 Single || ${SITE_NAME}`,
};

function Home1Single() {
    return (
        <>
        <LayoutWrapper menuType="single">
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

export default Home1Single