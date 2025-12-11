import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import BlogDetails from "../sections/blog/BlogDetails";

export const metadata = {
  title: `News Details || ${SITE_NAME}`,
};

function NewsDetailsPage() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="Blog Details" pageBigTitle="Blog" />
            <BlogDetails />
        </LayoutWrapper>
        </>
    )
}
export default NewsDetailsPage