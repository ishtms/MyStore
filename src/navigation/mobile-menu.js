import React, { Component } from 'react';

export default class MobileMenu extends Component {
    render () {
        return (
            <div>
                <div className="offcanvas-container" id="mobile-menu"><a className="account-link" href="/profile#/account-orders">
                    <div className="user-ava"><img src="img/account/user-ava-md.jpg" alt="Daniel Adams" />
                    </div>
                    <div className="user-info">
                        <h6 className="user-name">Daniel Adams</h6><span className="text-sm text-white opacity-60">290 Reward points</span>
                    </div></a>
                    <nav className="offcanvas-menu">
                    <ul className="menu">
                        <li className="has-children"><span><a href="/"><span>Home</span></a><span className="sub-menu-toggle" /></span>
                        <ul className="offcanvas-submenu">
                            <li><a href="/shopping#/featured">Featured Products Slider</a></li>
                            <li><a href="/shopping#/featured">Featured Categories</a></li>
                            <li><a href="/shopping#/showcase">Products Collection Showcase</a></li>
                        </ul>
                        </li>
                        <li className="has-children"><span><a href="/shopping#/shop-grid"><span>Shop</span></a><span className="sub-menu-toggle" /></span>
                        <ul className="offcanvas-submenu">
                            <li><a href="/shopping#/shop-categories">Shop Categories</a></li>
                            <li className="has-children"><span><a href="/shopping#/shop-grid"><span>Shop Grid</span></a><span className="sub-menu-toggle" /></span>
                            <ul className="offcanvas-submenu">
                                <li><a href="/shopping#/shop-grid">Grid Left Sidebar</a></li>
                                <li><a href="/shopping#/shop-grid">Grid Right Sidebar</a></li>
                                <li><a href="/shopping#/shop-grid">Grid No Sidebar</a></li>
                            </ul>
                            </li>
                            <li><a href="/shopping#/shop-single">Single Product</a></li>
                            <li><a href="/payment#/cart">Cart</a></li>
                            <li><a href="/payment#/checkout-address">Checkout</a></li>
                        </ul>
                        </li>
                        <li className="has-children"><span><a href="#">Categories</a><span className="sub-menu-toggle" /></span>
                        <ul className="offcanvas-submenu">
                            <li className="has-children"><span><a href="#">Men's Shoes</a><span className="sub-menu-toggle" /></span>
                            <ul className="offcanvas-submenu">
                                <li><a href="#">Sneakers</a></li>
                                <li><a href="#">Loafers</a></li>
                                <li><a href="#">Boat Shoes</a></li>
                                <li><a href="#">Sandals</a></li>
                                <li><a href="#">View All</a></li>
                            </ul>
                            </li>
                            <li className="has-children"><span><a href="#">Women's Shoes</a><span className="sub-menu-toggle" /></span>
                            <ul className="offcanvas-submenu">
                                <li><a href="#">Sandals</a></li>
                                <li><a href="#">Flats</a></li>
                                <li><a href="#">Sneakers</a></li>
                                <li><a href="#">Heels</a></li>
                                <li><a href="#">View All</a></li>
                            </ul>
                            </li>
                            <li className="has-children"><span><a href="#">Men's Clothing</a><span className="sub-menu-toggle" /></span>
                            <ul className="offcanvas-submenu">
                                <li><a href="#">Shirts &amp; Tops</a></li>
                                <li><a href="#">Pants</a></li>
                                <li><a href="#">Jackets</a></li>
                                <li><a href="#">View All</a></li>
                            </ul>
                            </li>
                            <li className="has-children"><span><a href="#">Women's Clothing</a><span className="sub-menu-toggle" /></span>
                            <ul className="offcanvas-submenu">
                                <li><a href="#">Dresses</a></li>
                                <li><a href="#">Shirts &amp; Tops</a></li>
                                <li><a href="#">Shorts</a></li>
                                <li><a href="#">Swimwear</a></li>
                                <li><a href="#">View All</a></li>
                            </ul>
                            </li>
                            <li className="has-children"><span><a href="#">Bags</a><span className="sub-menu-toggle" /></span>
                            <ul className="offcanvas-submenu">
                                <li><a href="#">Handbags</a></li>
                                <li><a href="#">Backpacks</a></li>
                                <li><a href="#">Luggage</a></li>
                                <li><a href="#">Wallets</a></li>
                                <li><a href="#">View All</a></li>
                            </ul>
                            </li>
                            <li className="has-children"><span><a href="#">Accessories</a><span className="sub-menu-toggle" /></span>
                            <ul className="offcanvas-submenu">
                                <li><a href="#">Sunglasses</a></li>
                                <li><a href="#">Hats</a></li>
                                <li><a href="#">Watches</a></li>
                                <li><a href="#">Jewelry</a></li>
                                <li><a href="#">Belts</a></li>
                                <li><a href="#">View All</a></li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li className="has-children active"><span><a href="/profile#/account-orders"><span>Account</span></a><span className="sub-menu-toggle" /></span>
                        <ul className="offcanvas-submenu">
                            <li className="active"><a href="/login">Login / Register</a></li>
                            <li><a href="/profile#/account-password-recovery">Password Recovery</a></li>
                            <li><a href="/profile#/accountorders">Orders List</a></li>
                            <li><a href="/profile#/account-wishlist">Wishlist</a></li>
                            <li><a href="/profile#/account-profile">Profile Page</a></li>
                            <li><a href="/profile#/account-address">Contact / Shipping Address</a></li>
                            <li><a href="/profile#/account-tickets">Open Ticket</a></li>
                            <li><a href="/profile#/account-tickets">My Tickets</a></li>
                        </ul>
                        </li>
                        <li className="has-children"><span><a href="/company#/blog"><span>Blog</span></a><span className="sub-menu-toggle" /></span>
                        </li>
                        <li className="has-children"><span><a href="#"><span>Pages</span></a><span className="sub-menu-toggle" /></span>
                        <ul className="offcanvas-submenu">
                            <li><a href="/company#/about">About Us</a></li>
                            <li><a href="/company#/contacts">Contacts</a></li>
                            <li><a href="/company#/faq">Help / FAQ</a></li>
                            <li><a href="/profile#/order-tracking">Order Tracking</a></li>
                            <li><a href="/shopping#/search-results">Search Results</a></li>
                            <li><a href="/you-fine-bro">404</a></li>
                        </ul>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        );
    }
}