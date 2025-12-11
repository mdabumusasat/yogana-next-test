import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import PricingInner from "../sections/pricing/PricingInner";
import Instagram from "../sections/pricing/Instagram";

export const metadata = {
  title: `Pricing Page || ${SITE_NAME}`,
};

function PricingPage() {
    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="Pricing Table" pageBigTitle="Pricing" />
            <PricingInner />
            <Instagram />
        </LayoutWrapper>
        </>
    )
}
export default PricingPage