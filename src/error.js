import React, { Component } from 'react';

export default class Error extends Component {
  componentDidMount(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;        
}
    render () {
        return (
            <div className="offcanvas-wrapper">
            {/* Page Content*/}
            <div className="container padding-top-3x padding-bottom-3x mb-1"><img className="d-block m-auto" src="img/404_art.jpg" style={{width: '100%', maxWidth: 550}} alt={404} />
              <div className="padding-top-1x mt-2 text-center">
                <h3>Page Not Found</h3>
                <p>It seems we can’t find page you are looking for. <a href="index-2.html">Go back to Homepage</a><br />Or try using search at the top right corner of the page.</p>
              </div>
            </div>
          </div>
          
        );
    }
}