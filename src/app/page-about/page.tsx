import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import About from "../sections/AboutUs/About";
import Client from "../sections/AboutUs/Client";
import Video from "../sections/home3/Video";
import Pricing from "../sections/AboutUs/Pricing";
import Team from "../sections/home3/Team";
import Testimonial from "../sections/home4/Testimonial";
import Contact from "../sections/home4/Contact";

export const metadata = {
  title: `About Pages || ${SITE_NAME}`,
};

function AboutPage() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="About Us" pageBigTitle="About" />
                <About/>
                <Client />
                <Video />
                <Pricing />
                <Team />
                <Testimonial />
                <Contact />
        </LayoutWrapper>
        </>
    )
}
export default AboutPage