import React, { Component } from 'react';

export default class AccountTickets extends Component {
    render () {
        return (<div>
        <form className="modal fade" method="post" id="openTicket" tabIndex={-1}>
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Submit New Ticket</h4>
        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
      </div>
      <div className="modal-body">
        <p className="text-muted">We normally respond tickets within 2 business days.</p>
        <div className="form-group">
          <label htmlFor="ticket-subject">Subject</label>
          <input className="form-control" type="text" id="ticket-subject" required />
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="ticket-type">Type</label>
              <select className="form-control" id="ticket-type">
                <option>Choose type</option>
                <option>Website problem</option>
                <option>Partner request</option>
                <option>Complaint</option>
                <option>Info inquiry</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="ticket-priority">Priority</label>
              <select className="form-control" id="ticket-priority">
                <option>How urgent is your issue?</option>
                <option>Urgent</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="ticket-description">Description</label>
          <textarea className="form-control" id="ticket-description" rows={8} required defaultValue={""} />
        </div>
      </div>
      <div className="modal-footer flex-wrap justify-content-between align-items-center">
        <div className="custom-file">
          <input className="custom-file-input" type="file" id="file-input" /><span className="custom-file-control" />
        </div>
        <button className="btn btn-primary" type="submit">Submit Ticket</button>
      </div>
    </div>
  </div>
</form>

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
                <nav className="list-group"><a className="list-group-item with-badge" href="/profile#/account-orders"><i className="icon-bag" />Orders<span className="badge badge-primary badge-pill">6</span></a><a className="list-group-item" href="/profile#/account-profile"><i className="icon-head" />Profile</a><a className="list-group-item" href="/profile#/account-address"><i className="icon-map" />Addresses</a><a className="list-group-item with-badge" href="/profile#/account-wishlist"><i className="icon-heart" />Wishlist<span className="badge badge-primary badge-pill">3</span></a><a className="list-group-item with-badge active" href="/profile#/account-tickets"><i className="icon-tag" />My Tickets<span className="badge badge-primary badge-pill">4</span></a></nav>
              </div>
              <div className="col-lg-8">
                <div className="padding-top-2x mt-2 hidden-lg-up" />
                <div className="table-responsive">
                  <table className="table table-hover margin-bottom-none">
                    <thead>
                      <tr>
                        <th>Ticket Name</th>
                        <th>Date Submitted | Updated</th>
                        <th>Type</th>
                        <th>Priority</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a className="text-medium navi-link" href="#">My new ticket</a></td>
                        <td>08/08/2017 | 08/14/2017</td>
                        <td>Website problem</td>
                        <td><span className="text-warning">High</span></td>
                        <td><span className="text-primary">Open</span></td>
                      </tr>
                      <tr>
                        <td><a className="text-medium navi-link" href="#">Another ticket</a></td>
                        <td>07/21/2017 | 07/23/2017</td>
                        <td>Partner request</td>
                        <td><span className="text-info">Medium</span></td>
                        <td><span className="text-muted">Closed</span></td>
                      </tr>
                      <tr>
                        <td><a className="text-medium navi-link" href="#">Yet another ticket</a></td>
                        <td>05/19/2017 | 05/20/2017</td>
                        <td>Complaint</td>
                        <td><span className="text-danger">Urgent</span></td>
                        <td><span className="text-muted">Closed</span></td>
                      </tr>
                      <tr>
                        <td><a className="text-medium navi-link" href="#">My old ticket</a></td>
                        <td>05/19/2017 | 05/20/2017</td>
                        <td>Info inquiry</td>
                        <td><span className="text-success">Low</span></td>
                        <td><span className="text-muted">Closed</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr className="mb-4" />
                <div className="text-right">
                  <button className="btn btn-primary margin-bottom-none" data-toggle="modal" data-target="#openTicket">Submit New Ticket</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        );
    }
}