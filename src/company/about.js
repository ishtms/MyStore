import React, { Component } from 'react';

export default class About extends Component {
    componentDidMount(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;        
    }
    render () {
        return (
            <div className="container padding-bottom-2x mb-2">
            <div className="row align-items-center padding-bottom-2x">
                <div className="col-md-5"><img className="d-block w-270 m-auto" src="img/features/01.jpg" alt="Online Shopping" /></div>
                <div className="col-md-7 text-md-left text-center">
                <div className="mt-30 hidden-md-up" />
                <h2>Search, Select, Buy Online.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt hendrerit. Aenean dolor dolor, tristique nec placerat nec.</p><a className="text-medium text-decoration-none" href="/shopping#/shop-grid">View Products&nbsp;<i className="icon-arrow-right" /></a>
                </div>
            </div>
            <hr />
            <div className="row align-items-center padding-top-2x padding-bottom-2x">
                <div className="col-md-5 order-md-2"><img className="d-block w-270 m-auto" src="img/features/02.jpg" alt="Delivery" /></div>
                <div className="col-md-7 order-md-1 text-md-left text-center">
                <div className="mt-30 hidden-md-up" />
                <h2>Fast Delivery Worldwide.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt hendrerit. Aenean dolor dolor, tristique nec placerat nec.</p><a className="text-medium text-decoration-none" href="#">Shipping Details&nbsp;<i className="icon-arrow-right" /></a>
                </div>
            </div>
            <hr />
            <div className="row align-items-center padding-top-2x padding-bottom-2x">
                <div className="col-md-5"><img className="d-block w-270 m-auto" src="img/features/03.jpg" alt="Mobile App" /></div>
                <div className="col-md-7 text-md-left text-center">
                <div className="mt-30 hidden-md-up" />
                <h2>Great Mobile App. Shop On The Go.</h2>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor consequat aliquam eget quis dolor.</p><a className="market-button apple-button" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">App Store</span></a><a className="market-button google-button" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">Google Play</span></a><a className="market-button windows-button" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">Windows Store</span></a>
                </div>
            </div>
            <hr />
            <div className="row align-items-center padding-top-2x padding-bottom-2x">
                <div className="col-md-5 order-md-2"><img className="d-block w-270 m-auto" src="img/features/04.jpg" alt="Delivery" /></div>
                <div className="col-md-7 order-md-1 text-md-left text-center">
                <div className="mt-30 hidden-md-up" />
                <h2>Shop Offline. Cozy Outlet Stores.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt hendrerit. Aenean dolor dolor, tristique nec placerat nec.</p><a className="text-medium text-decoration-none" href="/company#/contacts">See Outlet Stores&nbsp;<i className="icon-arrow-right" /></a>
                </div>
            </div>
            <hr />
            <div className="text-center padding-top-3x mb-30">
                <h2>Our Core Team</h2>
                <p className="text-muted">People behind your awesome shopping experience.</p>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-6 mb-30 text-center"><img className="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="img/team/01.jpg" alt="Team" />
                <h6>Grace Wright</h6>
                <p className="text-muted mb-2">Founder, CEO</p>
                <div className="social-bar"><a className="social-button shape-circle sb-facebook" href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="socicon-facebook" /></a><a className="social-button shape-circle sb-twitter" href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="socicon-twitter" /></a><a className="social-button shape-circle sb-google-plus" href="#" data-toggle="tooltip" data-placement="top" title="Google +"><i className="socicon-googleplus" /></a></div>
                </div>
                <div className="col-md-3 col-sm-6 mb-30 text-center"><img className="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="img/team/02.jpg" alt="Team" />
                <h6>Taylor Jackson</h6>
                <p className="text-muted mb-2">Financial Director</p>
                <div className="social-bar"><a className="social-button shape-circle sb-skype" href="#" data-toggle="tooltip" data-placement="top" title="Skype"><i className="socicon-skype" /></a><a className="social-button shape-circle sb-facebook" href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="socicon-facebook" /></a><a className="social-button shape-circle sb-paypal" href="#" data-toggle="tooltip" data-placement="top" title="PayPal"><i className="socicon-paypal" /></a></div>
                </div>
                <div className="col-md-3 col-sm-6 mb-30 text-center"><img className="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="img/team/03.jpg" alt="Team" />
                <h6>Quinton Cross</h6>
                <p className="text-muted mb-2">Marketing Director</p>
                <div className="social-bar"><a className="social-button shape-circle sb-twitter" href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="socicon-twitter" /></a><a className="social-button shape-circle sb-google-plus" href="#" data-toggle="tooltip" data-placement="top" title="Google +"><i className="socicon-googleplus" /></a><a className="social-button shape-circle sb-email" href="#" data-toggle="tooltip" data-placement="top" title="Email"><i className="socicon-mail" /></a></div>
                </div>
                <div className="col-md-3 col-sm-6 mb-30 text-center"><img className="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="img/team/04.jpg" alt="Team" />
                <h6>Liana Mullen</h6>
                <p className="text-muted mb-2">Lead Designer</p>
                <div className="social-bar"><a className="social-button shape-circle sb-behance" href="#" data-toggle="tooltip" data-placement="top" title="Behance"><i className="socicon-behance" /></a><a className="social-button shape-circle sb-dribbble" href="#" data-toggle="tooltip" data-placement="top" title="Dribbble"><i className="socicon-dribbble" /></a><a className="social-button shape-circle sb-instagram" href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="socicon-instagram" /></a></div>
                </div>
            </div>
            </div>

        );
    }
}