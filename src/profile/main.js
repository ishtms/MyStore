import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Navigation from '../navigation/main';
import Footer from '../navigation/footer';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import Error from '../error';
import AccountProfile from './account-profile'
import AccountAddress from './account-address';
import AccountOrders from './account-orders';
import AccountTickets from './account-tickets';
import AccountWishlist from './account-wishlist';
import AccountPasswordRecovery from './account-password-recovery'
import OrderTracking from './order-tracking'

class Profile extends Component {
    render () {
        return (
            <div>
                <Navigation  />
                <div style={{marginTop: "30px"}}>
                    <Switch>    
                        <Route exact path="/" component={AccountProfile}/>
                        <Route exact path="/account-profile" component={AccountProfile}/>
                        <Route exact path="/account-address" component={AccountAddress}/>
                        <Route exact path="/account-orders" component={AccountOrders}/>
                        <Route exact path="/account-tickets" component={AccountTickets}/>
                        <Route exact path="/account-wishlist" component={AccountWishlist}/>
                        <Route exact path="/order-tracking" component={OrderTracking}/>
                        <Route exact path="/account-password-recovery" component={AccountPasswordRecovery}/>
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
ReactDOM.render(<HashRouter><Profile/></HashRouter>, document.getElementById('profile'))