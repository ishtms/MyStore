import React, { Component } from 'react';

export default class ShopCategories extends Component {
    render () {
        return (
            <div className="container padding-bottom-2x mb-2">
            <div className="row">
              {/* Categories*/}
              <div className="col-xl-9 col-lg-8 order-lg-2">
                {/* Promo banner*/}
                <div className="alert alert-image-bg alert-dismissible fade show text-center mb-4" style={{backgroundImage: 'url(img/banners/alert-bg.jpg)'}}><span className="alert-close text-white" data-dismiss="alert" />
                  <div className="h3 text-medium text-white padding-top-1x padding-bottom-1x"><i className="icon-clock" style={{fontSize: 33, marginTop: '-5px'}} />&nbsp;&nbsp;Check our Limited Offers. Save up to 50%&nbsp;&nbsp;&nbsp;
                    <div className="mt-3 hidden-xl-up" /><a className="btn btn-primary" href="#">View Offers</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card mb-30"><a className="card-img-tiles" href="/shopping#/shop-grid">
                        <div className="inner">
                          <div className="main-img"><img src="img/shop/categories/01.jpg" alt="Category" /></div>
                          <div className="thumblist"><img src="img/shop/categories/02.jpg" alt="Category" /><img src="img/shop/categories/03.jpg" alt="Category" /></div>
                        </div></a>
                      <div className="card-body text-center">
                        <h4 className="card-title">Clothing</h4>
                        <p className="text-muted">Starting from $49.99</p><a className="btn btn-outline-primary btn-sm" href="/shopping#/shop-grid">View Products</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card mb-30"><a className="card-img-tiles" href="/shopping#/shop-grid">
                        <div className="inner">
                          <div className="main-img"><img src="img/shop/categories/04.jpg" alt="Category" /></div>
                          <div className="thumblist"><img src="img/shop/categories/05.jpg" alt="Category" /><img src="img/shop/categories/06.jpg" alt="Category" /></div>
                        </div></a>
                      <div className="card-body text-center">
                        <h4 className="card-title">Shoes</h4>
                        <p className="text-muted">Starting from $56.00</p><a className="btn btn-outline-primary btn-sm" href="/shopping#/shop-grid">View Products</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card mb-30"><a className="card-img-tiles" href="/shopping#/shop-grid">
                        <div className="inner">
                          <div className="main-img"><img src="img/shop/categories/07.jpg" alt="Category" /></div>
                          <div className="thumblist"><img src="img/shop/categories/08.jpg" alt="Category" /><img src="img/shop/categories/09.jpg" alt="Category" /></div>
                        </div></a>
                      <div className="card-body text-center">
                        <h4 className="card-title">Bags</h4>
                        <p className="text-muted">Starting from $27.00</p><a className="btn btn-outline-primary btn-sm" href="/shopping#/shop-grid">View Products</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card mb-30"><a className="card-img-tiles" href="/shopping#/shop-grid">
                        <div className="inner">
                          <div className="main-img"><img src="img/shop/categories/10.jpg" alt="Category" /></div>
                          <div className="thumblist"><img src="img/shop/categories/11.jpg" alt="Category" /><img src="img/shop/categories/12.jpg" alt="Category" /></div>
                        </div></a>
                      <div className="card-body text-center">
                        <h4 className="card-title">Hats</h4>
                        <p className="text-muted">Starting from $14.50</p><a className="btn btn-outline-primary btn-sm" href="/shopping#/shop-grid">View Products</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card mb-30"><a className="card-img-tiles" href="/shopping#/shop-grid">
                        <div className="inner">
                          <div className="main-img"><img src="img/shop/categories/13.jpg" alt="Category" /></div>
                          <div className="thumblist"><img src="img/shop/categories/14.jpg" alt="Category" /><img src="img/shop/categories/15.jpg" alt="Category" /></div>
                        </div></a>
                      <div className="card-body text-center">
                        <h4 className="card-title">Sunglasses</h4>
                        <p className="text-muted">Starting from $35.99</p><a className="btn btn-outline-primary btn-sm" href="/shopping#/shop-grid">View Products</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card mb-30"><a className="card-img-tiles" href="/shopping#/shop-grid">
                        <div className="inner">
                          <div className="main-img"><img src="img/shop/categories/16.jpg" alt="Category" /></div>
                          <div className="thumblist"><img src="img/shop/categories/17.jpg" alt="Category" /><img src="img/shop/categories/18.jpg" alt="Category" /></div>
                        </div></a>
                      <div className="card-body text-center">
                        <h4 className="card-title">Watches</h4>
                        <p className="text-muted">Starting from $79.99</p><a className="btn btn-outline-primary btn-sm" href="/shopping#/shop-grid">View Products</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar          */}
              <div className="col-xl-3 col-lg-4 order-lg-1">
                <aside className="sidebar">
                  <div className="padding-top-2x hidden-lg-up" />
                  <section className="widget widget-categories">
                    <h3 className="widget-title">Popular Brands</h3>
                    <ul>
                      <li><a href="#">Adidas</a><span>(254)</span></li>
                      <li><a href="#">Bilabong</a><span>(39)</span></li>
                      <li><a href="#">Brooks</a><span>(205)</span></li>
                      <li><a href="#">Calvin Klein</a><span>(128)</span></li>
                      <li><a href="#">Cole Haan</a><span>(104)</span></li>
                      <li><a href="#">Columbia</a><span>(217)</span></li>
                      <li><a href="#">New Balance</a><span>(95)</span></li>
                      <li><a href="#">Nike</a><span>(310)</span></li>
                      <li><a href="#">Nine West</a><span>(134)</span></li>
                      <li><a href="#">Oakley</a><span>(73)</span></li>
                      <li><a href="#">Puma</a><span>(446)</span></li>
                      <li><a href="#">Scechers</a><span>(87)</span></li>
                      <li><a href="#">Tommy Bahama</a><span>(42)</span></li>
                      <li><a href="#">Tommy Hilfiger</a><span>(289)</span></li>
                      <li><a href="#">Valentino</a><span>(68)</span></li>
                    </ul>
                  </section>
                </aside>
              </div>
            </div>
          </div>
          
        );
    }
}