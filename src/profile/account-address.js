import React, { Component } from 'react';

export default class AccountAddress extends Component {
    render () {
        return (
            <div className="container padding-bottom-3x mb-1">
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
                <nav className="list-group"><a className="list-group-item with-badge" href="/profile#/account-orders"><i className="icon-bag" />Orders<span className="badge badge-primary badge-pill">6</span></a><a className="list-group-item" href="/profile#/account-profile"><i className="icon-head" />Profile</a><a className="list-group-item active" href="/profile#/account-address"><i className="icon-map" />Addresses</a><a className="list-group-item with-badge" href="/profile#/account-wishlist"><i className="icon-heart" />Wishlist<span className="badge badge-primary badge-pill">3</span></a><a className="list-group-item with-badge" href="/profile#/account-tickets"><i className="icon-tag" />My Tickets<span className="badge badge-primary badge-pill">4</span></a></nav>
              </div>
              <div className="col-lg-8">
                <div className="padding-top-2x mt-2 hidden-lg-up" />
                <h4>Contact Address</h4>
                <hr className="padding-bottom-1x" />
                <form className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-company">Company</label>
                      <input className="form-control" type="text" id="account-company" defaultValue="Bets Company Ltd." />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-country">Country</label>
                      <select defaultValue="United States" className="form-control" id="account-country">
                        <option>Choose country</option>
                        <option>Australia</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                        <option>Switzerland</option>
                        <option>United States</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-city">City</label>
                      <select defaultValue="Amsterdam" className="form-control" id="account-city">
                        <option>Choose city</option>
                        <option>Amsterdam</option>
                        <option>Berlin</option>
                        <option>Geneve</option>
                        <option>New York</option>
                        <option>Paris</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-zip">ZIP Code</label>
                      <input className="form-control" type="text" id="account-zip" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-address1">Address 1</label>
                      <input className="form-control" type="text" id="account-address1" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-address2">Address 2</label>
                      <input className="form-control" type="text" id="account-address2" />
                    </div>
                  </div>
                  <div className="col-12 padding-top-1x">
                    <h4>Shipping Address</h4>
                    <hr className="padding-bottom-1x" />
                    <label className="custom-control custom-checkbox d-block">
                      <input className="custom-control-input" type="checkbox" defaultChecked /><span className="custom-control-indicator" /><span className="custom-control-description">Same as Contact Address</span>
                    </label>
                    <hr className="margin-top-1x margin-bottom-1x" />
                    <div className="text-right">
                      <button className="btn btn-primary margin-bottom-none" type="button" data-toast data-toast-position="topRight" data-toast-type="success" data-toast-icon="icon-circle-check" data-toast-title="Success!" data-toast-message="Your address updated successfuly.">Update Address</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        );
    }
}