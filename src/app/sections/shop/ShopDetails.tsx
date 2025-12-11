"use client";
import Link from 'next/link';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay, Thumbs } from 'swiper/modules';

const products = [
  { id: 1, name: "Headphone", image: "/assets/images/resource/products/1.jpg", price: "$32.00" },
  { id: 2, name: "Luggage", image: "/assets/images/resource/products/2.jpg", price: "$32.00" },
  { id: 3, name: "Watch", image: "/assets/images/resource/products/3.jpg", price: "$32.00" },
  { id: 4, name: "SD Card", image: "/assets/images/resource/products/4.jpg", price: "$32.00" },
];

const ShopDetails = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantities, setQuantities] = useState({
    item1: 1,
    item2: 1,
    item3: 1
  });

  const handleQuantityChange = (item, change) => {
    setQuantities(prevQuantities => {
      const newQuantity = prevQuantities[item] + change;
      return {
        ...prevQuantities,
        [item]: newQuantity > 0 ? newQuantity : 1
      };
    });
  };
  return (
  <>
  <section className="product-details pt-120">
    <div className="container pb-70">
      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="bxslider">
            <div className="slider-content">
              <Swiper
              spaceBetween={10}
              pagination={{clickable:true}}
              thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
              modules={[FreeMode, Navigation,Autoplay, Thumbs]}
              loop= {true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              className="slider-pager">
              <SwiperSlide>
                <div className="image-box"><img src="/assets/images/resource/products/product-details.jpg" alt="Image"/></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-box"><img src="/assets/images/resource/products/product-details2.jpg" alt="Image"/></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-box"><img src="/assets/images/resource/products/product-details3.jpg" alt="Image"/></div>
              </SwiperSlide>
            </Swiper>
            <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="slider-pager">
            <SwiperSlide className="product-thumb wide-100">
              <figure className="image">
                <img src="/assets/images/resource/products/product-details.jpg" alt="Image"/>
              </figure>
            </SwiperSlide>
            <SwiperSlide className="product-thumb wide-100">
              <figure className="image">
                <img src="/assets/images/resource/products/product-details2.jpg" alt="Image"/>
              </figure>
            </SwiperSlide>
            <SwiperSlide className="product-thumb wide-100">
              <figure className="image">
                <img src="/assets/images/resource/products/product-details3.jpg" alt="Image"/>
              </figure>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-xl-6 product-info">
      <div className="product-details__top">
        <h3 className="product-details__title">Backpack <span>$76.00</span> </h3>
      </div>
      <div className="product-details__reveiw">
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <span>2 Customer Reviews</span>
      </div>
      <div className="product-details__content">
        <p className="product-details__content-text1">Aliquam hendrerit a augue insuscipit. Etiam
          aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit
        convallis dignissim onec vel pellentesque neque.</p>
        <p className="product-details__content-text2"><strong>REF.</strong> 4231/406 <br/> Available in store</p>
      </div>

      <div className="product-details__quantity">
      <h3 className="product-details__quantity-title">Choose quantity</h3>
      <div className="quantity-box">
        <button type="button" className="sub" onClick={() => handleQuantityChange('item1', -1)}>
          <i className="fa fa-minus" />
        </button>
        <input type="number" id="1" value={quantities.item1} readOnly />
        <button type="button" className="add" onClick={() => handleQuantityChange('item1', 1)}>
          <i className="fa fa-plus" />
        </button>
      </div>
    </div>

    <div className="product-details__buttons">
      <div className="product-details__buttons-1">
        <Link href="/shop-cart" className="theme-btn btn-style-one"><span className="btn-title">Add to Cart</span></Link>
      </div>
      <div className="product-details__buttons-2">
        <Link href="/shop-product-details" className="theme-btn btn-style-one"><span className="btn-title">Add to Wishlist</span></Link>
      </div>
    </div>
    <div className="product-details__social">
      <div className="title"><h3 className="mb-0">Share with friends</h3></div>
      <ul className="social-icon-one">
        <li><Link href="/"><i className="fab fa-twitter" /></Link></li>
        <li><Link href="/"><i className="fab fa-facebook-f" /></Link></li>
        <li><Link href="/"><i className="fab fa-pinterest" /></Link></li>
        <li><Link href="/"><i className="fab fa-instagram" /></Link></li>
      </ul>
    </div>
  </div>
</div>
</div>
</section>

<section className="product-description">
  <div className="container pt-0 pb-90">
    <div className="product-discription">
      <div className="tabs-box">
        <div className="tab-btn-box text-center">
          <ul className="tab-btns tab-buttons clearfix">
            <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)} data-tab="#tab1">Description</li>
            <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)} data-tab="#tab2">Reviews</li>
          </ul>
        </div>
        <div className="tabs-content">
          <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="tab1">
            <div className="text">
              <h3 className="product-description__title">Description</h3>
              <p className="product-description__text1">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the </p>
              <div className="product-description__list">
                <ul className="list-unstyled">
                  <li><p><span className="fa fa-arrow-right"></span> Nam at elit nec neque suscipit gravida.</p></li>
                  <li><p><span className="fa fa-arrow-right"></span> Aenean egestas orci eu maximus tincidunt.</p></li>
                  <li><p><span className="fa fa-arrow-right"></span> Curabitur vel turpis id tellus cursus laoreet.</p></li>
                </ul>
              </div>
              <p className="product-description__tex2">All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable.
              </p>
            </div>
          </div>
          <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
            <div className="customer-comment">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                  <div className="single-comment-box">
                    <div className="inner-box">
                      <figure className="comment-thumb"><img src="/assets/images/resource/testi-2.jpg" alt="Image" /></figure>
                      <div className="inner">
                        <ul className="rating clearfix">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                        </ul>
                        <h5>Jon D. William, <span>10 Jan, 2023 . 4:00 pm</span></h5>
                        <p>Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                  <div className="single-comment-box">
                    <div className="inner-box">
                      <figure className="comment-thumb"><img src="/assets/images/resource/testi-1.jpg" alt="Image" /></figure>
                      <div className="inner">
                        <ul className="rating clearfix">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                        </ul>
                        <h5>Aleesha Brown, <span>12 Feb, 2023 . 8:00 pm</span></h5>
                        <p>Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <h3>Add Your Comments</h3>
              <form id="contact_form" action="/" method="GET">
                <div className="mb-3">
                  <label htmlFor="Emessage" className="visually-hidden">Message</label>
                  <textarea id="Emessage" name="Emessage" className="form-control" rows={7} placeholder="Enter Message" required />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="Ename" className="visually-hidden">Name</label>
                      <input id="Ename" name="Ename" className="form-control" type="text" placeholder="Enter Name" required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="Eemail" className="visually-hidden">Email</label>
                      <input id="Eemail" name="Eemail" className="form-control" type="email" placeholder="Enter Email" required />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 column">
                  <div className="review-box clearfix mb-3">
                    <p>Your Review</p>
                    <ul className="rating clearfix" role="radiogroup" aria-label="Rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <li key={star}>
                          <input
                            type="radio"
                            id={`star${star}`}
                            name="rating"
                            value={star}
                            style={{ display: "none" }}
                          />
                          <label htmlFor={`star${star}`} className="me-1">
                            <i className="far fa-star" />
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12 column mb-3">
                  <div className="form-group clearfix">
                    <label className="custom-control material-checkbox">
                      <input type="checkbox" name="Cbox" className="material-control-input" />
                      <span className="material-control-indicator" />
                      <span className="description"> Save my name, email, and website in this browser for the next time I comment.</span>
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <input id="Fcheck" name="Fcheck" type="hidden" />
                  <button type="submit" name="Sform" className="theme-btn btn-style-one" data-loading-text="Please wait...">
                    <span className="btn-title">Submit Comment</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

	<section className="related-product">
		<div className="container pt-0 pb-90">
			<h3>Related Products</h3>
			<div className="row">
				<div className="product-block home-style col-lg-3 col-md-6 col-sm-6">
					<div className="inner-box">
						<div className="image-box">
							<div className="inner">
								<figure className="image mb-0"><Link href="/shop-product-details"><img src="/assets/images/resource/product1-1.jpg" alt="Image"/></Link></figure>
								<div className="icon-box">
									<Link className="icon ui-btn add-to-cart" href="/shop-cart">
										<i className="fa-sharp fa-light fa-cart-shopping"></i>
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
								<span className="price">70$.00 - 90$.00</span>
								<h4 className="title"><Link href="/shop-product-details">Glow Facial Cream</Link></h4>
							</div>
						</div>
					</div>
				</div>
				<div className="product-block home-style col-lg-3 col-md-6 col-sm-6">
					<div className="inner-box">
						<div className="image-box">
							<div className="inner">
								<figure className="image mb-0"><Link href="/shop-product-details"><img src="/assets/images/resource/product1-2.jpg" alt="Image"/></Link></figure>
								<div className="icon-box">
									<Link className="icon ui-btn add-to-cart" href="/shop-cart">
										<i className="fa-sharp fa-light fa-cart-shopping"></i>
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
								<span className="price"> <span className="price-style"> 90$.00</span> - 70$.00</span>
								<h4 className="title"><Link href="/shop-product-details">Hair Treatment</Link></h4>
							</div>
						</div>
					</div>
				</div>
				<div className="product-block home-style col-lg-3 col-md-6 col-sm-6">
					<div className="inner-box">
						<div className="image-box">
							<div className="inner">
								<figure className="image mb-0"><Link href="/shop-product-details"><img src="/assets/images/resource/product1-3.jpg" alt="Image"/></Link></figure>
								<div className="icon-box">
									<Link className="icon ui-btn add-to-cart" href="/shop-cart">
										<i className="fa-sharp fa-regular fa-cart-shopping"></i>
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
								<span className="price">70$.00</span>
								<h4 className="title"><Link href="/shop-product-details">Massage Cream</Link></h4>
							</div>
						</div>
					</div>
				</div>
				<div className="product-block home-style col-lg-3 col-md-6 col-sm-6">
					<div className="inner-box">
						<div className="image-box">
							<div className="inner">
								<figure className="image mb-0"><Link href="/shop-product-details"><img src="/assets/images/resource/product1-4.jpg" alt="Image"/></Link></figure>
								<div className="icon-box">
									<Link className="icon ui-btn add-to-cart" href="/shop-cart">
										<i className="fa-sharp fa-regular fa-cart-shopping"></i>
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
								<span className="price">50$.00</span>
								<h4 className="title"><Link href="/shop-product-details">Body Message Oil</Link></h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

  </>
  );
};
export default ShopDetails
