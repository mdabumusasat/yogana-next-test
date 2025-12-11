import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ServiceGrid from "../sections/services/ServiceGrid";
import Instagram from "../sections/pricing/Instagram";

export const metadata = {
  title: `Services Page || ${SITE_NAME}`,
};


function ServicesPage() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="Service Grid" pageBigTitle="Service" />
            <ServiceGrid />
            <Instagram />
        </LayoutWrapper>                
        </>
    )
}
export default ServicesPage