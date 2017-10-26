import React, { Component } from 'react';

export default class CheckoutAddress extends Component {
  componentDidMount(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;        
}
    render () {
        return (
            <div className="container padding-bottom-3x mb-2">
            <div className="row">
              {/* Checkout Adress*/}
              <div className="col-xl-9 col-lg-8">
                <div className="checkout-steps"><a href="/payment#/checkout-review">4. Review</a><a href="/payment#/checkout-payment"><span className="angle" />3. Payment</a><a href="/payment#/checkout-shipping"><span className="angle" />2. Shipping</a><a className="active" href="/payment#/checkout-address"><span className="angle" />1. Address</a></div>
                <h4>Billing Address</h4>
                <hr className="padding-bottom-1x" />
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="checkout-fn">First Name</label>
                      <input className="form-control" type="text" id="checkout-fn" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="checkout-ln">Last Name</label>
                      <input className="form-control" type="text" id="checkout-ln" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="checkout-email">E-mail Address</label>
                      <input className="form-control" type="email" id="checkout-email" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="checkout-phone">Phone Number</label>
                      <input className="form-control" type="text" id="checkout-phone" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="checkout-company">Company</label>
                      <input className="form-control" type="text" id="checkout-company" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="checkout-country">Country</label>
                      <select className="form-control" id="checkout-country">
                        <option>Choose country</option>
                        <option>Australia</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                        <option>Switzerland</option>
                        <option>USA</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="checkout-city">City</label>
                      <select className="form-control" id="checkout-city">
                        <option>Choose city</option>
                        <option>Amsterdam</option>
                        <option>Berlin</option>
                        <option>Geneve</option>
                        <option>New York</option>
                        <option>Paris</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="checkout-zip">ZIP Code</label>
                      <input className="form-control" type="text" id="checkout-zip" />
                    </div>
                  </div>
                </div>
                <div className="row padding-bottom-1x">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="checkout-address1">Address 1</label>
                      <input className="form-control" type="text" id="checkout-address1" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="checkout-address2">Address 2</label>
                      <input className="form-control" type="text" id="checkout-address2" />
                    </div>
                  </div>
                </div>
                <h4>Shipping Address</h4>
                <hr className="padding-bottom-1x" />
                <div className="form-group">
                  <label className="custom-control custom-checkbox">
                    <input className="custom-control-input" type="checkbox" defaultChecked /><span className="custom-control-indicator" /><span className="custom-control-description">Same as billing address</span>
                  </label>
                </div>
                <div className="checkout-footer">
                  <div className="column"><a className="btn btn-outline-secondary" href="/payment#/cart"><i className="icon-arrow-left" /><span className="hidden-xs-down">&nbsp;Back To Cart</span></a></div>
                  <div className="column"><a className="btn btn-primary" href="/payment#/checkout-shipping"><span className="hidden-xs-down">Continue&nbsp;</span><i className="icon-arrow-right" /></a></div>
                </div>
              </div>
              {/* Sidebar          */}
              <div className="col-xl-3 col-lg-4">
                <aside className="sidebar">
                  <div className="padding-top-2x hidden-lg-up" />
                  {/* Order Summary Widget*/}
                  <section className="widget widget-order-summary">
                    <h3 className="widget-title">Order Summary</h3>
                    <table className="table">
                      <tbody><tr>
                          <td>Cart Subtotal:</td>
                          <td className="text-medium">$289.68</td>
                        </tr>
                        <tr>
                          <td>Shipping:</td>
                          <td className="text-medium">$22.50</td>
                        </tr>
                        <tr>
                          <td>Estimated tax:</td>
                          <td className="text-medium">$3.42</td>
                        </tr>
                        <tr>
                          <td />
                          <td className="text-lg text-medium">$315.60</td>
                        </tr>
                      </tbody></table>
                  </section>
                  {/* Featured Products Widget*/}
                  <section className="widget widget-featured-products">
                    <h3 className="widget-title">Recently Viewed</h3>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/01.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Oakley Kickback</a></h4><span className="entry-meta">$155.00</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/02.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Top-Sider Fathom</a></h4><span className="entry-meta">$90.00</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/03.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Vented Straw Fedora</a></h4><span className="entry-meta">$49.50</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/04.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Big Wordmark Tote</a></h4><span className="entry-meta">$29.99</span>
                      </div>
                    </div>
                  </section>
                  {/* Promo Banner*/}
                  <section className="promo-box" style={{backgroundImage: 'url(img/banners/02.jpg)'}}><span className="overlay-dark" style={{opacity: '.4'}} />
                    <div className="promo-box-content text-center padding-top-2x padding-bottom-2x">
                      <h4 className="text-light text-thin text-shadow">New Collection of</h4>
                      <h3 className="text-bold text-light text-shadow">Sunglasses</h3><a className="btn btn-outline-white btn-sm" href="/shopping#/shop-grid">Shop Now</a>
                    </div>
                  </section>
                </aside>
              </div>
            </div>
          </div>
          
        );
    }
}