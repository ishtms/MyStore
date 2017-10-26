import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation/main';
import Footer from './navigation/footer';
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
                    <Footer/>
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