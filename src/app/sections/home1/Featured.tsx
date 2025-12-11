"use client";

import React, { useState } from "react";
import Link from "next/link";

const filterOptions = [
  { label: "Accessories", value: "all" },
  { label: "Mat", value: "dairy" },
  { label: "Yoga Equipment", value: "pantry" },
  { label: "Yoga Clothing", value: "meat" },
];

const productData = [
  {
    id: 1,
    img: "/assets/images/resource/product1-1.jpg",
    price: "70$.00 - 90$.00",
    title: "Heavy Duty Silk",
    categories: ["pantry", "fruit"],
  },
  {
    id: 2,
    img: "/assets/images/resource/product1-2.jpg",
    price: "90$.00 - 70$.00",
    title: "Small Cotton",
    categories: ["dairy", "meat", "fruit"],
  },
  {
    id: 3,
    img: "/assets/images/resource/product1-3.jpg",
    price: "70$.00",
    title: "Heavy Duty Leather",
    categories: ["pantry", "fruit", "vagetables"],
  },
  {
    id: 4,
    img: "/assets/images/resource/product1-4.jpg",
    price: "50$.00",
    title: "Aerodynamic Coat",
    categories: ["dairy", "meat", "vagetables"],
  },
  {
    id: 5,
    img: "/assets/images/resource/product1-5.jpg",
    price: "70$.00 - 90$.00",
    title: "Heavy Duty Silk",
    categories: ["pantry", "fruit"],
  },
  {
    id: 6,
    img: "/assets/images/resource/product1-6.jpg",
    price: "90$.00 - 70$.00",
    title: "Small Cotton",
    categories: ["dairy", "meat", "fruit"],
  },
];

const FeaturedProducts = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? productData
      : productData.filter((product) =>
          product.categories.includes(activeFilter)
        );

  return (
    <section className="featured-products bg-f7f4">
        <div className="auto-container">
            <div
            className="sec-title text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s">
            <figure className="image">
                <img src="/assets/images/icons/icon1.png" alt="Image" />
            </figure>
            <span className="sub-title">Our Product</span>
            <h2 className="words-slide-up text-split">Popular Yoga Product</h2>
            <div className="text">
                A yoga shop is a place where practitioners of all levels can find
                <br />
                essential equipment, accessories,
            </div>
            </div>
            <div className="mixitup-gallery">
                <div className="filters clearfix wow fadeInUp">
                    <ul className="filter-tabs filter-btns clearfix">
                    {filterOptions.map((item) => (
                        <li
                        key={item.value}
                        className={`filter ${
                            activeFilter === item.value ? "active" : ""
                        }`}
                        onClick={() => setActiveFilter(item.value)}>
                        {item.label}
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="filter-list row wow fadeInUp">
                    {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="product-block home-style col-lg-4 col-sm-6">
                        <div className="inner-box bg-transparent">
                        <div className="image-box">
                            <div className="inner">
                            <figure className="image mb-0">
                                <Link href="/shop-product-details">
                                <img src={product.img} alt={product.title} />
                                </Link>
                            </figure>
                            <div className="icon-box">
                                <Link href="/shop-cart" className="icon ui-btn">
                                <i className="fa-sharp fa-light fa-cart-shopping"></i>
                                </Link>
                                <Link
                                href="/shop-product-details"
                                className="icon ui-btn">
                                <i className="fa-light fa-heart"></i>
                                </Link>
                                <Link href="/shop-cart" className="icon ui-btn">
                                <i className="fa-light fa-arrows-rotate"></i>
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div className="content-box">
                            <div className="inner">
                                <span className="price">{product.price}</span>
                                <h4 className="title">
                                    <Link href="/shop-product-details">
                                        {product.title}
                                    </Link>
                                </h4>
                                <span className="rating">
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-regular fa-star" />
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                    {filteredProducts.length === 0 && (
                    <div className="col-12 text-center py-5">
                        <p>No products found for this category.</p>
                    </div>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
};

export default FeaturedProducts;
