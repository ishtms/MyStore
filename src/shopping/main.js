import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../navigation/main';
import Footer from '../navigation/footer';

 class Shopping extends Component {
    render () {
        return (
            <div>
                <Navigation  />
                Shopping
                <Footer />
                <a className="scroll-to-top-btn" href="#"><i className="icon-arrow-up" /></a>
          {/* Backdrop*/}
          <div className="site-backdrop" />
            </div>
        );
    }
}
ReactDOM.render(<Shopping/>, document.getElementById('shopping'))