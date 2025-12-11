"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const products = [
  { img: "/assets/images/resource/product1-1.jpg", title: "Fitness Ball Workout", price: "$32.00", cats: "cat-2" },
  { img: "/assets/images/resource/product1-2.jpg", title: "Gym Essentials Set", price: "$52.00", cats: "cat-1 cat-2" },
  { img: "/assets/images/resource/product1-3.jpg", title: "Sports Gear Bag", price: "$43.00", cats: "cat-1 cat-2 cat-4" },
  { img: "/assets/images/resource/product1-4.jpg", title: "Exercise Stability Balls", price: "$22.00", cats: "cat-1 cat-3" },
  { img: "/assets/images/resource/product1-2.jpg", title: "Gym Essentials Set", price: "$34.00", cats: "cat-1 cat-3 cat-5" },
  { img: "/assets/images/resource/product1-3.jpg", title: "Fitness Ball Workout", price: "$52.00", cats: "cat-2 cat-3 cat-4" },
  { img: "/assets/images/resource/product1-4.jpg", title: "Sports Gear Bag", price: "$25.00", cats: "cat-1 cat-2 cat-5" },
  { img: "/assets/images/resource/product1-1.jpg", title: "Exercise Stability Balls", price: "$30.00", cats: "cat-1 cat-4 cat-5" },
];

export default function PortfolioFilter1() {
  const containerRef = useRef(null);
  const isotopeRef = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    let isMounted = true;

    const loadIso = async () => {
      try {
        const Isotope = (await import("isotope-layout")).default;

        if (isMounted && containerRef.current) {
          isotopeRef.current = new Isotope(containerRef.current, {
            itemSelector: ".masonry-item",
            percentPosition: true,
            masonry: { columnWidth: ".masonry-item" },
            transitionDuration: "0.7s",
          });
        }
      } catch (err) {
        console.error("Isotope failed:", err);
      }
    };
    loadIso();
    return () => {
      isMounted = false;
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
        isotopeRef.current = null;
      }
    };
  }, []);
  useEffect(() => {
    if (isotopeRef.current) {
      isotopeRef.current.arrange({
        filter: filterKey === "*" ? "*" : `.${filterKey}`,
      });
    }
  }, [filterKey]);
  const activeClass = (key) => (key === filterKey ? "filter active" : "filter");

  return (
    <>
      <div className="filters clearfix">
        <ul className="filter-tabs filter-btns clearfix">
          <li className={activeClass("*")} onClick={() => setFilterKey("*")}>
            All
          </li>
          <li className={activeClass("cat-1")} onClick={() => setFilterKey("cat-1")}>Cyber</li>
          <li className={activeClass("cat-2")} onClick={() => setFilterKey("cat-2")}>Digital</li>
          <li className={activeClass("cat-3")} onClick={() => setFilterKey("cat-3")}>Software</li>
          <li className={activeClass("cat-4")} onClick={() => setFilterKey("cat-4")}>Technology</li>
          <li className={activeClass("cat-5")} onClick={() => setFilterKey("cat-5")}>Development</li>
        </ul>
      </div>
      <div className="items-container row" ref={containerRef}>
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </>
  );
}

function ProductCard({ img, title, price, cats }) {
  return (
    <div
      className={`product-block home-style masonry-item small-column all ${cats} col-lg-4 col-md-6 col-sm-12`}>
      <div className="inner-box">
        <div className="image-box">
          <div className="inner">
            <figure className="image mb-0">
              <Link href="/shop-product-details">
                <img src={img} alt={title} />
              </Link>
            </figure>
            <div className="icon-box">
              <Link className="icon ui-btn add-to-cart" href="/shop-cart">
                <i className="fa-sharp fa-light fa-cart-shopping" />
              </Link>
              <Link className="icon ui-btn like-btn" href="/shop-product-details">
                <i className="fa-light fa-heart" />
              </Link>
              <Link className="icon ui-btn add-to-cart" href="/shop-cart">
                <i className="fa-light fa-arrows-rotate" />
              </Link>
            </div>
          </div>
        </div>
        <div className="content-box">
          <div className="inner">
            <span className="price">
              <span className="price-style">{price}</span>
              <span>- 90$.00</span>
            </span>
            <h4 className="title">
              <Link href="/shop-product-details">{title}</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
