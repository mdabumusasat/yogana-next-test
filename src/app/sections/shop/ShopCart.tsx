"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PageCart() {
  return (
    <section className="page-cart">
      <div className="container pt-100 pb-100">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered tbl-shopping-cart">
                <thead>
                  <tr>
                    <th></th>
                    <th>Photo</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>

                  {/* ---- PRODUCT 1 ---- */}
                  <tr className="cart_item">
                    <td className="product-remove">
                      <button className="remove">×</button>
                    </td>

                    <td className="product-thumbnail">
                      <Link href="#">
                        <Image
                          alt="product"
                          src="/assets/images/resource/products/1.jpg"
                          width={80}
                          height={80}
                        />
                      </Link>
                    </td>

                    <td className="product-name">
                      <Link href="/shop-product-details">Winter Black Jacket</Link>
                      <ul className="variation">
                        <li className="variation-size">
                          Size: <span>Medium</span>
                        </li>
                      </ul>
                    </td>

                    <td className="product-price"><span>$36.00</span></td>

                    <td className="product-quantity">
                      <div className="product-details__quantity">
                        <div className="quantity-box">
                          <button type="button" className="sub">
                            <i className="fa fa-minus" />
                          </button>
                          <input type="number" defaultValue={1} />
                          <button type="button" className="add">
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="product-subtotal"><span>$36.00</span></td>
                  </tr>

                  {/* ---- PRODUCT 2 ---- */}
                  <tr className="cart_item">
                    <td className="product-remove">
                      <button className="remove">×</button>
                    </td>

                    <td className="product-thumbnail">
                      <Link href="#">
                        <Image
                          alt="product"
                          src="/assets/images/resource/products/2.jpg"
                          width={80}
                          height={80}
                        />
                      </Link>
                    </td>

                    <td className="product-name">
                      <Link href="/shop-product-details">Swan Crop V-Neck Tee</Link>
                      <ul className="variation">
                        <li className="variation-size">
                          Size: <span>Small</span>
                        </li>
                      </ul>
                    </td>

                    <td className="product-price"><span>$115.00</span></td>

                    <td className="product-quantity">
                      <div className="product-details__quantity">
                        <div className="quantity-box">
                          <button type="button" className="sub">
                            <i className="fa fa-minus" />
                          </button>
                          <input type="number" defaultValue={1} />
                          <button type="button" className="add">
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="product-subtotal"><span>$115.00</span></td>
                  </tr>

                  {/* ---- PRODUCT 3 ---- */}
                  <tr className="cart_item">
                    <td className="product-remove">
                      <button className="remove">×</button>
                    </td>

                    <td className="product-thumbnail">
                      <Link href="#">
                        <Image
                          alt="product"
                          src="/assets/images/resource/products/3.jpg"
                          width={80}
                          height={80}
                        />
                      </Link>
                    </td>

                    <td className="product-name">
                      <Link href="/shop-product-details">
                        Blue Solid Casual Shirt
                      </Link>
                      <ul className="variation">
                        <li className="variation-size">
                          Size: <span>Large</span>
                        </li>
                      </ul>
                    </td>

                    <td className="product-price"><span>$68.00</span></td>

                    <td className="product-quantity">
                      <div className="product-details__quantity">
                        <div className="quantity-box">
                          <button type="button" className="sub">
                            <i className="fa fa-minus" />
                          </button>
                          <input type="number" defaultValue={1} />
                          <button type="button" className="add">
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="product-subtotal"><span>$68.00</span></td>
                  </tr>

                  {/* ---- COUPON ROW ---- */}
                  <tr className="cart_item">
                    <td colSpan={3}>
                      <form className="row g-3 coupon-form">
                        <div className="col-auto">
                          <input
                            type="text"
                            className="input-text form-control"
                            placeholder="Coupon code"
                          />
                        </div>

                        <div className="col-auto">
                          <button type="submit" className="apply-button">
                            <span className="btn-title">Apply Coupon</span>
                          </button>
                        </div>
                      </form>
                    </td>

                    <td colSpan={2}></td>

                    <td>
                      <button type="button" className="theme-btn btn-style-one">
                        <span className="btn-title">Update Cart</span>
                      </button>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-12 mt-30">
            <div className="row">
              <div className="col-md-5">
                <h4>Calculate Shipping</h4>
                <form className="form cart-form">
                  <div className="mb-10">
                    <select className="form-control">
                      <option>Select Country</option>
                      <option>Australia</option>
                      <option>UK</option>
                      <option>USA</option>
                    </select>
                  </div>
                  <div className="mb-10">
                    <input className="form-control" placeholder="State/country" />
                  </div>
                  <div className="mb-10">
                    <input className="form-control" placeholder="Postcode/zip" />
                  </div>
                  <div className="mb-30">
                    <button type="button" className="theme-btn btn-style-one">
                      <span className="btn-title">Update Totals</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-2"></div>
              {/* CART TOTALS */}
              <div className="col-md-5">
                <h4>Cart Totals</h4>
                <table className="table table-bordered cart-total">
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td>$180.00</td>
                    </tr>
                    <tr>
                      <td>Shipping and Handling</td>
                      <td>$70.00</td>
                    </tr>
                    <tr>
                      <td>Order Total</td>
                      <td>$250.00</td>
                    </tr>
                  </tbody>
                </table>
                <Link href="/shop-checkout" className="theme-btn btn-style-one">
                  <span className="btn-title">Proceed to Checkout</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
