import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ShopSidebar from "../sections/shop/ShopSidebar";

export const metadata = {
  title: `Product Sidebar || ${SITE_NAME}`,
};

function ProductSidebar() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="Product Sidebar" pageBigTitle="Product" />
            <ShopSidebar/>
        </LayoutWrapper>
                
        </>
    )
}
export default ProductSidebar