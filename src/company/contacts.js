import React, { Component } from 'react';

export default class Contacts extends Component {
    componentDidMount(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;        
    }
    render () {
        return (
            <div className="container padding-bottom-2x mb-2">
            <div className="row">
              <div className="col-md-7">
                <div className="display-3 text-muted opacity-75 mb-30">Customer Service</div>
              </div>
              <div className="col-md-5">
                <ul className="list-icon">
                  <li> <i className="icon-mail" /><a className="navi-link" href="mailto:codemode.co@gmail.com">codemode.co@gmail.com</a></li>
                  <li> <i className="icon-bell" />+91 77 808 74266</li>
                  <li> <i className="icon-clock" />1 - 2 business days</li>
                </ul>
              </div>
            </div>
            <hr className="margin-top-2x" />
            <div className="row margin-top-2x">
              <div className="col-md-7">
                <div className="display-3 text-muted opacity-75 mb-30">Tech Support</div>
              </div>
              <div className="col-md-5">
                <ul className="list-icon">
                  <li> <i className="icon-mail" /><a className="navi-link" href="mailto:support@unishop.com">ish.rissam@gmail.com</a></li>
                  <li> <i className="icon-bell" />+91 778 087 4266</li>
                  <li> <i className="icon-clock" />1 - 2 business days</li>
                </ul>
              </div>
            </div>
            <h3 className="margin-top-3x text-center mb-30">Outlet Stores</h3>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="card mb-30">
                  
                  <div className="card-body">
                    <ul className="list-icon">
                      <li> <i className="icon-map" />Floor No. 1, Gurudwara Complex, BakshiNagar, Jammu, Jammu & Kashmir, India</li>
                      <li> <i className="icon-bell" />+91 778 087 4266</li>
                      <li> <i className="icon-mail" /><a className="navi-link" href="mailto:codemode.co@gmail.com">codemode.co@gmail.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="card mb-30">
                  <div className="card-body">
                    <ul className="list-icon">
                      <li> <i className="icon-map" />101/102 Roulki, Bakshi Nagar, Jammu, Jammu and Kashmir,<br/> India </li>
                      <li> <i className="icon-bell" />+91 778 087 4266</li>
                      <li> <i className="icon-mail" /><a className="navi-link" href="mailto:codemode.co@gmail.com">ish.rissam@gmail.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}