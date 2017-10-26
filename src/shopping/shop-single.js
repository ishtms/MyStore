import React, { Component } from 'react';

export default class ShopSingle extends Component {
    render () {
        return (
            <div className="container padding-bottom-3x mb-1">
            <div className="row">
              {/* Poduct Gallery*/}
              <div className="col-md-6">
                <div className="product-gallery"><span className="product-badge text-danger">30% Off</span>
                  <div className="gallery-wrapper">
                    <div className="gallery-item active"><a href="img/shop/single/01.jpg" data-hash="one" data-size="1000x667" /></div>
                    <div className="gallery-item"><a href="img/shop/single/02.jpg" data-hash="two" data-size="1000x667" /></div>
                    <div className="gallery-item"><a href="img/shop/single/03.jpg" data-hash="three" data-size="1000x667" /></div>
                    <div className="gallery-item"><a href="img/shop/single/04.jpg" data-hash="four" data-size="1000x667" /></div>
                    <div className="gallery-item"><a href="img/shop/single/05.jpg" data-hash="five" data-size="1000x667" /></div>
                  </div>
                  <div className="product-carousel owl-carousel">
                    <div data-hash="one"><img src="img/shop/single/01.jpg" alt="Product" /></div>
                    <div data-hash="two"><img src="img/shop/single/02.jpg" alt="Product" /></div>
                    <div data-hash="three"><img src="img/shop/single/03.jpg" alt="Product" /></div>
                    <div data-hash="four"><img src="img/shop/single/04.jpg" alt="Product" /></div>
                    <div data-hash="five"><img src="img/shop/single/05.jpg" alt="Product" /></div>
                  </div>
                  <ul className="product-thumbnails">
                    <li className="active"><a href="#one"><img src="img/shop/single/th01.jpg" alt="Product" /></a></li>
                    <li><a href="#two"><img src="img/shop/single/th02.jpg" alt="Product" /></a></li>
                    <li><a href="#three"><img src="img/shop/single/th03.jpg" alt="Product" /></a></li>
                    <li><a href="#four"><img src="img/shop/single/th04.jpg" alt="Product" /></a></li>
                    <li><a href="#five"><img src="img/shop/single/th05.jpg" alt="Product" /></a></li>
                  </ul>
                </div>
              </div>
              {/* Product Info*/}
              <div className="col-md-6">
                <div className="padding-top-2x mt-2 hidden-md-up" />
                <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star" />
                </div><span className="text-muted align-middle">&nbsp;&nbsp;4.2 | 3 customer reviews</span>
                <h2 className="padding-top-1x text-normal">Reebok Royal CL Jogger 2</h2><span className="h2 d-block">
                  <del className="text-muted text-normal">$68.00</del>&nbsp; $47.60</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta voluptatibus quos ea dolore rem, molestias laudantium et explicabo assumenda fugiat deserunt in, facilis laborum excepturi aliquid nobis ipsam deleniti aut? Aliquid sit hic id velit qui fuga nemo suscipit obcaecati. Officia nisi quaerat minus nulla saepe aperiam sint possimus magni veniam provident.</p>
                <div className="row margin-top-1x">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="size">Men's size</label>
                      <select className="form-control" id="size">
                        <option>Chooze size</option>
                        <option>11.5</option>
                        <option>11</option>
                        <option>10.5</option>
                        <option>10</option>
                        <option>9.5</option>
                        <option>9</option>
                        <option>8.5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="form-group">
                      <label htmlFor="color">Choose color</label>
                      <select className="form-control" id="color">
                        <option>White/Red/Blue</option>
                        <option>Black/Orange/Green</option>
                        <option>Gray/Purple/White</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label htmlFor="quantity">Quantity</label>
                      <select className="form-control" id="quantity">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="pt-1 mb-2"><span className="text-medium">SKU:</span> #21457832</div>
                <div className="padding-bottom-1x mb-2"><span className="text-medium">Categories:&nbsp;</span><a className="navi-link" href="#">Men’s shoes,</a><a className="navi-link" href="#"> Snickers,</a><a className="navi-link" href="#"> Sport shoes</a></div>
                <hr className="mb-3" />
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="entry-share mt-2 mb-2"><span className="text-muted">Share:</span>
                    <div className="share-links"><a className="social-button shape-circle sb-facebook" href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="socicon-facebook" /></a><a className="social-button shape-circle sb-twitter" href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="socicon-twitter" /></a><a className="social-button shape-circle sb-instagram" href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="socicon-instagram" /></a><a className="social-button shape-circle sb-google-plus" href="#" data-toggle="tooltip" data-placement="top" title="Google +"><i className="socicon-googleplus" /></a></div>
                  </div>
                  <div className="sp-buttons mt-2 mb-2">
                    <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                    <button className="btn btn-primary" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!"><i className="icon-bag" /> Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Tabs*/}
            <div className="row padding-top-3x mb-3">
              <div className="col-lg-10 offset-lg-1">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item"><a className="nav-link active" href="#description" data-toggle="tab" role="tab">Description</a></li>
                  <li className="nav-item"><a className="nav-link" href="#reviews" data-toggle="tab" role="tab">Reviews (3)</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="description" role="tabpanel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error blanditiis a, deserunt magnam pariatur quam suscipit quae. Veniam, deserunt reprehenderit quasi hic recusandae itaque omnis fugiat animi architecto facilis repellendus. Commodi dolorem, eius consectetur. Amet maiores nemo at nobi s aspernatur velit, sequi odio, a veritatis inventore autem esse provident in? Placeat, sunt!</p>
                    <p className="mb-30">Iste assumenda, vitae, aliquam excepturi libero quia ullam quisquam tenetur id sint labore. Pariatur praesentium velit, fugit facere maxime voluptates optio qui? Quidem obcaecati necessitatibus rem aspernatur, mollitia, assumenda explicabo numquam minus eos sapiente totam dicta, laborum dolorum! Vitae distinctio quos non ut fugiat.</p>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="http://www.youtube.com/embed/B81qd2v6alw?rel=0" allowFullScreen />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="reviews" role="tabpanel">
                    {/* Review*/}
                    <div className="comment">
                      <div className="comment-author-ava"><img src="img/reviews/01.jpg" alt="Review author" /></div>
                      <div className="comment-body">
                        <div className="comment-header d-flex flex-wrap justify-content-between">
                          <h4 className="comment-title">Average quality for the price</h4>
                          <div className="mb-2">
                            <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star" /><i className="icon-star" />
                            </div>
                          </div>
                        </div>
                        <p className="comment-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                        <div className="comment-footer"><span className="comment-meta">Francis Burton</span></div>
                      </div>
                    </div>
                    {/* Review*/}
                    <div className="comment">
                      <div className="comment-author-ava"><img src="img/reviews/02.jpg" alt="Review author" /></div>
                      <div className="comment-body">
                        <div className="comment-header d-flex flex-wrap justify-content-between">
                          <h4 className="comment-title">My husband love his new...</h4>
                          <div className="mb-2">
                            <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" />
                            </div>
                          </div>
                        </div>
                        <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="comment-footer"><span className="comment-meta">Maggie Scott</span></div>
                      </div>
                    </div>
                    {/* Review*/}
                    <div className="comment">
                      <div className="comment-author-ava"><img src="img/reviews/03.jpg" alt="Review author" /></div>
                      <div className="comment-body">
                        <div className="comment-header d-flex flex-wrap justify-content-between">
                          <h4 className="comment-title">Soft, comfortable, quite durable...</h4>
                          <div className="mb-2">
                            <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star" />
                            </div>
                          </div>
                        </div>
                        <p className="comment-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <div className="comment-footer"><span className="comment-meta">Jacob Hammond</span></div>
                      </div>
                    </div>
                    {/* Review Form*/}
                    <h5 className="mb-30 padding-top-1x">Leave Review</h5>
                    <form className="row" method="post">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="review_name">Your Name</label>
                          <input className="form-control form-control-rounded" type="text" id="review_name" required />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="review_email">Your Email</label>
                          <input className="form-control form-control-rounded" type="email" id="review_email" required />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="review_subject">Subject</label>
                          <input className="form-control form-control-rounded" type="text" id="review_subject" required />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="review_rating">Rating</label>
                          <select className="form-control form-control-rounded" id="review_rating">
                            <option>5 Stars</option>
                            <option>4 Stars</option>
                            <option>3 Stars</option>
                            <option>2 Stars</option>
                            <option>1 Star</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="review_text">Review </label>
                          <textarea className="form-control form-control-rounded" id="review_text" rows={8} required defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-12 text-right">
                        <button className="btn btn-outline-primary" type="submit">Submit Review</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Related Products Carousel*/}
            <h3 className="text-center padding-top-2x mt-2 padding-bottom-1x">You May Also Like</h3>
            {/* Carousel*/}
            <div className="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;margin&quot;: 30, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;576&quot;:{&quot;items&quot;:2},&quot;768&quot;:{&quot;items&quot;:3},&quot;991&quot;:{&quot;items&quot;:4},&quot;1200&quot;:{&quot;items&quot;:4}} }">
              {/* Product*/}
              <div className="grid-item">
                <div className="product-card">
                  <div className="product-badge text-danger">22% Off</div><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/products/09.jpg" alt="Product" /></a>
                  <h3 className="product-title"><a href="/shopping#/shop-single">Rocket Dog</a></h3>
                  <h4 className="product-price">
                    <del>$44.95</del>$34.99
                  </h4>
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
                <div className="product-card"><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/products/12.jpg" alt="Product" /></a>
                  <h3 className="product-title"><a href="/shopping#/shop-single">Vented Straw Fedora</a></h3>
                  <h4 className="product-price">$49.50</h4>
                  <div className="product-buttons">
                    <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                    <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                  </div>
                </div>
              </div>
              {/* Product*/}
              <div className="grid-item">
                <div className="product-card">
                  <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" />
                  </div><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/products/11.jpg" alt="Product" /></a>
                  <h3 className="product-title"><a href="/shopping#/shop-single">Top-Sider Fathom</a></h3>
                  <h4 className="product-price">$90.00</h4>
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
            </div>
          </div>
          
        );
    }
}