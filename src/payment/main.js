import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Cart from './cart';
import CheckoutAddress from './checkout-address';
import CheckoutComplete from './checkout-complete';
import CheckoutPayment from './checkout-payment';
import CheckoutReview from './checkout-review';
import CheckoutShipping from './checkout-shipping';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Error from '../error'
import Navigation from '../navigation/main';
import Footer from '../navigation/footer';

 class Payment extends Component {
    render () {
        return (
            <div>
                <Navigation  />
                <div style={{marginTop: "30px"}}>
                <Switch>    
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/checkout-address" component={CheckoutAddress}/>
                    <Route exact path="/checkout-complete" component={CheckoutComplete}/>
                    <Route exact path="/checkout-payment" component={CheckoutPayment}/>
                    <Route exact path="/checkout-review" component={CheckoutReview}/>
                    <Route exact path="/checkout-shipping" component={CheckoutShipping} />
                    <Route exact path="/error" component={Error} />
                    <Redirect to="/error"/>
                </Switch>
                </div>
                <Footer />
                <a className="scroll-to-top-btn" href="#"><i className="icon-arrow-up" /></a>
          {/* Backdrop*/}
          <div className="site-backdrop" />
            </div>
        );
    }
}
ReactDOM.render(<HashRouter><Payment/></HashRouter>, document.getElementById('payment'))