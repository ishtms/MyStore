import React, { Component } from 'react';

export default class AccountProfile extends Component {
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
                <nav className="list-group"><a className="list-group-item with-badge" href="/profile#/account-orders"><i className="icon-bag" />Orders<span className="badge badge-primary badge-pill">6</span></a><a className="list-group-item active" href="/profile#/account-profile"><i className="icon-head" />Profile</a><a className="list-group-item" href="/profile#/account-address"><i className="icon-map" />Addresses</a><a className="list-group-item with-badge" href="/profile#/account-wishlist"><i className="icon-heart" />Wishlist<span className="badge badge-primary badge-pill">3</span></a><a className="list-group-item with-badge" href="/profile#/account-tickets"><i className="icon-tag" />My Tickets<span className="badge badge-primary badge-pill">4</span></a></nav>
              </div>
              <div className="col-lg-8">
                <div className="padding-top-2x mt-2 hidden-lg-up" />
                <form className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-fn">First Name</label>
                      <input className="form-control" type="text" id="account-fn" defaultValue="Daniel" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-ln">Last Name</label>
                      <input className="form-control" type="text" id="account-ln" defaultValue="Adams" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-email">E-mail Address</label>
                      <input className="form-control" type="email" id="account-email" defaultValue="daniel.adams@mail.com" disabled />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-phone">Phone Number</label>
                      <input className="form-control" type="text" id="account-phone" defaultValue="+7(805) 348 95 72" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-pass">New Password</label>
                      <input className="form-control" type="password" id="account-pass" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-confirm-pass">Confirm Password</label>
                      <input className="form-control" type="password" id="account-confirm-pass" />
                    </div>
                  </div>
                  <div className="col-12">
                    <hr className="mt-2 mb-3" />
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <label className="custom-control custom-checkbox d-block">
                        <input className="custom-control-input" type="checkbox" defaultChecked /><span className="custom-control-indicator" /><span className="custom-control-description">Subscribe me to Newsletter</span>
                      </label>
                      <button className="btn btn-primary margin-right-none" type="button" data-toast data-toast-position="topRight" data-toast-type="success" data-toast-icon="icon-circle-check" data-toast-title="Success!" data-toast-message="Your profile updated successfuly.">Update Profile</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        );
    }
}