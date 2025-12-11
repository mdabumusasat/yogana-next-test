import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ShopDetails from "../sections/shop/ShopDetails";

export const metadata = {
  title: `Product Details || ${SITE_NAME}`,
};

function ProductDetails() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="Product Details" pageBigTitle="Product" />
            <ShopDetails />
        </LayoutWrapper>                
        </>
    )
}
export default ProductDetails;