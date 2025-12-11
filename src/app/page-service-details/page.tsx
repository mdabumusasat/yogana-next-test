import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ServiceDetails from "../sections/services/ServiceDetails";

export const metadata = {
  title: `Services Details || ${SITE_NAME}`,
};

function ServiceDetailsPage() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="Service Details" pageBigTitle="Service" />
            <ServiceDetails />
        </LayoutWrapper>                
        </>
    )
}
export default ServiceDetailsPage