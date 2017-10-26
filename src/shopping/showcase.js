import React, { Component } from 'react';

export default class Showcase extends Component {
    constructor(props){
        super(props);
        this.state = {
            some: [1,2,3,4,5,6,7,8,9,1]
        }
    }
    render () {
        let something = this.state.some.map((curr)=>{
            return <div className="grid-item classic">
            <div className="product-card"><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/products/17.jpg" alt="Product" /></a>
              <h3 className="product-title"><a href="/shopping#/shop-single">Gents BN0024 Classic</a></h3>
              <h4 className="product-price">€185.00</h4>
              <div className="product-buttons">
                <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
              </div>
            </div>
          </div>
        })
        return (
            <div>
            <section className="fw-section padding-top-10x padding-bottom-10x" style={{backgroundImage: 'url(img/hero/hero-bg.jpg)'}}>
              <div className="container padding-top-2x text-center">
                <div className="d-inline-block mb-30"><img className="d-block w-150" src="img/hero/logo-braun.png" alt="Braun" /></div>
                <h2 className="text-white text-normal mb-2">Braun premium watch collection</h2>
                <h6 className="text-white text-normal opacity-80 mb-4">Check our new collection of watches that represents true quality and functionality</h6><a className="btn btn-primary scroll-to" href="#collections">View Collection</a>
              </div>
            </section>
            {/* Video Carousel*/}
            <section className="container padding-top-3x" id="collections">
              <h3 className="text-center mb-30">Featured Collections (Video)</h3>
              <div className="row pt-1 justify-content-center">
                <div className="col-xl-10">
                  <div className="gallery-wrapper owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: true }">
                    <div className="gallery-item no-hover-effect"><a href="#" data-type="video" data-video="<div class=&quot;wrapper&quot;><div class=&quot;video-wrapper&quot;><iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=_https_/player.vimeo.com/video/1382353127790.html?color=ffffff&title=0&byline=0&portrait=0%22 frameborder=&quot;0&quot; allowfullscreen></iframe></div></div>"><img src="img/video-covers/01.jpg" alt="Cover" /></a><span className="caption">Classic Collection</span></div>
                    <div className="gallery-item no-hover-effect"><a href="#" data-type="video" data-video="<div class=&quot;wrapper&quot;><div class=&quot;video-wrapper&quot;><iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=_https_/player.vimeo.com/video/1382906177790.html?color=ffffff&title=0&byline=0&portrait=0%22 frameborder=&quot;0&quot; allowfullscreen></iframe></div></div>"><img src="img/video-covers/02.jpg" alt="Cover" /></a><span className="caption">Prestige Collection</span></div>
                    <div className="gallery-item no-hover-effect"><a href="#" data-type="video" data-video="<div class=&quot;wrapper&quot;><div class=&quot;video-wrapper&quot;><iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=_https_/player.vimeo.com/video/1382353127790.html?color=ffffff&title=0&byline=0&portrait=0%22 frameborder=&quot;0&quot; allowfullscreen></iframe></div></div>"><img src="img/video-covers/03.jpg" alt="Cover" /></a><span className="caption">Sports Collection</span></div>
                  </div>
                </div>
              </div>
            </section>
            {/* Products Grid*/}
            <section className="bg-secondary padding-top-3x padding-bottom-2x margin-top-3x">
              <div className="container">
                <h3 className="text-center mb-30">Explore Watches</h3>
                <ul className="nav nav-pills justify-content-center pb-2">
                  <li className="nav-item"><a className="nav-link active" href="#" data-filter="*">All</a></li>
                  <li className="nav-item"><a className="nav-link" href="#" data-filter=".classic">Classic</a></li>
                  <li className="nav-item"><a className="nav-link" href="#" data-filter=".digital">Digital</a></li>
                  <li className="nav-item"><a className="nav-link" href="#" data-filter=".prestige">Prestige</a></li>
                  <li className="nav-item"><a className="nav-link" href="#" data-filter=".sport">Sport</a></li>
                </ul>
                <div className="isotope-grid filter-grid cols-4 mt-4">
                  <div className="gutter-sizer" />
                  <div className="grid-sizer" />
                  {/* Product*/}
                  {something}
                </div>
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