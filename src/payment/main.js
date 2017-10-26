import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Navigation from '../navigation/main';
import Footer from '../navigation/footer';

 class Payment extends Component {
    render () {
        return (
            <div>
                <Navigation  />
                Payment
                <Footer />
                <a className="scroll-to-top-btn" href="#"><i className="icon-arrow-up" /></a>
          {/* Backdrop*/}
          <div className="site-backdrop" />
            </div>
        );
    }
}
ReactDOM.render(<Payment/>, document.getElementById('payment'))