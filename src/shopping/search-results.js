import React, { Component } from 'react';

export default class SearchResults extends Component {
    render () {
        return (
            <div className="container padding-bottom-3x mb-2">
            <div className="row">
              {/* Results*/}
              <div className="col-xl-9 col-lg-8">
                <div className="card mb-4">
                  <div className="card-header"><span className="badge badge-pill badge-primary">Product</span></div>
                  <div className="card-body">
                    <div className="d-flex"><a className="pr-4 hidden-xs-down" href="/shopping#/shop-single" style={{maxWidth: 225}}><img src="img/shop/products/01.jpg" alt="Product" /></a>
                      <div>
                        <h5><a className="navi-link" href="/shopping#/shop-single">Unionbay Park </a></h5>
                        <h6>
                          <del className="text-muted">$99.99</del> $49.99
                        </h6>
                        <p>Consequatur omnis <span className="text-highlighted">lorem ipsum</span> reprehenderit suscipit voluptatem blanditiis aliquid rerum animi aliquam, dicta quas nesciunt commodi sequi minima totam architecto.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-header"><span className="badge badge-pill badge-warning">Blog post</span></div>
                  <div className="card-body">
                    <h5><a className="navi-link" href="/company#/blog">How To Choose Perfect Summer Suit</a></h5>
                    <p><span className="text-highlighted">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <span className="text-highlighted">lorem ipsum</span> aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Aliquid id nobis, amet dolorum earum maxime.</p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-header"><span className="badge badge-pill badge-primary">Product</span></div>
                  <div className="card-body">
                    <div className="d-flex"><a className="pr-4 hidden-xs-down" href="/shopping#/shop-single" style={{maxWidth: 225}}><img src="img/shop/products/03.jpg" alt="Product" /></a>
                      <div>
                        <h5><a className="navi-link" href="/shopping#/shop-single">Oakley Kickback</a></h5>
                        <h6>$155.00</h6>
                        <p>Ut enim ad minim veniam, <span className="text-highlighted">lorem ipsum</span> reprehenderit suscipit voluptatem blanditiis aliquid rerum animi aliquam, dicta quas nesciunt commodi sequi minima totam architecto.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-header"><span className="badge badge-pill badge-warning">Blog post</span></div>
                  <div className="card-body">
                    <h5><a className="navi-link" href="/company#/blog"><span className="text-highlighted">Lorem Ipsum</span> Trends in Suburban Fashion</a></h5>
                    <p>Ut enim ad minim veniam, <span className="text-highlighted">lorem ipsum</span> reprehenderit suscipit voluptatem blanditiis aliquid rerum animi aliquam, dicta quas nesciunt commodi sequi minima totam architecto.</p>
                  </div>
                </div>
                {/* Pagination*/}
                <nav className="pagination">
                  <div className="column">
                    <ul className="pages">
                      <li className="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li>...</li>
                      <li><a href="#">12</a></li>
                    </ul>
                  </div>
                  <div className="column text-right hidden-xs-down"><a className="btn btn-outline-secondary btn-sm" href="#">Next&nbsp;<i className="icon-arrow-right" /></a></div>
                </nav>
              </div>
              {/* Sidebar          */}
              <div className="col-xl-3 col-lg-4">
                <aside className="sidebar">
                  <div className="padding-top-2x hidden-lg-up" />
                  {/* Shop Categories*/}
                  <section className="widget widget-categories">
                    <h3 className="widget-title">Shop Categories</h3>
                    <ul>
                      <li className="has-children expanded"><a href="#">Shoes</a><span>(1138)</span>
                        <ul>
                          <li><a href="#">Women's</a><span>(508)</span>
                            <ul>
                              <li><a href="#">Sneakers</a></li>
                              <li><a href="#">Heels</a></li>
                              <li><a href="#">Loafers</a></li>
                              <li><a href="#">Sandals</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Men's</a><span>(423)</span>
                            <ul>
                              <li><a href="#">Boots</a></li>
                              <li><a href="#">Oxfords</a></li>
                              <li><a href="#">Loafers</a></li>
                              <li><a href="#">Sandals</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Boy's Shoes</a><span>(97)</span></li>
                          <li><a href="#">Girl's Shoes</a><span>(110)</span></li>
                        </ul>
                      </li>
                      <li className="has-children"><a href="#">Clothing</a><span>(2356)</span>
                        <ul>
                          <li><a href="#">Women's</a><span>(1032)</span>
                            <ul>
                              <li><a href="#">Dresses</a></li>
                              <li><a href="#">Shirts &amp; Tops</a></li>
                              <li><a href="#">Swimwear</a></li>
                              <li><a href="#">Shorts</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Men's</a><span>(937)</span>
                            <ul>
                              <li><a href="#">Shirts &amp; Tops</a></li>
                              <li><a href="#">Shorts</a></li>
                              <li><a href="#">Swimwear</a></li>
                              <li><a href="#">Pants</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Kid's Clothing</a><span>(386)</span></li>
                        </ul>
                      </li>
                      <li className="has-children"><a href="#">Bags</a><span>(420)</span>
                        <ul>
                          <li><a href="#">Handbags</a><span>(180)</span></li>
                          <li><a href="#">Backpacks</a><span>(132)</span></li>
                          <li><a href="#">Wallets &amp; Accessories</a><span>(47)</span></li>
                          <li><a href="#">Luggage</a><span>(61)</span></li>
                        </ul>
                      </li>
                      <li className="has-children"><a href="#">Accessories</a><span>(874)</span>
                        <ul>
                          <li><a href="#">Sunglasses</a><span>(211)</span></li>
                          <li><a href="#">Hats</a><span>(195)</span></li>
                          <li><a href="#">Watches</a><span>(159)</span></li>
                          <li><a href="#">Jewelry</a><span>(203)</span></li>
                          <li><a href="#">Belts</a><span>(106)</span></li>
                        </ul>
                      </li>
                    </ul>
                  </section>
                  {/* Blog Categories*/}
                  <section className="widget widget-categories margin-bottom-none">
                    <h3 className="widget-title">Blog Categories</h3>
                    <ul>
                      <li><a href="#">Editor's Choice</a><span>(24)</span></li>
                      <li><a href="#">Fashion</a><span>(12)</span></li>
                      <li><a href="#">Travel</a><span>(5)</span></li>
                      <li><a href="#">Online Shopping</a><span>(7)</span></li>
                      <li><a href="#">Closing Design</a><span>(3)</span></li>
                    </ul>
                  </section>
                </aside>
              </div>
            </div>
          </div>
          
        );
    }
}