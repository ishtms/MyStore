import React, { Component } from 'react';

export default class OrderTracking extends Component {
    render () {
        return (
            <div className="container padding-bottom-3x mb-1">
            <div className="card mb-3">
              <div className="p-4 text-center text-white text-lg bg-dark rounded-top"><span className="text-uppercase">Tracking Order No - </span><span className="text-medium">34VB5540K83</span></div>
              <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
                <div className="w-100 text-center py-1 px-2"><span className="text-medium">Shipped Via:</span> UPS Ground</div>
                <div className="w-100 text-center py-1 px-2"><span className="text-medium">Status:</span> Checking Quality</div>
                <div className="w-100 text-center py-1 px-2"><span className="text-medium">Expected Date:</span> SEP 09, 2017</div>
              </div>
              <div className="card-body">
                <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                  <div className="step completed">
                    <div className="step-icon-wrap">
                      <div className="step-icon"><i className="pe-7s-cart" /></div>
                    </div>
                    <h4 className="step-title">Confirmed Order</h4>
                  </div>
                  <div className="step completed">
                    <div className="step-icon-wrap">
                      <div className="step-icon"><i className="pe-7s-config" /></div>
                    </div>
                    <h4 className="step-title">Processing Order</h4>
                  </div>
                  <div className="step completed">
                    <div className="step-icon-wrap">
                      <div className="step-icon"><i className="pe-7s-medal" /></div>
                    </div>
                    <h4 className="step-title">Quality Check</h4>
                  </div>
                  <div className="step">
                    <div className="step-icon-wrap">
                      <div className="step-icon"><i className="pe-7s-car" /></div>
                    </div>
                    <h4 className="step-title">Product Dispatched</h4>
                  </div>
                  <div className="step">
                    <div className="step-icon-wrap">
                      <div className="step-icon"><i className="pe-7s-home" /></div>
                    </div>
                    <h4 className="step-title">Product Delivered</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between align-items-center">
              <div className="w-100 text-center text-sm-left">
                <label className="custom-control custom-checkbox d-inline-box">
                  <input className="custom-control-input" type="checkbox" defaultChecked /><span className="custom-control-indicator" /><span className="custom-control-description">Notify me when order is delivered</span>
                </label>
              </div>
              <div className="w-100 text-center text-sm-right"><a className="btn btn-outline-primary" href="/profile#/account-orders" data-toggle="modal" data-target="#orderDetails">View Order Details</a></div>
            </div>
          </div>
          
        );
    }
}