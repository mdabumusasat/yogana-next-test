import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import Gallery from "../sections/gallery/Gallery";
import Instagram from "../sections/pricing/Instagram";

export const metadata = {
  title: `Project Page || ${SITE_NAME}`,
};

function PortfolioPage() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="Gallery" pageBigTitle="Gallery" />
            <Gallery />
            <Instagram />
        </LayoutWrapper>                
        </>
    )
}
export default PortfolioPage