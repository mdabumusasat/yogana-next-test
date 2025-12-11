import React from 'react';
import BudgetRange from '../elements/BudgetRange'

const ContactForm = () => {

    return (
        <>

            <div className="contact-form wow fadeInLeft">
                <div className="bg bg-pattern-1"></div>
                <h3 className="title">Request A Quote</h3>

                {/* Contact Form */}
                <form method="post" action="get" id="contact-form">
                    <div className="row">
                        <div className="form-group col-lg-6 col-md-6">
                            <input type="text" name="first_name" placeholder="First Name" required />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                            <input type="text" name="last_name" placeholder="Last Name" required />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                            <input type="text" name="email" placeholder="Email" required />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                            <input type="text" name="phone" placeholder="Phone" required />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                            <input type="text" name="company" placeholder="Company" required />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                            <input type="text" name="address" placeholder="Address" required />
                        </div>
                        <div className="form-group col-lg-12">
                            <BudgetRange />
                        </div>
                        <div className="form-group col-lg-12">
                            <textarea name="message" placeholder="Message" required defaultValue={""} />
                        </div>
                        <div className="form-group col-lg-12">
                            <button type="submit" className="theme-btn btn-style-one hvr-light" name="submit-form"><span className="btn-title">SUBMIT REQUEST</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;