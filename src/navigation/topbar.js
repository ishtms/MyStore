import React, { Component } from 'react';

export default class TopBar extends Component {
    render () {
        return (
            <div>
            <div className="topbar">
                    <div className="topbar-column"><a className="hidden-md-down" href="mailto:codemode.co@gmail.com"><i className="icon-mail" />&nbsp; codemode.co@gmail.com</a><a className="hidden-md-down" href="tel:+917780874266"><i className="icon-bell" />&nbsp; +91 77 808 74266</a><a className="social-button sb-facebook shape-none sb-dark" href="#" target="_blank"><i className="socicon-facebook" /></a><a className="social-button sb-twitter shape-none sb-dark" href="#" target="_blank"><i className="socicon-twitter" /></a><a className="social-button sb-instagram shape-none sb-dark" href="#" target="_blank"><i className="socicon-instagram" /></a><a className="social-button sb-pinterest shape-none sb-dark" href="#" target="_blank"><i className="socicon-pinterest" /></a>
                    </div>
                    <div className="topbar-column"><a className="hidden-md-down" href="#"><i className="icon-download" />&nbsp; Get mobile app</a>
                    </div>
                </div>
            </div>
        );
    }
}