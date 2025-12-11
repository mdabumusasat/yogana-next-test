import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ShopProduct from "../sections/shop/ShopProduct";

export const metadata = {
  title: "Products Page || Consultez - Business Consulting React Next JS Template",
};

function Product() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="Product" pageBigTitle="Shop" />
            <ShopProduct />
        </LayoutWrapper>
        </>
    )
}
export default Product