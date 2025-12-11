"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Heavy Duty Silk",
    price: "70$.00 - 90$.00",
    image: "/assets/images/resource/product2-1.jpg",
    categories: ["Accessories", "Yoga Equipment"],
  },
  {
    id: 2,
    title: "Small Cotton",
    price: "90$.00 - 70$.00",
    image: "/assets/images/resource/product2-2.jpg",
    categories: ["Mat", "Oil Contrition"],
  },
  {
    id: 3,
    title: "Heavy Duty Leather",
    price: "70$.00",
    image: "/assets/images/resource/product2-3.jpg",
    categories: ["Accessories", "Yoga Equipment"],
  },
  {
    id: 4,
    title: "Aerodynamic Coat",
    price: "50$.00",
    image: "/assets/images/resource/product2-4.jpg",
    categories: ["Mat", "Oil Contrition"],
  },
];

const filters = ["Accessories", "Mat", "Yoga Equipment", "Oil Contrition"];
export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState("Accessories");

  const filteredProducts =
    activeFilter === "Accessories"
      ? products
      : products.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="product" className="featured-products style-two">
      <div className="auto-container">
        <div className="sec-title text-center">
          <figure className="image">
            <img src="/assets/images/icons/icon1.png" alt="Icon" />
          </figure>
          <span className="sub-title">Our Product</span>
          <h2 className="words-slide-up text-split">Popular Yoga Product</h2>
          <div className="text">
            Proin efficitur mauris vel condimentum pulvinar velit orci
            consectetur ligula eget get <br /> egestas magna mi ut arcu
            Phasellus nec.
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="filters fadeInUp animated text-center mb-4">
          <ul className="filter-tabs filter-btns clearfix">
            {filters.map((f) => (
              <li
                key={f}
                className={activeFilter === f ? "active filter" : "filter"}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Products Grid */}
        <div className="row">
          {filteredProducts.map((product) => (
            <div
              className="product-block home-style fadeInUp animated col-lg-3 col-sm-6"
              key={product.id}
            >
              <div className="inner-box bg-transparent">
                <div className="image-box">
                  <div className="inner">
                    <figure className="image mb-0">
                      <Link href="/shop-product-details">
                        <img src={product.image} alt={product.title} />
                      </Link>
                    </figure>
                    <div className="icon-box">
                      <Link className="icon ui-btn add-to-cart" href="/shop-cart">
                        <i className="fa-light fa-cart-shopping"></i>
                      </Link>
                      <Link className="icon ui-btn like-btn" href="/shop-product-details">
                        <i className="fa-light fa-heart"></i>
                      </Link>
                      <Link className="icon ui-btn add-to-cart" href="/shop-cart">
                        <i className="fa-light fa-arrows-rotate"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="inner">
                    <span className="price">{product.price}</span>
                    <h4 className="title">
                      <Link href="/shop-product-details">{product.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
