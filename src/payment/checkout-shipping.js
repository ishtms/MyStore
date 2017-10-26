import React, { Component } from 'react';

export default class CheckoutShipping extends Component {
    componentDidMount(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;        
    }
    render () {
        return (
            <div className="container padding-bottom-3x mb-2">
  <div className="row">
    {/* Checkout Adress*/}
    <div className="col-xl-9 col-lg-8">
      <div className="checkout-steps"><a href="/payment#/checkout-review">4. Review</a><a href="/payment#/checkout-payment"><span className="angle" />3. Payment</a><a className="active" href="/payment#/checkout-shipping"><span className="angle" />2. Shipping</a><a className="completed" href="/payment#/checkout-address"><span className="angle" /><span className="step-indicator icon-circle-check" />1. Address</a></div>
      <h4>Choose Shipping Method</h4>
      <hr className="padding-bottom-1x" />
      <div className="table-responsive">
        <table className="table">
          <thead className="thead-default">
            <tr>
              <th>Shipping method</th>
              <th>Delivery time</th>
              <th>Handling fee</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-middle"><span className="text-medium">Courier</span><br /><span className="text-muted text-sm">All Addresses(default zone), United States &amp; Canada</span></td>
              <td className="align-middle">2 - 4 days</td>
              <td className="align-middle">$22.50</td>
              <td className="align-middle">
                <label className="custom-control custom-radio">
                  <input className="custom-control-input" type="radio" name="shipping-method" defaultChecked /><span className="custom-control-indicator" />
                </label>
              </td>
            </tr>
            <tr>
              <td className="align-middle"><span className="text-medium">Local Shipping</span><br /><span className="text-muted text-sm">All Addresses(default zone), United States &amp; Canada</span></td>
              <td className="align-middle">up to one week</td>
              <td className="align-middle">$10.00</td>
              <td className="align-middle">
                <label className="custom-control custom-radio">
                  <input className="custom-control-input" type="radio" name="shipping-method" /><span className="custom-control-indicator" />
                </label>
              </td>
            </tr>
            <tr>
              <td className="align-middle"><span className="text-medium">Flat Rate</span><br /><span className="text-muted text-sm">All Addresses(default zone)</span></td>
              <td className="align-middle">5 - 7 days</td>
              <td className="align-middle">$33.85</td>
              <td className="align-middle">
                <label className="custom-control custom-radio">
                  <input className="custom-control-input" type="radio" name="shipping-method" /><span className="custom-control-indicator" />
                </label>
              </td>
            </tr>
            <tr>
              <td className="align-middle"><span className="text-medium">UPS Ground Shipping</span><br /><span className="text-muted text-sm">All Addresses(default zone)</span></td>
              <td className="align-middle">4 - 6 days</td>
              <td className="align-middle">$18.00</td>
              <td className="align-middle">
                <label className="custom-control custom-radio">
                  <input className="custom-control-input" type="radio" name="shipping-method" /><span className="custom-control-indicator" />
                </label>
              </td>
            </tr>
            <tr>
              <td className="align-middle"><span className="text-medium">Local Pickup from store</span><br /><span className="text-muted text-sm">All Addresses(default zone)</span></td>
              <td className="align-middle">—</td>
              <td className="align-middle">$0.00</td>
              <td className="align-middle">
                <label className="custom-control custom-radio">
                  <input className="custom-control-input" type="radio" name="shipping-method" /><span className="custom-control-indicator" />
                </label>
              </td>
            </tr>
            <tr>
              <td className="align-middle"><span className="text-medium">Pick Up at Unishop Locker</span><br /><span className="text-muted text-sm">All Addresses(default zone), United States &amp; Canada</span></td>
              <td className="align-middle">—</td>
              <td className="align-middle">$9.99</td>
              <td className="align-middle">
                <label className="custom-control custom-radio">
                  <input className="custom-control-input" type="radio" name="shipping-method" /><span className="custom-control-indicator" />
                </label>
              </td>
            </tr>
            <tr>
              <td className="align-middle"><span className="text-medium">Unishop Global Export</span><br /><span className="text-muted text-sm">All Addresses(default zone), outside United States</span></td>
              <td className="align-middle">3 - 4 days;</td>
              <td className="align-middle">$25.00</td>
              <td className="align-middle">
                <label className="custom-control custom-radio">
                  <input className="custom-control-input" type="radio" name="shipping-method" /><span className="custom-control-indicator" />
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="checkout-footer margin-top-1x">
        <div className="column"><a className="btn btn-outline-secondary" href="/payment#/checkout-address"><i className="icon-arrow-left" /><span className="hidden-xs-down">&nbsp;Back</span></a></div>
        <div className="column"><a className="btn btn-primary" href="/payment#/checkout-payment"><span className="hidden-xs-down">Continue&nbsp;</span><i className="icon-arrow-right" /></a></div>
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