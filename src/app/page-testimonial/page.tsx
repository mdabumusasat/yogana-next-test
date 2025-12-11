import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import TestimonialInner from "../sections/testimonial/TestimonialInner";

export const metadata = {
  title: `Testimonial || ${SITE_NAME}`,
};


function TestimonialsPage() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="Testimonial" pageBigTitle="Testimonial"  />
            <TestimonialInner />
        </LayoutWrapper>
        </>
    )
}
export default TestimonialsPage