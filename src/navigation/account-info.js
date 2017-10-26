import React, { Component } from 'react';

export default class AccountInfo extends Component {
    render () {
        return (
            <div>
            <div className="toolbar">
                    <div className="inner">
                        <div className="tools">
                        <div className="search"><i className="icon-search" /></div>
                        <div className="account"><a href="account-orders.html" /><i className="icon-head" />
                            <ul className="toolbar-dropdown">
                            <li className="sub-menu-user">
                                <div className="user-ava"><img src="img/account/user-ava-sm.jpg" alt="Daniel Adams" />
                                </div>
                                <div className="user-info">
                                <h6 className="user-name">Daniel Adams</h6><span className="text-xs text-muted">290 Reward points</span>
                                </div>
                            </li>
                            <li><a href="account-profile.html">My Profile</a></li>
                            <li><a href="account-orders.html">Orders List</a></li>
                            <li><a href="account-wishlist.html">Wishlist</a></li>
                            <li className="sub-menu-separator" />
                            <li><a href="#"> <i className="icon-unlock" />Logout</a></li>
                            </ul>
                        </div>
                        <div className="cart"><a href="cart.html" /><i className="icon-bag" /><span className="count">3</span><span className="subtotal">$289.68</span>
                            <div className="toolbar-dropdown">
                            <div className="dropdown-product-item"><span className="dropdown-product-remove"><i className="icon-cross" /></span><a className="dropdown-product-thumb" href="shop-single.html"><img src="img/cart-dropdown/01.jpg" alt="Product" /></a>
                                <div className="dropdown-product-info"><a className="dropdown-product-title" href="shop-single.html">Unionbay Park</a><span className="dropdown-product-details">1 x $43.90</span></div>
                            </div>
                            <div className="dropdown-product-item"><span className="dropdown-product-remove"><i className="icon-cross" /></span><a className="dropdown-product-thumb" href="shop-single.html"><img src="img/cart-dropdown/02.jpg" alt="Product" /></a>
                                <div className="dropdown-product-info"><a className="dropdown-product-title" href="shop-single.html">Daily Fabric Cap</a><span className="dropdown-product-details">2 x $24.89</span></div>
                            </div>
                            <div className="dropdown-product-item"><span className="dropdown-product-remove"><i className="icon-cross" /></span><a className="dropdown-product-thumb" href="shop-single.html"><img src="img/cart-dropdown/03.jpg" alt="Product" /></a>
                                <div className="dropdown-product-info"><a className="dropdown-product-title" href="shop-single.html">Haan Crossbody</a><span className="dropdown-product-details">1 x $200.00</span></div>
                            </div>
                            <div className="toolbar-dropdown-group">
                                <div className="column"><span className="text-lg">Total:</span></div>
                                <div className="column text-right"><span className="text-lg text-medium">$289.68&nbsp;</span></div>
                            </div>
                            <div className="toolbar-dropdown-group">
                                <div className="column"><a className="btn btn-sm btn-block btn-secondary" href="cart.html">View Cart</a></div>
                                <div className="column"><a className="btn btn-sm btn-block btn-success" href="checkout-address.html">Checkout</a></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}