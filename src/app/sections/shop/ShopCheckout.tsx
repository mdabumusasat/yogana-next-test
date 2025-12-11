"use client";

import { useState } from "react";

const Checkout = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section>
      <div className="container pt-70 pb-100">
        <form className="checkout-form" id="checkout-form">
          <div className="row mt-30">

            {/* Billing Details */}
            <div className="col-md-6">
              <div className="billing-details">
                <h3 className="mb-30">Billing Details</h3>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label htmlFor="checkout-fname">First Name</label>
                    <input type="text" id="checkout-fname" className="form-control" placeholder="First Name" />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label htmlFor="checkout-lname">Last Name</label>
                    <input type="text" id="checkout-lname" className="form-control" placeholder="Last Name" />
                  </div>

                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="checkout-cname">Company Name</label>
                      <input type="text" id="checkout-cname" className="form-control" placeholder="Company Name" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="checkout-email">Email Address</label>
                      <input type="email" id="checkout-email" className="form-control" placeholder="Email Address" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="checkout-address">Address</label>
                      <input type="text" id="checkout-address" className="form-control" placeholder="Street address" />
                    </div>

                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                    </div>
                  </div>

                  <div className="mb-3 col-md-6">
                    <label htmlFor="checkout-city">City</label>
                    <input type="text" id="checkout-city" className="form-control" placeholder="City" />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label>State/Province</label>
                    <select className="form-control">
                      <option>Select Country</option>
                      <option>Australia</option>
                      <option>UK</option>
                      <option>USA</option>
                    </select>
                  </div>

                  <div className="mb-3 col-md-6">
                    <label htmlFor="checkout-zip">Zip/Postal Code</label>
                    <input type="text" id="checkout-zip" className="form-control" placeholder="Zip/Postal Code" />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label>Country</label>
                    <select className="form-control">
                      <option>Select Country</option>
                      <option>Australia</option>
                      <option>UK</option>
                      <option>USA</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="col-md-6">
              <h3>Additional information</h3>
              <label htmlFor="order_comments">
                Order notes <span className="optional">(optional)</span>
              </label>
              <textarea
                id="order_comments"
                className="form-control"
                placeholder="Notes about your order, e.g. special notes for delivery."
              ></textarea>
            </div>

            {/* Order Summary Table */}
            <div className="col-md-12 mt-30">
              <h3>Your order</h3>
              <table className="table table-striped table-bordered tbl-shopping-cart">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Product Name</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="product-thumbnail">
                      <img src="/assets/images/resource/products/1.jpg" alt="Headphone" />
                    </td>
                    <td>Headphone x 2</td>
                    <td>$36.00</td>
                  </tr>

                  <tr>
                    <td className="product-thumbnail">
                      <img src="/assets/images/resource/products/2.jpg" alt="Luggage" />
                    </td>
                    <td>Luggage x 3</td>
                    <td>$115.00</td>
                  </tr>

                  <tr>
                    <td className="product-thumbnail">
                      <img src="/assets/images/resource/products/3.jpg" alt="Watch" />
                    </td>
                    <td>Watch x 1</td>
                    <td>$68.00</td>
                  </tr>

                  <tr>
                    <td>Cart Subtotal</td>
                    <td></td>
                    <td>$180.00</td>
                  </tr>

                  <tr>
                    <td>Shipping and Handling</td>
                    <td></td>
                    <td>Free Shipping</td>
                  </tr>

                  <tr>
                    <td>Order Total</td>
                    <td></td>
                    <td>$250.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Payment Section */}
            <div className="col-md-12 mt-60">
              <div className="payment-method">
                <h3>Choose a Payment Method</h3>

                <ul className="accordion-box">
                  {[
                    "Credit Card / Debit Card",
                    "Direct Bank Transfer",
                    "Cheque Payment",
                    "Other Payment",
                  ].map((label, index) => (
                    <li
                      key={index}
                      className={`accordion block ${activeAccordion === index ? "active-block" : ""}`}
                    >
                      <div
                        className={`acc-btn ${activeAccordion === index ? "active" : ""}`}
                        onClick={() => toggleAccordion(index)}
                      >
                        <div className="icon-outer">
                          <i className="lnr-icon-chevron-down"></i>
                        </div>
                        {label}
                      </div>

                      <div className={`acc-content ${activeAccordion === index ? "current" : ""}`}>
                        {index === 0 ? (
                          <div className="payment-info">
                            <div className="row clearfix">
                              <div className="col-lg-6 col-md-6 col-sm-12 column">
                                <div className="field-input mb-3">
                                  <input type="text" className="form-control" placeholder="Name on the Card" />
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-6 col-sm-12 column">
                                <div className="field-input mb-3">
                                  <input type="text" className="form-control" placeholder="Card Number" />
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-6 col-sm-12 column">
                                <div className="field-input mb-3">
                                  <input type="text" className="form-control" placeholder="Expiry Date" />
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-6 col-sm-12 column">
                                <div className="field-input mb-3">
                                  <input type="text" className="form-control" placeholder="Security Code" />
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-12 col-sm-12 column">
                                <div className="field-input message-btn">
                                  <button type="submit" className="theme-btn btn-style-one">
                                    <span className="btn-title">Make Payment</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="payment-info">
                            <p className="mb-0">
                              Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                              Your order won’t ship until payment is cleared.
                            </p>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
