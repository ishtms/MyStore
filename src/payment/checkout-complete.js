import React, { Component } from 'react';

export default class CheckoutComplete extends Component {
  componentDidMount(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;        
}
    render () {
        return (
            <div className="container padding-bottom-3x mb-2">
            <div className="card text-center">
              <div className="card-block padding-top-2x">
                <h3 className="card-title">Thank you for your order!</h3>
                <p className="card-text">Your order has been placed and will be processed as soon as possible.</p>
                <p className="card-text">Make sure you make note of your order number, which is <span className="text-medium">34VB5540K83</span></p>
                <p className="card-text">You will be receiving an email shortly with confirmation of your order. 
                  <u>You can now:</u>
                </p>
                <div className="padding-top-1x padding-bottom-1x"><a className="btn btn-outline-secondary" href="/shopping#/shop-grid">Go Back Shopping</a><a className="btn btn-outline-primary" href="/profile#/order-tracking"><i className="icon-location" />&nbsp;Track order</a></div>
              </div>
            </div>
          </div>
          
        );
    }
}