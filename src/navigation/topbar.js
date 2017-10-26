import React, { Component } from 'react';

export default class TopBar extends Component {
    render () {
        return (
            <div>
            <div className="topbar">
                    <div className="topbar-column"><a className="hidden-md-down" href="mailto:support@unishop.com"><i className="icon-mail" />&nbsp; support@unishop.com</a><a className="hidden-md-down" href="tel:00331697720"><i className="icon-bell" />&nbsp; 00 33 169 7720</a><a className="social-button sb-facebook shape-none sb-dark" href="#" target="_blank"><i className="socicon-facebook" /></a><a className="social-button sb-twitter shape-none sb-dark" href="#" target="_blank"><i className="socicon-twitter" /></a><a className="social-button sb-instagram shape-none sb-dark" href="#" target="_blank"><i className="socicon-instagram" /></a><a className="social-button sb-pinterest shape-none sb-dark" href="#" target="_blank"><i className="socicon-pinterest" /></a>
                    </div>
                    <div className="topbar-column"><a className="hidden-md-down" href="#"><i className="icon-download" />&nbsp; Get mobile app</a>
                    <div className="lang-currency-switcher-wrap">
                        <div className="lang-currency-switcher dropdown-toggle"><span className="language"><img alt="English" src="img/flags/GB.png" /></span><span className="currency">$ USD</span></div>
                        <div className="dropdown-menu">
                        <div className="currency-select">
                            <select className="form-control form-control-rounded form-control-sm">
                            <option value="usd">$ USD</option>
                            <option value="usd">€ EUR</option>
                            <option value="usd">£ UKP</option>
                            <option value="usd">¥ JPY</option>
                            </select>
                        </div><a className="dropdown-item" href="#"><img src="img/flags/FR.png" alt="Français" />Français</a><a className="dropdown-item" href="#"><img src="img/flags/DE.png" alt="Deutsch" />Deutsch</a><a className="dropdown-item" href="#"><img src="img/flags/IT.png" alt="Italiano" />Italiano</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}