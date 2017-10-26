import React, { Component } from 'react';

export default class AccountWishlist extends Component {
    render () {
        return (
            <div className="container padding-bottom-3x mb-2">
            <div className="row">
              <div className="col-lg-4">
                <aside className="user-info-wrapper">
                  <div className="user-cover" style={{backgroundImage: 'url(img/account/user-cover-img.jpg)'}}>
                    <div className="info-label" data-toggle="tooltip" title="You currently have 290 Reward Points to spend"><i className="icon-medal" />290 points</div>
                  </div>
                  <div className="user-info">
                    <div className="user-avatar"><a className="edit-avatar" href="#" /><img src="img/account/user-ava.jpg" alt="User" /></div>
                    <div className="user-data">
                      <h4>Daniel Adams</h4><span>Joined February 06, 2017</span>
                    </div>
                  </div>
                </aside>
                <nav className="list-group"><a className="list-group-item with-badge" href="/profile#/account-orders"><i className="icon-bag" />Orders<span className="badge badge-primary badge-pill">6</span></a><a className="list-group-item" href="/profile#/account-profile"><i className="icon-head" />Profile</a><a className="list-group-item" href="/profile#/account-address"><i className="icon-map" />Addresses</a><a className="list-group-item with-badge active" href="/profile#/account-wishlist"><i className="icon-heart" />Wishlist<span className="badge badge-primary badge-pill">3</span></a><a className="list-group-item with-badge" href="/profile#/account-tickets"><i className="icon-tag" />My Tickets<span className="badge badge-primary badge-pill">4</span></a></nav>
              </div>
              <div className="col-lg-8">
                <div className="padding-top-2x mt-2 hidden-lg-up" />
                {/* Wishlist Table*/}
                <div className="table-responsive wishlist-table margin-bottom-none">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th className="text-center"><a className="btn btn-sm btn-outline-danger" href="#">Clear Wishlist</a></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="product-item"><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/cart/01.jpg" alt="Product" /></a>
                            <div className="product-info">
                              <h4 className="product-title"><a href="/shopping#/shop-single">Unionbay Park</a></h4>
                              <div className="text-lg text-medium text-muted">$43.90</div>
                              <div>Availability:
                                <div className="d-inline text-success">In Stock</div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title="Remove item"><i className="icon-cross" /></a></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="product-item"><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/cart/02.jpg" alt="Product" /></a>
                            <div className="product-info">
                              <h4 className="product-title"><a href="/shopping#/shop-single">Daily Fabric Cap</a></h4>
                              <div className="text-lg text-medium text-muted">$24.70</div>
                              <div>Availability:
                                <div className="d-inline text-warning">2 - 3 Weeks</div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title="Remove item"><i className="icon-cross" /></a></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="product-item"><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/cart/03.jpg" alt="Product" /></a>
                            <div className="product-info">
                              <h4 className="product-title"><a href="/shopping#/shop-single">Cole Haan Crossbody</a></h4>
                              <div className="text-lg text-medium text-muted">$200.00</div>
                              <div>Availability:
                                <div className="d-inline text-success">In Stock</div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title="Remove item"><i className="icon-cross" /></a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr className="mb-4" />
                <label className="custom-control custom-checkbox d-block">
                  <input className="custom-control-input" type="checkbox" defaultChecked /><span className="custom-control-indicator" /><span className="custom-control-description">Inform me when item from my wishlist is available</span>
                </label>
              </div>
            </div>
          </div>
          
        );
    }
}