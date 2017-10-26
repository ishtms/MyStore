import React, { Component } from 'react';

export default class DrawerLayout extends Component {
    render () {
        return (
            <div>
                <div className="offcanvas-container" id="shop-categories">
                    <div className="offcanvas-header">
                    <h3 className="offcanvas-title">Shop Categories</h3>
                    </div>
                    <nav className="offcanvas-menu">
                    <ul className="menu">
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
                        <li className="has-children"><span><a href="#">Kid's Shoes</a><span className="sub-menu-toggle" /></span>
                        <ul className="offcanvas-submenu">
                            <li><a href="#">Boots</a></li>
                            <li><a href="#">Sandals</a></li>
                            <li><a href="#">Crib Shoes</a></li>
                            <li><a href="#">Loafers</a></li>
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
                    </nav>
                </div>
            </div>
        );
    }
}