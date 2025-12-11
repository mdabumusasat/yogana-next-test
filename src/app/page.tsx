
import React from 'react';
import { SITE_NAME } from "../app/Head";
import Banner from "../app/sections/home1/Banner";
import Services from "../app/sections/home1/Services";
import About from '../app/sections/home1/About';
import Video from '../app/sections/home1/Video';
import Packages from '../app/sections/home1/Packages';
import Featured from "../app/sections/home1/Featured";
import Testimonial from "../app/sections/home1/Testimonial";
import Instagram from "../app/sections/home1/Instagram";
import News from "../app/sections/home1/News";
import LayoutWrapper from './LayoutWrapper';

export const metadata = {
  title: `Home Layout1 || ${SITE_NAME}`,
};

function Home() {
    return (
        <>
        <LayoutWrapper>
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

export default Home