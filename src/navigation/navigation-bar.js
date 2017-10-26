import React, { Component } from 'react';

export default class NavigationBar extends Component {
    render () {
        return (
            <div>
             <nav className="site-menu">
                    <ul>
                        <li className="has-megamenu"><a href="/"><span>Home</span></a>
                        <ul className="mega-menu">
                            <li><a className="d-block img-thumbnail text-center navi-link" href="/shopping#/featured"><img alt="Featured Products Slider" src="img/mega-menu-home/01.jpg" />
                                <h6 className="mt-3">Featured Products Slider</h6></a></li>
                            <li><a className="d-block img-thumbnail text-center navi-link" href="/shopping#/featured"><img alt="Featured Categories" src="img/mega-menu-home/02.jpg" />
                                <h6 className="mt-3">Featured Categories</h6></a></li>
                            <li><a className="d-block img-thumbnail text-center navi-link" href="/shopping#/showcase"><img alt="Products Collection Showcase" src="img/mega-menu-home/03.jpg" />
                                <h6 className="mt-3">Products Collection Showcase</h6></a></li>
                            <li>
                            <div className="img-thumbnail text-center"><img alt="More To Come. Stay Tuned!" src="img/mega-menu-home/04.jpg" />
                                <h6 className="mt-3">More To Come. Stay Tuned!</h6>
                            </div>
                            </li>
                        </ul>
                        </li>
                        <li><a href="/shopping#/shop-grid"><span>Shop</span></a>
                        <ul className="sub-menu">
                            <li><a href="/shopping#/shop-categories">Shop Categories</a></li>
                            <li className="has-children"><a href="/shopping#/shop-grid"><span>Shop Grid</span></a>
                           </li>
                            <li><a href="/shopping#/shop-single">Single Product</a></li>
                            <li><a href="/payment#/cart">Cart</a></li>
                            <li className="has-children"><a href="/payment#/checkout-address"><span>Checkout</span></a>
                            <ul className="sub-menu">             
                                <li><a href="/payment#/checkout-address">Address</a></li>
                                <li><a href="/payment#/checkout-shipping">Shipping</a></li>
                                <li><a href="/payment#/checkout-payment">Payment</a></li>
                                <li><a href="/payment#/checkout-review">Review</a></li>
                                <li><a href="/payment#/checkout-complete">Complete</a></li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li className="has-megamenu"><a href="#"><span>Mega Menu</span></a>
                        <ul className="mega-menu">
                            <li><span className="mega-menu-title">Top Categories</span>
                            <ul className="sub-menu">
                                <li><a href="#">Men's Shoes</a></li>
                                <li><a href="#">Women's Shoes</a></li>
                                <li><a href="#">Shirts and Tops</a></li>
                                <li><a href="#">Swimwear</a></li>
                                <li><a href="#">Shorts and Pants</a></li>
                                <li><a href="#">Accessories</a></li>
                            </ul>
                            </li>
                            <li><span className="mega-menu-title">Specialty Shops</span>
                            <ul className="sub-menu">
                                <li><a href="#">Junior's Shop</a></li>
                                <li><a href="#">Swim Shop</a></li>
                                <li><a href="#">Athletic Shop</a></li>
                                <li><a href="#">Outdoor Shop</a></li>
                                <li><a href="#">Luxury Shop</a></li>
                                <li><a href="#">Accessories Shop</a></li>
                            </ul>
                            </li>
                            <li>
                            <section className="promo-box" style={{backgroundImage: 'url(img/banners/02.jpg)'}}><span className="overlay-dark" style={{opacity: '.4'}} />
                                <div className="promo-box-content text-center padding-top-2x padding-bottom-2x">
                                <h4 className="text-light text-thin text-shadow">New Collection of</h4>
                                <h3 className="text-bold text-light text-shadow">Sunglasses</h3><a className="btn btn-sm btn-primary" href="#">Shop Now</a>
                                </div>
                            </section>
                            </li>
                            <li>
                            <section className="promo-box" style={{backgroundImage: 'url(img/banners/03.jpg)'}}>
                                {/* Choose between .overlay-dark (#000) or .overlay-light (#fff) with default opacity of 50%. You can overrride default color and opacity values via 'style' attribute.*/}<span className="overlay-dark" style={{opacity: '.45'}} />
                                <div className="promo-box-content text-center padding-top-2x padding-bottom-2x">
                                <h3 className="text-bold text-light text-shadow">Limited Offer</h3>
                                <h4 className="text-light text-thin text-shadow">save up to 50%!</h4><a className="btn btn-sm btn-primary" href="#">Learn More</a>
                                </div>
                            </section>
                            </li>
                        </ul>
                        </li>
                        <li className="active"><a href="/profile#/account-orders"><span>Account</span></a>
                        <ul className="sub-menu">
                            <li className="active"><a href="/login">Login / Register</a></li>
                            <li><a href="/profile#/account-password-recovery">Password Recovery</a></li>
                            <li><a href="/profile#/account-orders">Orders List</a></li>
                            <li><a href="/profile#/account-wishlist">Wishlist</a></li>
                            <li><a href="/profile#/account-profile">Profile Page</a></li>
                            <li><a href="/profile#/account-address">Contact / Shipping Address</a></li>
                            <li><a href="/profile#/account-tickets">My Tickets</a></li>
                        </ul>
                        </li>
                        <li><a href="/company#/blog"><span>Blog</span></a>
                        </li>
                        <li><a href="#"><span>Pages</span></a>
                        <ul className="sub-menu">
                            <li><a href="/company#/about">About Us</a></li>
                            <li><a href="/company#/contacts">Contacts</a></li>
                            <li><a href="/company#/faq">Help / FAQ</a></li>
                            <li><a href="/profile#/order-tracking">Order Tracking</a></li>
                            <li><a href="/shopping#/search-results">Search Results</a></li>
                        </ul>
                        </li>
                    </ul>
                    </nav>
            </div>
        );
    }
}