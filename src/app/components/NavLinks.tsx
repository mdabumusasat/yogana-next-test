import Link from 'next/link';

function NavLinks({ extraClassName }){
    return (
        <>
        <ul className={`navigation ${extraClassName}`}>
          <li className="current dropdown"><Link href="/">Home</Link>
            <ul>
              <li><Link href="/">Home page 01</Link></li>
              <li><Link href="/index-2">Home page 02</Link></li>
              <li><Link href="/index-3">Home page 03</Link></li>
              <li><Link href="/index-4">Home page 04</Link></li>
              <li><Link href="/index-5">Home page 05</Link></li>
              <li><Link href="/index-6">Home page 06</Link></li>
              <li className="dropdown"><Link href="#">Header Styles</Link>
                <ul>
                  <li><Link href="/">Header Style One</Link></li>
                  <li><Link href="/index-2">Header Style Two</Link></li>
                  <li><Link href="/index-3">Header Style Three</Link></li>
                  <li><Link href="/index-4">Header Style Four</Link></li>
                  <li><Link href="/index-5">Header Style Five</Link></li>
                  <li><Link href="/index-6">Header Style Six</Link></li>
                </ul>
              </li>
              <li className="dropdown"><Link href="#">Single Layout</Link>
                <ul>
                  <li><Link href="/index-1-single">Single Home 01</Link></li>
                  <li><Link href="/index-2-single">Single Home 02</Link></li>
                  <li><Link href="/index-3-single">Single Home 03</Link></li>
                  <li><Link href="/index-4-single">Single Home 04</Link></li>
                  <li><Link href="/index-5-single">Single Home 05</Link></li>
                  <li><Link href="/index-6-single">Single Home 06</Link></li>
                </ul>
              </li>
              <li className="dropdown"><Link href="#">Dark Layout</Link>
                <ul>
                  <li><Link href="/index-1-dark">Dark Home 01</Link></li>
                  <li><Link href="/index-2-dark">Dark Home 02</Link></li>
                  <li><Link href="/index-3-dark">Dark Home 03</Link></li>
                  <li><Link href="/index-4-dark">Dark Home 04</Link></li>
                  <li><Link href="/index-5-dark">Dark Home 05</Link></li>
                  <li><Link href="/index-6-dark">Dark Home 06</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="dropdown"><Link href="#">Pages</Link>
            <ul>
              <li><Link href="/page-about">About</Link></li>
              <li><Link href="/page-gallery">Gallery</Link></li>
              <li className="dropdown"><Link href="#">Team</Link>
                <ul>
                  <li><Link href="/page-team">Team List</Link></li>
                  <li><Link href="/page-team-details">Team Details</Link></li>
                </ul>
              </li>
              <li><Link href="/page-testimonial">Testimonial</Link></li>
              <li><Link href="/page-pricing">Pricing</Link></li>
              <li><Link href="/page-faq">FAQ</Link></li>
              <li><Link href="/page-404">Page 404</Link></li>
            </ul>
          </li>
          <li className="dropdown"><Link href="#">Services</Link>
            <ul>
              <li><Link href="/page-services">Services List</Link></li>
              <li><Link href="/page-service-details">Service Details</Link></li>
            </ul>
          </li>
          <li className="dropdown"><Link href="#">Shop</Link>
            <ul>
              <li><Link href="/shop-products">Products</Link></li>
              <li><Link href="/shop-products-sidebar">Products with Sidebar</Link></li>
              <li><Link href="/shop-product-details">Product Details</Link></li>
              <li><Link href="/shop-cart">Cart</Link></li>
              <li><Link href="/shop-checkout">Checkout</Link></li>
            </ul>
          </li>
          <li className="dropdown"><Link href="#">News</Link>
            <ul>
              <li><Link href="/news-grid">News Grid</Link></li>
              <li><Link href="/news-details">News Details</Link></li>
            </ul>
          </li>
          <li><Link href="/page-contact">Contact</Link></li>
        </ul>

        </>
    );
};

export default NavLinks;
