import React, { Component } from 'react';

export default class Featured extends Component {
    render () {
        return (
            <div>
            <div className="container-fluid px-0">
              <div className="row mx-0">
                {/* Category*/}
                <div className="category-card col-md-6 col-sm-12 fw-section padding-top-7x padding-bottom-7x" style={{backgroundImage: 'url(img/banners/home05.jpg)'}}><span className="overlay" style={{backgroundColor: '#000', opacity: '.5'}} />
                  <div className="d-flex justify-content-center">
                    <div className="px-3 text-center">
                      <h2 className="display-4 text-white text-shadow">Shoes</h2>
                      <h5 className="text-white text-normal mb-3 opacity-60 text-shadow">Starting from $56.00</h5>
                      <div className="view-button"><a className="btn btn-primary" href="/shopping#/shop-grid">View Collection</a></div>
                    </div>
                  </div>
                </div>
                {/* Category*/}
                <div className="category-card col-md-6 col-sm-12 fw-section padding-top-7x padding-bottom-7x" style={{backgroundImage: 'url(img/banners/home04.jpg)'}}><span className="overlay" style={{backgroundColor: '#000', opacity: '.5'}} />
                  <div className="d-flex justify-content-center">
                    <div className="px-3 text-center">
                      <h2 className="display-4 text-white text-shadow">Bags</h2>
                      <h5 className="text-white text-normal mb-3 opacity-60 text-shadow">Starting from $27.00</h5>
                      <div className="view-button"><a className="btn btn-primary" href="/shopping#/shop-grid">View Collection</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-0">
                {/* Category*/}
                <div className="category-card col-md-6 col-sm-12 fw-section padding-top-7x padding-bottom-7x" style={{backgroundImage: 'url(img/banners/home01.jpg)'}}><span className="overlay" style={{backgroundColor: '#000', opacity: '.5'}} />
                  <div className="d-flex justify-content-center">
                    <div className="px-3 text-center">
                      <h2 className="display-4 text-white text-shadow">Sunglasses</h2>
                      <h5 className="text-white text-normal mb-3 opacity-60 text-shadow">Starting from $35.99</h5>
                      <div className="view-button"><a className="btn btn-primary" href="/shopping#/shop-grid">View Collection</a></div>
                    </div>
                  </div>
                </div>
                {/* Category*/}
                <div className="category-card col-md-6 col-sm-12 fw-section padding-top-7x padding-bottom-7x" style={{backgroundImage: 'url(img/banners/home06.jpg)'}}><span className="overlay" style={{backgroundColor: '#000', opacity: '.5'}} />
                  <div className="d-flex justify-content-center">
                    <div className="px-3 text-center">
                      <h2 className="display-4 text-white text-shadow">Watches</h2>
                      <h5 className="text-white text-normal mb-3 opacity-60 text-shadow">Starting from $79.99</h5>
                      <div className="view-button"><a className="btn btn-primary" href="/shopping#/shop-grid">View Collection</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Featured Products (Grid)*/}
            <section className="container padding-top-3x padding-bottom-3x">
              <h3 className="text-center mb-30">Featured Products</h3>
              <div className="isotope-grid cols-4 mb-2">
                <div className="gutter-sizer" />
                <div className="grid-sizer" />
                {/* Product*/}
                <div className="grid-item">
                  <div className="product-card">
                    <div className="product-badge text-danger">50% Off</div><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/products/01.jpg" alt="Product" /></a>
                    <h3 className="product-title"><a href="/shopping#/shop-single">Unionbay Park</a></h3>
                    <h4 className="product-price">
                      <del>$99.99</del>$49.99
                    </h4>
                    <div className="product-buttons">
                      <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                      <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                    </div>
                  </div>
                </div>
                {/* Product*/}
                <div className="grid-item">
                  <div className="product-card"><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/products/02.jpg" alt="Product" /></a>
                    <h3 className="product-title"><a href="/shopping#/shop-single">Cole Haan Crossbody</a></h3>
                    <h4 className="product-price">$200.00</h4>
                    <div className="product-buttons">
                      <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                      <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                    </div>
                  </div>
                </div>
                {/* Product*/}
                <div className="grid-item">
                  <div className="product-card">
                    <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star" />
                    </div><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/products/03.jpg" alt="Product" /></a>
                    <h3 className="product-title"><a href="/shopping#/shop-single">Oakley Kickback</a></h3>
                    <h4 className="product-price">$155.00</h4>
                    <div className="product-buttons">
                      <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                      <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                    </div>
                  </div>
                </div>
                {/* Product*/}
                <div className="grid-item">
                  <div className="product-card"><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/products/04.jpg" alt="Product" /></a>
                    <h3 className="product-title"><a href="/shopping#/shop-single">Waist Leather Belt</a></h3>
                    <h4 className="product-price">$47.00</h4>
                    <div className="product-buttons">
                      <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                      <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                    </div>
                  </div>
                </div>
                {/* Product*/}
                <div className="grid-item">
                  <div className="product-card">
                    <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star" /><i className="icon-star" />
                    </div><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/products/05.jpg" alt="Product" /></a>
                    <h3 className="product-title"><a href="/shopping#/shop-single">Jordan City Man's Hoodie</a></h3>
                    <h4 className="product-price">$65.00</h4>
                    <div className="product-buttons">
                      <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                      <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                    </div>
                  </div>
                </div>
                {/* Product*/}
                <div className="grid-item">
                  <div className="product-card">
                    <div className="product-badge text-danger">40% Off</div><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/products/06.jpg" alt="Product" /></a>
                    <h3 className="product-title"><a href="/shopping#/shop-single">Palace Shell Track Jacket</a></h3>
                    <h4 className="product-price">
                      <del>$60.00</del>$36.00
                    </h4>
                    <div className="product-buttons">
                      <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                      <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                    </div>
                  </div>
                </div>
                {/* Product*/}
                <div className="grid-item">
                  <div className="product-card"><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/products/07.jpg" alt="Product" /></a>
                    <h3 className="product-title"><a href="/shopping#/shop-single">Stretch Woven Jogger</a></h3>
                    <h4 className="product-price">$69.99</h4>
                    <div className="product-buttons">
                      <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                      <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                    </div>
                  </div>
                </div>
                {/* Product*/}
                <div className="grid-item">
                  <div className="product-card">
                    <div className="product-badge text-muted">Out of stock</div><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/products/08.jpg" alt="Product" /></a>
                    <h3 className="product-title"><a href="/shopping#/shop-single">Off the Shoulder Top</a></h3>
                    <h4 className="product-price">$128.00</h4>
                    <div className="product-buttons">
                      <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button><a className="btn btn-outline-secondary btn-sm" href="/shopping#/shop-single">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center"><a className="btn btn-outline-secondary margin-top-none" href="/shopping#/shop-grid">View All Products</a></div>
            </section>
            {/* Promo*/}
            <section className="fw-section" style={{backgroundImage: 'url(img/banners/home03.jpg)'}}><span className="overlay" style={{backgroundColor: '#374250', opacity: '.55'}} />
              <div className="container text-center padding-top-4x padding-bottom-4x">
                <h3 className="display-4 text-normal text-white text-shadow mb-1">Old Collection</h3>
                <h2 className="display-2 text-bold text-white text-shadow">HUGE SALE!</h2>
                <h4 className="d-inline-block h2 text-normal text-white text-shadow border-default border-left-0 border-right-0 mb-4">at our outlet stores</h4><br /><a className="btn btn-primary" href="/company#/contacts">Locate Stores</a>
              </div>
            </section>
            {/* Product Widgets*/}
            <section className="container padding-top-3x padding-bottom-2x">
              <h3 className="text-center mb-30">Staff Picks</h3>
              <div className="row pt-1">
                <div className="col-md-4 col-sm-6">
                  <div className="widget widget-featured-products">
                    <h3 className="widget-title">Top Sellers</h3>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/01.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Oakley Kickback</a></h4><span className="entry-meta">$155.00</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/03.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Vented Straw Fedora</a></h4><span className="entry-meta">$49.50</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/04.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Big Wordmark Tote</a></h4><span className="entry-meta">$29.99</span>
                      </div>
                    </div><a className="btn btn-outline-secondary btn-sm mb-0" href="/shopping#/shop-grid">View More</a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="widget widget-featured-products">
                    <h3 className="widget-title">New Arrivals</h3>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/05.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Union Park</a></h4><span className="entry-meta">$49.99</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/06.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Cole Haan Crossbody</a></h4><span className="entry-meta">$200.00</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/07.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Skagen Holst Watch</a></h4><span className="entry-meta">$145.00</span>
                      </div>
                    </div><a className="btn btn-outline-secondary btn-sm mb-0" href="/shopping#/shop-grid">View More</a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="widget widget-featured-products">
                    <h3 className="widget-title">Best Rated</h3>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/08.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Jordan's City Hoodie</a></h4><span className="entry-meta">$65.00</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/09.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Palace Shell Track Jacket</a></h4><span className="entry-meta">$36.99</span>
                      </div>
                    </div>
                    {/* Entry*/}
                    <div className="entry">
                      <div className="entry-thumb"><a href="/shopping#/shop-single"><img src="img/shop/widget/10.jpg" alt="Product" /></a></div>
                      <div className="entry-content">
                        <h4 className="entry-title"><a href="/shopping#/shop-single">Off the Shoulder Top</a></h4><span className="entry-meta">$128.00</span>
                      </div>
                    </div><a className="btn btn-outline-secondary btn-sm mb-0" href="/shopping#/shop-grid">View More</a>
                  </div>
                </div>
              </div>
            </section>
            {/* Popular Brands*/}
            <section className="bg-faded padding-top-3x padding-bottom-3x">
              <div className="container">
                <h3 className="text-center mb-30 pb-2">Popular Brands</h3>
                <div className="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: false, &quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 4000, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:2}, &quot;470&quot;:{&quot;items&quot;:3},&quot;630&quot;:{&quot;items&quot;:4},&quot;991&quot;:{&quot;items&quot;:5},&quot;1200&quot;:{&quot;items&quot;:6}} }"><img className="d-block w-110 opacity-75 m-auto" src="img/brands/01.png" alt="Adidas" /><img className="d-block w-110 opacity-75 m-auto" src="img/brands/02.png" alt="Brooks" /><img className="d-block w-110 opacity-75 m-auto" src="img/brands/03.png" alt="Valentino" /><img className="d-block w-110 opacity-75 m-auto" src="img/brands/04.png" alt="Nike" /><img className="d-block w-110 opacity-75 m-auto" src="img/brands/05.png" alt="Puma" /><img className="d-block w-110 opacity-75 m-auto" src="img/brands/06.png" alt="New Balance" /><img className="d-block w-110 opacity-75 m-auto" src="img/brands/07.png" alt="Dior" /></div>
              </div>
            </section>
            {/* Services*/}
            <section className="container padding-top-3x padding-bottom-2x">
              <div className="row">
                <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/01.png" alt="Shipping" />
                  <h6>Free Worldwide Shipping</h6>
                  <p className="text-muted margin-bottom-none">Free shipping for all orders over $100</p>
                </div>
                <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/02.png" alt="Money Back" />
                  <h6>Money Back Guarantee</h6>
                  <p className="text-muted margin-bottom-none">We return money within 30 days</p>
                </div>
                <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/03.png" alt="Support" />
                  <h6>24/7 Customer Support</h6>
                  <p className="text-muted margin-bottom-none">Friendly 24/7 customer support</p>
                </div>
                <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/04.png" alt="Payment" />
                  <h6>Secure Online Payment</h6>
                  <p className="text-muted margin-bottom-none">We posess SSL / Secure Certificate</p>
                </div>
              </div>
            </section>
          </div>
          
        );
    }
}