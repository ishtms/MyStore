import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Navigation from '../navigation/main';
import Footer from '../navigation/footer';

class Profile extends Component {
    render () {
        return (
            <div>
                <Navigation  />
                Profile
                <Footer />
                <a className="scroll-to-top-btn" href="#"><i className="icon-arrow-up" /></a>
          {/* Backdrop*/}
          <div className="site-backdrop" />
            </div>
        );
    }
}
ReactDOM.render(<Profile/>, document.getElementById('profile'))