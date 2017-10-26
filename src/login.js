import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation/main.js'
class Login extends Component {
    render () {
        return (
            <div>
                <div>
                <Navigation />
                {/* Off-Canvas Wrapper*/}
                <div className="offcanvas-wrapper">
                    {/* Page Title*/}
                    <div className="page-title">
                    <div className="container">
                        <div className="column">
                        <h1>Login / Register Account</h1>
                        </div>
                        <div className="column">
                        <ul className="breadcrumbs">
                            <li><a href="index-2.html">Home</a>
                            </li>
                            <li className="separator">&nbsp;</li>
                            <li><a href="account-orders.html">Account</a>
                            </li>
                            <li className="separator">&nbsp;</li>
                            <li>Login / Register</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    {/* Page Content*/}
                    <div className="container padding-bottom-3x mb-2">
                    <div className="row">
                        <div className="col-md-6">
                        <form className="login-box" method="post">
                            <div className="row margin-bottom-1x">
                            <div className="col-xl-4 col-md-6 col-sm-4"><a className="btn btn-sm btn-block facebook-btn" href="#"><i className="socicon-facebook" />&nbsp;Facebook login</a></div>
                            <div className="col-xl-4 col-md-6 col-sm-4"><a className="btn btn-sm btn-block twitter-btn" href="#"><i className="socicon-twitter" />&nbsp;Twitter login</a></div>
                            <div className="col-xl-4 col-md-6 col-sm-4"><a className="btn btn-sm btn-block google-btn" href="#"><i className="socicon-googleplus" />&nbsp;Google+ login</a></div>
                            </div>
                            <h4 className="margin-bottom-1x">Or using form below</h4>
                            <div className="form-group input-group">
                            <input className="form-control" type="email" placeholder="Email" required /><span className="input-group-addon"><i className="icon-mail" /></span>
                            </div>
                            <div className="form-group input-group">
                            <input className="form-control" type="password" placeholder="Password" required /><span className="input-group-addon"><i className="icon-lock" /></span>
                            </div>
                            <div className="d-flex flex-wrap justify-content-between padding-bottom-1x">
                            <label className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" defaultChecked /><span className="custom-control-indicator" /><span className="custom-control-description">Remember me</span>
                            </label><a className="navi-link" href="account-password-recovery.html">Forgot password?</a>
                            </div>
                            <div className="text-center text-sm-right">
                            <button className="btn btn-primary margin-bottom-none" type="submit">Login</button>
                            </div>
                        </form>
                        </div>
                        <div className="col-md-6">
                        <div className="padding-top-3x hidden-md-up" />
                        <h3 className="margin-bottom-1x">No Account? Register</h3>
                        <p>Registration takes less than a minute but gives you full control over your orders.</p>
                        <form className="row" method="post">
                            <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="reg-fn">First Name</label>
                                <input className="form-control" type="text" id="reg-fn" required />
                            </div>
                            </div>
                            <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="reg-ln">Last Name</label>
                                <input className="form-control" type="text" id="reg-ln" required />
                            </div>
                            </div>
                            <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="reg-email">E-mail Address</label>
                                <input className="form-control" type="email" id="reg-email" required />
                            </div>
                            </div>
                            <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="reg-phone">Phone Number</label>
                                <input className="form-control" type="text" id="reg-phone" required />
                            </div>
                            </div>
                            <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="reg-pass">Password</label>
                                <input className="form-control" type="password" id="reg-pass" required />
                            </div>
                            </div>
                            <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="reg-pass-confirm">Confirm Password</label>
                                <input className="form-control" type="password" id="reg-pass-confirm" required />
                            </div>
                            </div>
                            <div className="col-12 text-center text-sm-right">
                            <button className="btn btn-primary margin-bottom-none" type="submit">Register</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    {/* Site Footer*/}
                    <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-3 col-md-6">
                            {/* Contact Info*/}
                            <section className="widget widget-light-skin">
                            <h3 className="widget-title">Get In Touch With Us</h3>
                            <p className="text-white">Phone: 00 33 169 7720</p>
                            <ul className="list-unstyled text-sm text-white">
                                <li><span className="opacity-50">Monday-Friday:</span>9.00 am - 8.00 pm</li>
                                <li><span className="opacity-50">Saturday:</span>10.00 am - 6.00 pm</li>
                            </ul>
                            <p><a className="navi-link-light" href="#">support@unishop.com</a></p><a className="social-button shape-circle sb-facebook sb-light-skin" href="#"><i className="socicon-facebook" /></a><a className="social-button shape-circle sb-twitter sb-light-skin" href="#"><i className="socicon-twitter" /></a><a className="social-button shape-circle sb-instagram sb-light-skin" href="#"><i className="socicon-instagram" /></a><a className="social-button shape-circle sb-google-plus sb-light-skin" href="#"><i className="socicon-googleplus" /></a>
                            </section>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* Mobile App Buttons*/}
                            <section className="widget widget-light-skin">
                            <h3 className="widget-title">Our Mobile App</h3><a className="market-button apple-button mb-light-skin" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">App Store</span></a><a className="market-button google-button mb-light-skin" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">Google Play</span></a><a className="market-button windows-button mb-light-skin" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">Windows Store</span></a>
                            </section>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* About Us*/}
                            <section className="widget widget-links widget-light-skin">
                            <h3 className="widget-title">About Us</h3>
                            <ul>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">About Unishop</a></li>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Our Blog</a></li>
                            </ul>
                            </section>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* Account / Shipping Info*/}
                            <section className="widget widget-links widget-light-skin">
                            <h3 className="widget-title">Account &amp; Shipping Info</h3>
                            <ul>
                                <li><a href="#">Your Account</a></li>
                                <li><a href="#">Shipping Rates &amp; Policies</a></li>
                                <li><a href="#">Refunds &amp; Replacements</a></li>
                                <li><a href="#">Taxes</a></li>
                                <li><a href="#">Delivery Info</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                            </ul>
                            </section>
                        </div>
                        </div>
                        <hr className="hr-light mt-2 margin-bottom-2x" />
                        <div className="row">
                        <div className="col-md-7 padding-bottom-1x">
                            {/* Payment Methods*/}
                            <div className="margin-bottom-1x" style={{maxWidth: 615}}><img src="img/payment_methods.png" alt="Payment Methods" />
                            </div>
                        </div>
                        <div className="col-md-5 padding-bottom-1x">
                            <div className="margin-top-1x hidden-md-up" />
                            {/*Subscription*/}
                            <form className="subscribe-form" action="http://rokaux.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=1194bb7544" method="post" target="_blank" noValidate>
                            <div className="clearfix">
                                <div className="input-group input-light">
                                <input className="form-control" type="email" name="EMAIL" placeholder="Your e-mail" /><span className="input-group-addon"><i className="icon-mail" /></span>
                                </div>
                                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                                <input type="text" name="b_c7103e2c981361a6639545bd5_1194bb7544" tabIndex={-1} />
                                </div>
                                <button className="btn btn-primary" type="submit"><i className="icon-check" /></button>
                            </div><span className="form-text text-sm text-white opacity-50">Subscribe to our Newsletter to receive early discount offers, latest news, sales and promo information.</span>
                            </form>
                        </div>
                        </div>
                        {/* Copyright*/}
                        <p className="footer-copyright">© All rights reserved. Made with &nbsp;<i className="icon-heart text-danger" /><a href="http://rokaux.com/" target="_blank"> &nbsp;by rokaux</a></p>
                    </div>
                    </footer>
                </div>
                {/* Back To Top Button*/}<a className="scroll-to-top-btn" href="#"><i className="icon-arrow-up" /></a>
                {/* Backdrop*/}
                <div className="site-backdrop" />
                </div>

            </div>
        );
    }
}
ReactDOM.render(<Login/>, document.getElementById('login'))