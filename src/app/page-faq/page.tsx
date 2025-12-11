import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import FaqInner from "../sections/faq/FaqInner";

export const metadata = {
  title: `Faqs Page || ${SITE_NAME}`,
};

function Faqs() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="FAQ" pageBigTitle="FAQ" />
            <FaqInner />
        </LayoutWrapper>
        </>
    )
}
export default Faqs