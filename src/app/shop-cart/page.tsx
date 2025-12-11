import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ShopCart from "../sections/shop/ShopCart";

export const metadata = {
  title: `Shop Cart || ${SITE_NAME}`,
};

function CartPage() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="Cart" pageBigTitle="Cart" />
            <ShopCart />
        </LayoutWrapper>                
        </>
    )
}
export default CartPage