import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ContactInner from "../sections/contact/ContactInner";

export const metadata = {
  title: `Contact Page || ${SITE_NAME}`,
};

function Contact() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="Contact Us" pageBigTitle="Contact" />
            <ContactInner />
        </LayoutWrapper>                
        </>
    )
}
export default Contact