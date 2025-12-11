"use client";

import React, { useState } from "react";
import Link from "next/link";

// PRODUCT DATA
const products = [
  {
    id: 1,
    title: "Heavy Duty Silk",
    price: "70$.00 - 90$.00",
    img: "/assets/images/resource/product1-1.jpg",
    categories: ["all", "pantry", "fruit"],
  },
  {
    id: 2,
    title: "Small Cotton",
    price: "90$.00 - 70$.00",
    img: "/assets/images/resource/product1-2.jpg",
    categories: ["all", "dairy", "meat", "fruit"],
  },
  {
    id: 3,
    title: "Heavy Duty Leather",
    price: "70$.00",
    img: "/assets/images/resource/product1-3.jpg",
    categories: ["all", "pantry", "fruit", "vagetables"],
  },
  {
    id: 4,
    title: "Aerodynamic Coat",
    price: "50$.00",
    img: "/assets/images/resource/product1-4.jpg",
    categories: ["all", "dairy", "meat", "vagetables"],
  },
  {
    id: 5,
    title: "Heavy Duty Silk",
    price: "70$.00 - 90$.00",
    img: "/assets/images/resource/product1-5.jpg",
    categories: ["all", "pantry", "fruit"],
  },
  {
    id: 6,
    title: "Small Cotton",
    price: "90$.00 - 70$.00",
    img: "/assets/images/resource/product1-6.jpg",
    categories: ["all", "dairy", "meat", "fruit"],
  },
];

const filterOptions = [
  { key: "all", label: "Accessories" },
  { key: "dairy", label: "Mat" },
  { key: "pantry", label: "Yoga Equipment" },
  { key: "meat", label: "Yoga Clothing" },
];

const FeaturedProducts = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((item) => item.categories.includes(activeFilter));

  return (
    <section className="featured-products">
      <div className="auto-container">
        {/* Section Title */}
        <div className="sec-title text-center">
          <figure className="image">
            <img
              src="/assets/images/icons/icon1.png"
              alt="Product Icon"
            />
          </figure>
          <span className="sub-title">Our Product</span>
          <h2 className="words-slide-up text-split">Popular Yoga Product</h2>
          <div className="text">
            A yoga shop is a place where practitioners of all levels can find
            <br />
            essential equipment, accessories,
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mixitup-gallery">
          <div className="filters clearfix">
            <ul className="filter-tabs filter-btns clearfix">
              {filterOptions.map((filter) => (
                <li
                  key={filter.key}
                  className={`filter ${
                    activeFilter === filter.key ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-list row">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-block home-style col-lg-4 col-sm-6"
              >
                <div className="inner-box bg-transparent">
                  <div className="image-box">
                    <div className="inner">
                      <figure className="image mb-0">
                        <Link href="/shop-product-details">
                          <img src={product.img} alt={product.title} />
                        </Link>
                      </figure>

                      <div className="icon-box">
                        <Link className="icon" href="/shop-cart">
                          <i className="fa-sharp fa-light fa-cart-shopping"></i>
                        </Link>
                        <Link className="icon" href="/shop-product-details">
                          <i className="fa-light fa-heart"></i>
                        </Link>
                        <Link className="icon" href="/shop-cart">
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
                      <span className="rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
