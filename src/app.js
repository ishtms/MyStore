import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Main from './components/main'
import Login from './components/login'
class App extends Component{
    render(){
        return (
          <div>
          <div className="customizer-backdrop" />
          {/* Off-Canvas Category Menu*/}
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
          {/* Off-Canvas Mobile Menu*/}
          <div className="offcanvas-container" id="mobile-menu"><a className="account-link" href="account-orders.html">
              <div className="user-ava"><img src="img/account/user-ava-md.jpg" alt="Daniel Adams" />
              </div>
              <div className="user-info">
                <h6 className="user-name">Daniel Adams</h6><span className="text-sm text-white opacity-60">290 Reward points</span>
              </div></a>
            <nav className="offcanvas-menu">
              <ul className="menu">
                <li className="has-children active"><span><Link to="/"><span>Home</span></Link><span className="sub-menu-toggle" /></span>
                  <ul className="offcanvas-submenu">
                    <li className="active"><a href="index-2.html">Featured Products Slider</a></li>
                    <li><a href="home-featured-categories.html">Featured Categories</a></li>
                    <li><a href="home-collection-showcase.html">Products Collection Showcase</a></li>
                  </ul>
                </li>
                <li className="has-children"><span><a href="shop-grid-ls.html"><span>Shop</span></a><span className="sub-menu-toggle" /></span>
                  <ul className="offcanvas-submenu">
                    <li><a href="shop-categories.html">Shop Categories</a></li>
                    <li className="has-children"><span><a href="shop-grid-ls.html"><span>Shop Grid</span></a><span className="sub-menu-toggle" /></span>
                      <ul className="offcanvas-submenu">
                        <li><a href="shop-grid-ls.html">Grid Left Sidebar</a></li>
                        <li><a href="shop-grid-rs.html">Grid Right Sidebar</a></li>
                        <li><a href="shop-grid-ns.html">Grid No Sidebar</a></li>
                      </ul>
                    </li>
                    <li className="has-children"><span><a href="shop-list-ls.html"><span>Shop List</span></a><span className="sub-menu-toggle" /></span>
                      <ul className="offcanvas-submenu">
                        <li><a href="shop-list-ls.html">List Left Sidebar</a></li>
                        <li><a href="shop-list-rs.html">List Right Sidebar</a></li>
                        <li><a href="shop-list-ns.html">List No Sidebar</a></li>
                      </ul>
                    </li>
                    <li><a href="shop-single.html">Single Product</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
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
                <li className="has-children"><span><a href="account-orders.html"><span>Account</span></a><span className="sub-menu-toggle" /></span>
                  <ul className="offcanvas-submenu">
                    <li><Link to="/login">Login / Register</Link></li>
                    <li><a href="account-password-recovery.html">Password Recovery</a></li>
                    <li><a href="account-orders.html">Orders List</a></li>
                    <li><a href="account-wishlist.html">Wishlist</a></li>
                    <li><a href="account-profile.html">Profile Page</a></li>
                    <li><a href="account-address.html">Contact / Shipping Address</a></li>
                    <li><a href="account-open-ticket.html">Open Ticket</a></li>
                    <li><a href="account-tickets.html">My Tickets</a></li>
                  </ul>
                </li>
                <li className="has-children"><span><a href="blog-rs.html"><span>Blog</span></a><span className="sub-menu-toggle" /></span>
                  <ul className="offcanvas-submenu">
                    <li className="has-children"><span><a href="blog-rs.html"><span>Blog Layout</span></a><span className="sub-menu-toggle" /></span>
                      <ul className="offcanvas-submenu">
                        <li><a href="blog-rs.html">Blog Right Sidebar</a></li>
                        <li><a href="blog-ls.html">Blog Left Sidebar</a></li>
                        <li><a href="blog-ns.html">Blog No Sidebar</a></li>
                      </ul>
                    </li>
                    <li className="has-children"><span><a href="blog-single-rs.html"><span>Single Post Layout</span></a><span className="sub-menu-toggle" /></span>
                      <ul className="offcanvas-submenu">
                        <li><a href="blog-single-rs.html">Post Right Sidebar</a></li>
                        <li><a href="blog-single-ls.html">Post Left Sidebar</a></li>
                        <li><a href="blog-single-ns.html">Post No Sidebar</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-children"><span><a href="#"><span>Pages</span></a><span className="sub-menu-toggle" /></span>
                  <ul className="offcanvas-submenu">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="mobile-app.html">Unishop Mobile App</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contacts.html">Contacts</a></li>
                    <li><a href="faq.html">Help / FAQ</a></li>
                    <li><a href="order-tracking.html">Order Tracking</a></li>
                    <li><a href="search-results.html">Search Results</a></li>
                    <li><a href="404.html">404</a></li>
                    <li><a className="text-danger" href="docs/dev-setup.html">Documentation</a></li>
                  </ul>
                </li>
                <li className="has-children"><span><a href="components/accordion.html"><span>Components</span></a><span className="sub-menu-toggle" /></span>
                  <ul className="offcanvas-submenu">
                    <li><a href="components/accordion.html">Accordion</a></li>
                    <li><a href="components/alerts.html">Alerts</a></li>
                    <li><a href="components/buttons.html">Buttons</a></li>
                    <li><a href="components/cards.html">Cards</a></li>
                    <li><a href="components/carousel.html">Carousel</a></li>
                    <li><a href="components/countdown.html">Countdown</a></li>
                    <li><a href="components/forms.html">Forms</a></li>
                    <li><a href="components/gallery.html">Gallery</a></li>
                    <li><a href="components/google-maps.html">Google Maps</a></li>
                    <li><a href="components/images.html">Images &amp; Figures</a></li>
                    <li><a href="components/list-group.html">List Group</a></li>
                    <li><a href="components/market-social-buttons.html">Market &amp; Social Buttons</a></li>
                    <li><a href="components/media.html">Media Object</a></li>
                    <li><a href="components/modal.html">Modal</a></li>
                    <li><a href="components/pagination.html">Pagination</a></li>
                    <li><a href="components/pills.html">Pills</a></li>
                    <li><a href="components/progress-bars.html">Progress Bars</a></li>
                    <li><a href="components/shop-items.html">Shop Items</a></li>
                    <li><a href="components/steps.html">Steps</a></li>
                    <li><a href="components/tables.html">Tables</a></li>
                    <li><a href="components/tabs.html">Tabs</a></li>
                    <li><a href="components/team.html">Team</a></li>
                    <li><a href="components/toasts.html">Toast Notifications</a></li>
                    <li><a href="components/tooltips-popovers.html">Tooltips &amp; Popovers</a></li>
                    <li><a href="components/typography.html">Typography</a></li>
                    <li><a href="components/video-player.html">Video Player</a></li>
                    <li><a href="components/widgets.html">Widgets</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          {/* Topbar*/}
          <div className="topbar">
            <div className="topbar-column"><a className="hidden-md-down" href="mailto:codemode.co@gmail.com"><i className="icon-mail" />&nbsp; codemode.co@gmail.com</a><a className="hidden-md-down" href="tel:+917780874266"><i className="icon-bell" />&nbsp; +91 778 087 4266</a><a className="social-button sb-facebook shape-none sb-dark" href="https://www.facebook.com/codemodeco" target="_blank"><i className="socicon-facebook" /></a><a className="social-button sb-twitter shape-none sb-dark" href="https://www.youtube.com/channel/UCRkLpD8eaK_Tz55S9U5L6Vw" target="_blank"><i className="socicon-youtube" /></a><a className="social-button sb-instagram shape-none sb-dark" href="#" target="_blank"><i className="socicon-instagram" /></a><a className="social-button sb-pinterest shape-none sb-dark" href="#" target="_blank"><i className="socicon-pinterest" /></a>
            </div>
            <div className="topbar-column"><a className="hidden-md-down" href="#"><i className="icon-download" />&nbsp; Get mobile app</a>
              <div className="lang-currency-switcher-wrap">
                <Link to="/login"><span className="currency">Login/Register</span></Link>
              </div>
            </div>
          </div>
          {/* Navbar*/}
          {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
          <header className="navbar navbar-sticky">
            {/* Search*/}
            <form className="site-search" method="get">
              <input type="text" name="site_search" placeholder="Type to search..." />
              <div className="search-tools"><span className="clear-search">Clear</span><span className="close-search"><i className="icon-cross" /></span></div>
            </form>
            <div className="site-branding">
              <div className="inner">
                {/* Off-Canvas Toggle (#shop-categories)*/}<a className="offcanvas-toggle cats-toggle" href="#shop-categories" data-toggle="offcanvas" />
                {/* Off-Canvas Toggle (#mobile-menu)*/}<a className="offcanvas-toggle menu-toggle" href="#mobile-menu" data-toggle="offcanvas" />
                {/* Site Logo*/}<Link to="/"><span className="site-logo"><img src="img/logo/logo.png" alt="Unishop" /></span></Link>
              </div>
            </div>
            {/* Main Navigation*/}
            <nav className="site-menu">
              <ul>
                <li className="has-megamenu active"><Link to="/"><span>Home</span></Link>
                  <ul className="mega-menu">
                    <li><a className="d-block img-thumbnail text-center navi-link" href="index-2.html"><img alt="Featured Products Slider" src="img/mega-menu-home/01.jpg" />
                        <h6 className="mt-3">Featured Products Slider</h6></a></li>
                    <li><a className="d-block img-thumbnail text-center navi-link" href="home-featured-categories.html"><img alt="Featured Categories" src="img/mega-menu-home/02.jpg" />
                        <h6 className="mt-3">Featured Categories</h6></a></li>
                    <li><a className="d-block img-thumbnail text-center navi-link" href="home-collection-showcase.html"><img alt="Products Collection Showcase" src="img/mega-menu-home/03.jpg" />
                        <h6 className="mt-3">Products Collection Showcase</h6></a></li>
                    <li>
                      <div className="img-thumbnail text-center"><img alt="More To Come. Stay Tuned!" src="img/mega-menu-home/04.jpg" />
                        <h6 className="mt-3">More To Come. Stay Tuned!</h6>
                      </div>
                    </li>
                  </ul>
                </li>
                <li><a href="shop-grid-ls.html"><span>Shop</span></a>
                  <ul className="sub-menu">
                    <li><a href="shop-categories.html">Shop Categories</a></li>
                    <li className="has-children"><a href="shop-grid-ls.html"><span>Shop Grid</span></a>
                      <ul className="sub-menu">
                        <li><a href="shop-grid-ls.html">Grid Left Sidebar</a></li>
                        <li><a href="shop-grid-rs.html">Grid Right Sidebar</a></li>
                        <li><a href="shop-grid-ns.html">Grid No Sidebar</a></li>
                      </ul>
                    </li>
                    <li className="has-children"><a href="shop-list-ls.html"><span>Shop List</span></a>
                      <ul className="sub-menu">
                        <li><a href="shop-list-ls.html">List Left Sidebar</a></li>
                        <li><a href="shop-list-rs.html">List Right Sidebar</a></li>
                        <li><a href="shop-list-ns.html">List No Sidebar</a></li>
                      </ul>
                    </li>
                    <li><a href="shop-single.html">Single Product</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li className="has-children"><a href="checkout-address.html"><span>Checkout</span></a>
                      <ul className="sub-menu">             
                        <li><a href="checkout-address.html">Address</a></li>
                        <li><a href="checkout-shipping.html">Shipping</a></li>
                        <li><a href="checkout-payment.html">Payment</a></li>
                        <li><a href="checkout-review.html">Review</a></li>
                        <li><a href="checkout-complete.html">Complete</a></li>
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
                <li><a href="account-orders.html"><span>Account</span></a>
                  <ul className="sub-menu">
                    <li><Link to="/login">Login / Register</Link></li>
                    <li><a href="account-password-recovery.html">Password Recovery</a></li>
                    <li><a href="account-orders.html">Orders List</a></li>
                    <li><a href="account-wishlist.html">Wishlist</a></li>
                    <li><a href="account-profile.html">Profile Page</a></li>
                    <li><a href="account-address.html">Contact / Shipping Address</a></li>
                    <li><a href="account-tickets.html">My Tickets</a></li>
                  </ul>
                </li>
                <li><a href="blog-rs.html"><span>Blog</span></a>
                  <ul className="sub-menu">
                    <li className="has-children"><a href="blog-rs.html"><span>Blog Layout</span></a>
                      <ul className="sub-menu">
                        <li><a href="blog-rs.html">Blog Right Sidebar</a></li>
                        <li><a href="blog-ls.html">Blog Left Sidebar</a></li>
                        <li><a href="blog-ns.html">Blog No Sidebar</a></li>
                      </ul>
                    </li>
                    <li className="has-children"><a href="blog-single-rs.html"><span>Single Post Layout</span></a>
                      <ul className="sub-menu">
                        <li><a href="blog-single-rs.html">Post Right Sidebar</a></li>
                        <li><a href="blog-single-ls.html">Post Left Sidebar</a></li>
                        <li><a href="blog-single-ns.html">Post No Sidebar</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="#"><span>Pages</span></a>
                  <ul className="sub-menu">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contacts.html">Contacts</a></li>
                    <li><a href="faq.html">Help / FAQ</a></li>
                    <li><a href="order-tracking.html">Order Tracking</a></li>
                    <li><a href="search-results.html">Search Results</a></li>
                    <li><a href="404.html">404 Not Found</a></li>
                    <li><a className="text-danger" href="docs/dev-setup.html">Documentation</a></li>
                  </ul>
                </li>
                <li className="has-megamenu"><a href="components/accordion.html"><span>Components</span></a>
                  <ul className="mega-menu">
                    <li><span className="mega-menu-title">A - F</span>
                      <ul className="sub-menu">
                        <li><a href="components/accordion.html">Accordion</a></li>
                        <li><a href="components/alerts.html">Alerts</a></li>
                        <li><a href="components/buttons.html">Buttons</a></li>
                        <li><a href="components/cards.html">Cards</a></li>
                        <li><a href="components/carousel.html">Carousel</a></li>
                        <li><a href="components/countdown.html">Countdown</a></li>
                        <li><a href="components/forms.html">Forms</a></li>
                      </ul>
                    </li>
                    <li><span className="mega-menu-title">G - M</span>
                      <ul className="sub-menu">
                        <li><a href="components/gallery.html">Gallery</a></li>
                        <li><a href="components/google-maps.html">Google Maps</a></li>
                        <li><a href="components/images.html">Images &amp; Figures</a></li>
                        <li><a href="components/list-group.html">List Group</a></li>
                        <li><a href="components/market-social-buttons.html">Market &amp; Social Buttons</a></li>
                        <li><a href="components/media.html">Media Object</a></li>
                        <li><a href="components/modal.html">Modal</a></li>
                      </ul>
                    </li>
                    <li><span className="mega-menu-title">P - T</span>
                      <ul className="sub-menu">
                        <li><a href="components/pagination.html">Pagination</a></li>
                        <li><a href="components/pills.html">Pills</a></li>
                        <li><a href="components/progress-bars.html">Progress Bars</a></li>
                        <li><a href="components/shop-items.html">Shop Items</a></li>
                        <li><a href="components/steps.html">Steps</a></li>
                        <li><a href="components/tables.html">Tables</a></li>
                        <li><a href="components/tabs.html">Tabs</a></li>
                      </ul>
                    </li>
                    <li><span className="mega-menu-title">T - W</span>
                      <ul className="sub-menu">
                        <li><a href="components/team.html">Team</a></li>
                        <li><a href="components/toasts.html">Toast Notifications</a></li>
                        <li><a href="components/tooltips-popovers.html">Tooltips &amp; Popovers</a></li>
                        <li><a href="components/typography.html">Typography</a></li>
                        <li><a href="components/video-player.html">Video Player</a></li>
                        <li><a href="components/widgets.html">Widgets</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* Toolbar*/}
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
          </header>
          {/* Off-Canvas Wrapper*/}
          <div className="offcanvas-wrapper">
            {/* Page Content*/}
            {/* Main Slider*/}

          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />

            {/* Site Footer*/}



            <footer className="site-footer">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    {/* Contact Info*/}
                    <section className="widget widget-light-skin">
                      <Link to="/link"><h3 className="widget-title">Get In Touch With Us</h3></Link>
                      <p className="text-white">Phone: 00 33 169 7720</p>
                      <ul className="list-unstyled text-sm text-white">
                        <li><span className="opacity-50">Monday-Friday:</span>9.00 am - 8.00 pm</li>
                        <li><span className="opacity-50">Saturday:</span>10.00 am - 6.00 pm</li>
                      </ul>
                      <p><a className="navi-link-light" href="#">support@unishop.com</a></p><a className="social-button shape-circle sb-facebook sb-light-skin" href="#"><i className="socicon-facebook" /></a><a className="social-button shape-circle sb-twitter sb-light-skin" href="#"><i className="socicon-twitter" /></a><a className="social-button shape-circle sb-instagram sb-light-skin" href="#"><i className="socicon-instagram" /></a><a className="social-button shape-circle sb-google-plus sb-light-skin" href="#"><i className="socicon-googleplus" /></a>
                    </section>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    {/* Mobile App Buttons*/}
                    <section className="widget widget-light-skin">
                      <h3 className="widget-title">Our Mobile App</h3><a className="market-button apple-button mb-light-skin" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">App Store</span></a><a className="market-button google-button mb-light-skin" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">Google Play</span></a><a className="market-button windows-button mb-light-skin" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">Windows Store</span></a>
                    </section>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    {/* About Us*/}
                    <section className="widget widget-links widget-light-skin">
                      <h3 className="widget-title">About Us</h3>
                      <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">About Unishop</a></li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Our Blog</a></li>
                      </ul>
                    </section>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    {/* Account / Shipping Info*/}
                    <section className="widget widget-links widget-light-skin">
                      <h3 className="widget-title">Account &amp; Shipping Info</h3>
                      <ul>
                        <li><a href="#">Your Account</a></li>
                        <li><a href="#">Shipping Rates &amp; Policies</a></li>
                        <li><a href="#">Refunds &amp; Replacements</a></li>
                        <li><a href="#">Taxes</a></li>
                        <li><a href="#">Delivery Info</a></li>
                        <li><a href="#">Affiliate Program</a></li>
                      </ul>
                    </section>
                  </div>
                </div>
                <hr className="hr-light mt-2 margin-bottom-2x" />
                <div className="row">
                  <div className="col-md-7 padding-bottom-1x">
                    {/* Payment Methods*/}
                    <div className="margin-bottom-1x" style={{maxWidth: 615}}><img src="img/payment_methods.png" alt="Payment Methods" />
                    </div>
                  </div>
                  <div className="col-md-5 padding-bottom-1x">
                    <div className="margin-top-1x hidden-md-up" />
                    {/*Subscription*/}
                    <form className="subscribe-form" action="http://rokaux.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=1194bb7544" method="post" target="_blank" noValidate>
                      <div className="clearfix">
                        <div className="input-group input-light">
                          <input className="form-control" type="email" name="EMAIL" placeholder="Your e-mail" /><span className="input-group-addon"><i className="icon-mail" /></span>
                        </div>
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                          <input type="text" name="b_c7103e2c981361a6639545bd5_1194bb7544" tabIndex={-1} />
                        </div>
                        <button className="btn btn-primary" type="submit"><i className="icon-check" /></button>
                      </div><span className="form-text text-sm text-white opacity-50">Subscribe to our Newsletter to receive early discount offers, latest news, sales and promo information.</span>
                    </form>
                  </div>
                </div>
                {/* Copyright*/}
                <p className="footer-copyright">© All rights reserved. Made with &nbsp;<i className="icon-heart text-danger" /><a href="http://rokaux.com/" target="_blank"> &nbsp;by rokaux</a></p>
              </div>
            </footer>
          </div>
          {/* Back To Top Button*/}<a className="scroll-to-top-btn" href="#"><i className="icon-arrow-up" /></a>
          {/* Backdrop*/}
          <div className="site-backdrop" />
        </div>
        
        )
    }
}

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'))