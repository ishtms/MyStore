import React, { Component } from 'react';

export default class AccountOrders extends Component {
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
                <nav className="list-group"><a className="list-group-item with-badge active" href="/profile#/account-orders"><i className="icon-bag" />Orders<span className="badge badge-primary badge-pill">6</span></a><a className="list-group-item" href="/profile#/account-profile"><i className="icon-head" />Profile</a><a className="list-group-item" href="/profile#/account-address"><i className="icon-map" />Addresses</a><a className="list-group-item with-badge" href="/profile#/account-wishlist"><i className="icon-heart" />Wishlist<span className="badge badge-primary badge-pill">3</span></a><a className="list-group-item with-badge" href="/profile#/account-tickets"><i className="icon-tag" />My Tickets<span className="badge badge-primary badge-pill">4</span></a></nav>
              </div>
              <div className="col-lg-8">
                <div className="padding-top-2x mt-2 hidden-lg-up" />
                <div className="table-responsive">
                  <table className="table table-hover margin-bottom-none">
                    <thead>
                      <tr>
                        <th>Order #</th>
                        <th>Date Purchased</th>
                        <th>Status</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a className="text-medium navi-link" href="#" data-toggle="modal" data-target="#orderDetails">78A643CD409</a></td>
                        <td>August 08, 2017</td>
                        <td><span className="text-danger">Canceled</span></td>
                        <td><span className="text-medium">$760.50</span></td>
                      </tr>
                      <tr>
                        <td><a className="text-medium navi-link" href="#" data-toggle="modal" data-target="#orderDetails">34VB5540K83</a></td>
                        <td>July 21, 2017</td>
                        <td><span className="text-info">In Progress</span></td>
                        <td><span className="text-medium">$315.20</span></td>
                      </tr>
                      <tr>
                        <td><a className="text-medium navi-link" href="#" data-toggle="modal" data-target="#orderDetails">112P45A90V2</a></td>
                        <td>June 15, 2017</td>
                        <td><span className="text-warning">Delayed</span></td>
                        <td><span className="text-medium">$1,264.00</span></td>
                      </tr>
                      <tr>
                        <td><a className="text-medium navi-link" href="#" data-toggle="modal" data-target="#orderDetails">28BA67U0981</a></td>
                        <td>May 19, 2017</td>
                        <td><span className="text-success">Delivered</span></td>
                        <td><span className="text-medium">$198.35</span></td>
                      </tr>
                      <tr>
                        <td><a className="text-medium navi-link" href="#" data-toggle="modal" data-target="#orderDetails">502TR872W2</a></td>
                        <td>April 04, 2017</td>
                        <td><span className="text-success">Delivered</span></td>
                        <td><span className="text-medium">$2,133.90</span></td>
                      </tr>
                      <tr>
                        <td><a className="text-medium navi-link" href="#" data-toggle="modal" data-target="#orderDetails">47H76G09F33</a></td>
                        <td>March 30, 2017</td>
                        <td><span className="text-success">Delivered</span></td>
                        <td><span className="text-medium">$86.40</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr />
                <div className="text-right"><a className="btn btn-link-primary margin-bottom-none" href="#"><i className="icon-download" />&nbsp;Order Details</a></div>
              </div>
            </div>
          </div>
          
        );
    }
}