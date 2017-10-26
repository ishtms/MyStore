import React, { Component } from 'react';

export default class Cart extends Component {
  componentDidMount(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;        
}
    render () {
        return (
            <div className="container padding-bottom-3x mb-1">
            {/* Alert*/}
            <div className="alert alert-info alert-dismissible fade show text-center" style={{marginBottom: 30}}><span className="alert-close" data-dismiss="alert" /><img className="d-inline align-center" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAzIDUxMi4wMDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDMgNTEyLjAwMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNMjU2LjAwMSw2NGMtNzAuNTkyLDAtMTI4LDU3LjQwOC0xMjgsMTI4czU3LjQwOCwxMjgsMTI4LDEyOHMxMjgtNTcuNDA4LDEyOC0xMjhTMzI2LjU5Myw2NCwyNTYuMDAxLDY0eiAgICAgIE0yNTYuMDAxLDI5OC42NjdjLTU4LjgxNiwwLTEwNi42NjctNDcuODUxLTEwNi42NjctMTA2LjY2N1MxOTcuMTg1LDg1LjMzMywyNTYuMDAxLDg1LjMzM1MzNjIuNjY4LDEzMy4xODQsMzYyLjY2OCwxOTIgICAgIFMzMTQuODE3LDI5OC42NjcsMjU2LjAwMSwyOTguNjY3eiIgZmlsbD0iIzUwYzZlOSIvPgoJCQk8cGF0aCBkPSJNMzg1LjY0NCwzMzMuMjA1YzM4LjIyOS0zNS4xMzYsNjIuMzU3LTg1LjMzMyw2Mi4zNTctMTQxLjIwNWMwLTEwNS44NTYtODYuMTIzLTE5Mi0xOTItMTkycy0xOTIsODYuMTQ0LTE5MiwxOTIgICAgIGMwLDU1Ljg1MSwyNC4xMjgsMTA2LjA2OSw2Mi4zMzYsMTQxLjE4NEw2NC42ODQsNDk3LjZjLTEuNTM2LDQuMTE3LTAuNDA1LDguNzI1LDIuODM3LDExLjY2OSAgICAgYzIuMDI3LDEuNzkyLDQuNTY1LDIuNzMxLDcuMTQ3LDIuNzMxYzEuNjIxLDAsMy4yNDMtMC4zNjMsNC43NzktMS4xMDlsNzkuNzg3LTM5Ljg5M2w1OC44NTksMzkuMjMyICAgICBjMi42ODgsMS43OTIsNi4xMDEsMi4yNCw5LjE5NSwxLjI4YzMuMDkzLTEuMDAzLDUuNTY4LTMuMzQ5LDYuNjk5LTYuNGwyMy4yOTYtNjIuMTQ0bDIwLjU4Nyw2MS43MzkgICAgIGMxLjA2NywzLjE1NywzLjU0MSw1LjYzMiw2LjY3Nyw2LjcyYzMuMTM2LDEuMDY3LDYuNTkyLDAuNjQsOS4zNjUtMS4yMTZsNTguODU5LTM5LjIzMmw3OS43ODcsMzkuODkzICAgICBjMS41MzYsMC43NjgsMy4xNTcsMS4xMzEsNC43NzksMS4xMzFjMi41ODEsMCw1LjEyLTAuOTM5LDcuMTI1LTIuNzUyYzMuMjY0LTIuOTIzLDQuMzczLTcuNTUyLDIuODM3LTExLjY2OUwzODUuNjQ0LDMzMy4yMDV6ICAgICAgTTI0Ni4wMTcsNDEyLjI2N2wtMjcuMjg1LDcyLjc0N2wtNTIuODIxLTM1LjJjLTMuMi0yLjExMi03LjMxNy0yLjM4OS0xMC42ODgtMC42NjFMOTQuMTg4LDQ3OS42OGw0OS41NzktMTMyLjIyNCAgICAgYzI2Ljg1OSwxOS40MzUsNTguNzk1LDMyLjIxMyw5My41NDcsMzUuNjA1TDI0Ni43LDQxMS4yQzI0Ni40ODcsNDExLjU2MywyNDYuMTY3LDQxMS44NCwyNDYuMDE3LDQxMi4yNjd6IE0yNTYuMDAxLDM2Mi42NjcgICAgIEMxNjEuOSwzNjIuNjY3LDg1LjMzNSwyODYuMTAxLDg1LjMzNSwxOTJTMTYxLjksMjEuMzMzLDI1Ni4wMDEsMjEuMzMzUzQyNi42NjgsOTcuODk5LDQyNi42NjgsMTkyICAgICBTMzUwLjEwMywzNjIuNjY3LDI1Ni4wMDEsMzYyLjY2N3ogTTM1Ni43NTksNDQ5LjEzMWMtMy40MTMtMS43MjgtNy41MDktMS40NzItMTAuNjg4LDAuNjYxbC01Mi4zNzMsMzQuOTIzbC0zMy42NDMtMTAwLjkyOCAgICAgYzQwLjM0MS0wLjg1Myw3Ny41ODktMTQuMTg3LDEwOC4xNi0zNi4zMzFsNDkuNTc5LDEzMi4yMDNMMzU2Ljc1OSw0NDkuMTMxeiIgZmlsbD0iIzUwYzZlOSIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" width={18} height={18} alt="Medal icon" />&nbsp;&nbsp;With this purchase you will earn <strong>290</strong> Reward Points.</div>
            {/* Shopping Cart*/}
            <div className="table-responsive shopping-cart">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Subtotal</th>
                    <th className="text-center">Discount</th>
                    <th className="text-center"><a className="btn btn-sm btn-outline-danger" href="/payment#/cart">Clear Cart</a></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="product-item"><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/cart/01.jpg" alt="Product" /></a>
                        <div className="product-info">
                          <h4 className="product-title"><a href="/shopping#/shop-single">Unionbay Park</a></h4><span><em>Size:</em> 10.5</span><span><em>Color:</em> Dark Blue</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="count-input">
                        <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </td>
                    <td className="text-center text-lg text-medium">$43.90</td>
                    <td className="text-center text-lg text-medium">$18.00</td>
                    <td className="text-center"><a className="remove-from-cart" href="/payment#/cart" data-toggle="tooltip" title="Remove item"><i className="icon-cross" /></a></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="product-item"><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/cart/02.jpg" alt="Product" /></a>
                        <div className="product-info">
                          <h4 className="product-title"><a href="/shopping#/shop-single">Daily Fabric Cap</a></h4><span><em>Size:</em> XL</span><span><em>Color:</em> Black</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="count-input">
                        <select className="form-control">
                          <option>1</option>
                          <option selected>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </td>
                    <td className="text-center text-lg text-medium">$24.89</td>
                    <td className="text-center">—</td>
                    <td className="text-center"><a className="remove-from-cart" href="/payment#/cart" data-toggle="tooltip" title="Remove item"><i className="icon-cross" /></a></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="product-item"><a className="product-thumb" href="/shopping#/shop-single"><img src="img/shop/cart/03.jpg" alt="Product" /></a>
                        <div className="product-info">
                          <h4 className="product-title"><a href="/shopping#/shop-single">Cole Haan Crossbody</a></h4><span><em>Size:</em> -</span><span><em>Color:</em> Turquoise</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="count-input">
                        <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </td>
                    <td className="text-center text-lg text-medium">$200.00</td>
                    <td className="text-center">—</td>
                    <td className="text-center"><a className="remove-from-cart" href="/payment#/cart" data-toggle="tooltip" title="Remove item"><i className="icon-cross" /></a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="shopping-cart-footer">
              <div className="column">
                <form className="coupon-form" method="post">
                  <input className="form-control form-control-sm" type="text" placeholder="Coupon code" required />
                  <button className="btn btn-outline-primary btn-sm" type="submit">Apply Coupon</button>
                </form>
              </div>
              <div className="column text-lg">Subtotal: <span className="text-medium">$289.68</span></div>
            </div>
            <div className="shopping-cart-footer">
              <div className="column"><a className="btn btn-outline-secondary" href="/shopping#/shop-grid"><i className="icon-arrow-left" />&nbsp;Back to Shopping</a></div>
              <div className="column"><a className="btn btn-primary" href="/payment#/cart" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Your cart" data-toast-message="is updated successfully!">Update Cart</a><a className="btn btn-success" href="/payment#/checkout-address">Checkout</a></div>
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