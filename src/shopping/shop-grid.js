import React, { Component } from 'react';

export default class ShopGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            tags : [
                1,2,3,4,5,6,7,8,9,10
            ]
        }
    }
    render () {
        let something = this.state.tags.map((curr, index)=>{
            return (
                <div key={index} className="grid-item">
                <div className="product-card">
                  <div className="product-badge text-danger">50% Off</div><a className="product-thumb" href="/shoppint#/shop-single"><img src="img/shop/products/01.jpg" alt="Product" /></a>
                  <h3 className="product-title"><a href="/shoppint#/shop-single">Unionbay Park</a></h3>
                  <h4 className="product-price">
                    <del>$99.99</del>$49.99 No {curr}
                  </h4>
                  <div className="product-buttons">
                    <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                    <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                  </div>
                </div>
              </div>
            )
        })
        return (
            <div className="container padding-bottom-3x mb-1">
            <div className="row">
              {/* Products*/}
              <div className="col-xl-9 col-lg-8 order-lg-2">
                {/* Shop Toolbar*/}
                <div className="shop-toolbar padding-bottom-1x mb-2">
                  <div className="column">
                    <div className="shop-sorting">
                      <label htmlFor="sorting">Sort by:</label>
                      <select className="form-control" id="sorting">
                        <option>Popularity</option>
                        <option>Low - High Price</option>
                        <option>High - Low Price</option>
                        <option>Avarage Rating</option>
                        <option>A - Z Order</option>
                        <option>Z - A Order</option>
                      </select><span className="text-muted">Showing:&nbsp;</span><span>1 - 12 items</span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="shop-view"><a className="grid-view active" href="/shoppint#/shop-grid"><span /><span /><span /></a><a className="list-view" href="/shoppint#/shop-grid"><span /><span /><span /></a></div>
                  </div>
                </div>
                {/* Products Grid*/}
                <div className="isotope-grid cols-3 mb-2">
                  <div className="gutter-sizer" />
                  <div className="grid-sizer" />
                  {/* Product*/}
                  {something}
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
              <div className="col-xl-3 col-lg-4 order-lg-1">
                <aside className="sidebar">
                  <div className="padding-top-2x hidden-lg-up" />
                  {/* Widget Categories*/}
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
                  {/* Widget Price Range*/}
                  <section className="widget widget-categories">
                    <h3 className="widget-title">Price Range</h3>
                    <form className="price-range-slider" method="post" data-start-min={250} data-start-max={650} data-min={0} data-max={1000} data-step={1}>
                      <div className="ui-range-slider" />
                      <footer className="ui-range-slider-footer">
                        <div className="column">
                          <button className="btn btn-outline-primary btn-sm" type="submit">Filter</button>
                        </div>
                        <div className="column">
                          <div className="ui-range-values">
                            <div className="ui-range-value-min">$<span />
                              <input type="hidden" />
                            </div>&nbsp;-&nbsp;
                            <div className="ui-range-value-max">$<span />
                              <input type="hidden" />
                            </div>
                          </div>
                        </div>
                      </footer>
                    </form>
                  </section>
                  {/* Widget Brand Filter*/}
                  <section className="widget">
                    <h3 className="widget-title">Filter by Brand</h3>
                    <label className="custom-control custom-checkbox d-block">
                      <input className="custom-control-input" type="checkbox" /><span className="custom-control-indicator" /><span className="custom-control-description">Adidas&nbsp;<span className="text-muted">(254)</span></span>
                    </label>
                    <label className="custom-control custom-checkbox d-block">
                      <input className="custom-control-input" type="checkbox" /><span className="custom-control-indicator" /><span className="custom-control-description">Bilabong&nbsp;<span className="text-muted">(39)</span></span>
                    </label>
                    <label className="custom-control custom-checkbox d-block">
                      <input className="custom-control-input" type="checkbox" /><span className="custom-control-indicator" /><span className="custom-control-description">Calvin Klein&nbsp;<span className="text-muted">(128)</span></span>
                    </label>
                    <label className="custom-control custom-checkbox d-block">
                      <input className="custom-control-input" type="checkbox" /><span className="custom-control-indicator" /><span className="custom-control-description">Nike&nbsp;<span className="text-muted">(310)</span></span>
                    </label>
                    <label className="custom-control custom-checkbox d-block">
                      <input className="custom-control-input" type="checkbox" /><span className="custom-control-indicator" /><span className="custom-control-description">Tommy Bahama&nbsp;<span className="text-muted">(42)</span></span>
                    </label>
                  </section>
                  {/* Widget Size Filter*/}
                  <section className="widget">
                    <h3 className="widget-title">Filter by Size</h3>
                    <label className="custom-control custom-checkbox d-block">
                      <input className="custom-control-input" type="checkbox" /><span className="custom-control-indicator" /><span className="custom-control-description">XL&nbsp;<span className="text-muted">(208)</span></span>
                    </label>
                    <label className="custom-control custom-checkbox d-block">
                      <input className="custom-control-input" type="checkbox" /><span className="custom-control-indicator" /><span className="custom-control-description">L&nbsp;<span className="text-muted">(311)</span></span>
                    </label>
                    <label className="custom-control custom-checkbox d-block">
                      <input className="custom-control-input" type="checkbox" /><span className="custom-control-indicator" /><span className="custom-control-description">M&nbsp;<span className="text-muted">(485)</span></span>
                    </label>
                    <label className="custom-control custom-checkbox d-block">
                      <input className="custom-control-input" type="checkbox" /><span className="custom-control-indicator" /><span className="custom-control-description">S&nbsp;<span className="text-muted">(213)</span></span>
                    </label>
                  </section>
                  {/* Promo Banner*/}
                  <section className="promo-box" style={{backgroundImage: 'url(img/banners/02.jpg)'}}>
                    {/* Choose between .overlay-dark (#000) or .overlay-light (#fff) with default opacity of 50%. You can overrride default color and opacity values via 'style' attribute.*/}<span className="overlay-dark" style={{opacity: '.45'}} />
                    <div className="promo-box-content text-center padding-top-3x padding-bottom-2x">
                      <h4 className="text-light text-thin text-shadow">New Collection of</h4>
                      <h3 className="text-bold text-light text-shadow">Sunglassess</h3><a className="btn btn-sm btn-primary" href="#">Shop Now</a>
                    </div>
                  </section>
                </aside>
              </div>
            </div>
          </div>
          
        );
    }
}