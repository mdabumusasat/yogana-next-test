import Link from 'next/link';
import React from 'react';

const Error = () => {
    return (
        <>
        <section>
            <div className="auto-container pt-100 pb-150">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="error-page__inner">
                            <div className="error-page__title-box">
                                <img src="/assets/images/resource/404.jpg" alt="" title='Consultez' />
                                <h3 className="error-page__sub-title">Page not found!</h3>
                            </div>
                            <p className="error-page__text">Sorry we can't find that page! The page you are looking  for was never existed.</p>
                            <form className="error-page__form" action="#">
                                <div className="error-page__form-input">
                                    <label htmlFor="Search">Search here</label>
                                    <input id='Search' type="search" placeholder="Search here" />
                                    <button type="submit"><i className="lnr lnr-icon-magnifier" /></button>
                                </div>
                            </form>
                            <Link href="/" className="theme-btn btn-style-one shop-now"><span className="btn-title">Back to Home</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Error;