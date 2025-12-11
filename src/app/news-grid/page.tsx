import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import NewsGrid from "../sections/blog/NewsGrid";

export const metadata = {
  title: `News Grid || ${SITE_NAME}`,
};

function NewsGridPage() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="News Grid" pageBigTitle="Blog" />
            <NewsGrid />
        </LayoutWrapper>                
        </>
    )
}
export default NewsGridPage