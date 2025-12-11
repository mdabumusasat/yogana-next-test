import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ShopCheckout from "../sections/shop/ShopCheckout";

export const metadata = {
  title: `Checkout Page || ${SITE_NAME}`,
};

function Chackout() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="Checkout" pageBigTitle="Checkout" />
            <ShopCheckout/>
        </LayoutWrapper>                
        </>
    )
}
export default Chackout