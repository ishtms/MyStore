import React, { Component } from 'react';

export default class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: "img/blog/single/01.jpg"
        }
    }
    componentDidMount(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;        
    }
    render () {
        return (
            <div className="container padding-bottom-3x mb-2">
                <div className="row"> 
                {/* Content*/}
                <div className="col-xl-9 col-lg-8 order-lg-2">
                    {/* Post*/}
                    <div className="single-post-meta">
                    <div className="column">
                        <div className="meta-link"><span>by</span>John Doe</div>
                        <div className="meta-link"><span>in</span><a href="#">Fashion,&nbsp;</a><a href="#">Travel</a></div>
                    </div>
                    <div className="column">
                        <div className="meta-link"><a href="#"><i className="icon-clock" />Feb 11, 2017</a></div>
                        <div className="meta-link"><a className="scroll-to" href="#comments"><i className="icon-speech-bubble" />3</a></div>
                    </div>
                    </div>
                    <div className="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: true, &quot;dots&quot;: true, &quot;loop&quot;: true }">
                    <figure><img src={this.state.url} alt="Image" />
                        <figcaption className="text-white">Image Caption</figcaption>
                    </figure>
                    <figure><img src={this.state.url} alt="Image" />
                        <figcaption className="text-white">Image Caption</figcaption>
                    </figure>
                    <figure><img src={this.state.url} alt="Image" />
                        <figcaption className="text-white">Image Caption</figcaption>
                    </figure>
                    </div>
                    <h2 className="padding-top-2x">New Trends in Suburban Fashion</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minima veniam, quis nostrum exercitationem.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minima veniam.</p>
                    <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <blockquote className="margin-top-1x margin-bottom-1x">
                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                        <cite>Someone famous</cite>
                        </blockquote>
                    </div>
                    </div>
                    <p className="mt-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                    <div className="single-post-footer">
                    <div className="column"><a className="sp-tag" href="#">#design,</a><a className="sp-tag" href="#">&nbsp;#fashion,</a><a className="sp-tag" href="#">&nbsp;#travelling</a></div>
                    <div className="column">
                        <div className="entry-share"><span className="text-muted">Share post:</span>
                        <div className="share-links"><a className="social-button shape-circle sb-facebook" href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="socicon-facebook" /></a><a className="social-button shape-circle sb-twitter" href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="socicon-twitter" /></a><a className="social-button shape-circle sb-instagram" href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="socicon-instagram" /></a><a className="social-button shape-circle sb-google-plus" href="#" data-toggle="tooltip" data-placement="top" title="Google +"><i className="socicon-googleplus" /></a></div>
                        </div>
                    </div>
                    </div>
                    {/* Post Navigation*/}
                    <div className="entry-navigation">
                    <div className="column text-left"><a className="btn btn-outline-secondary btn-sm" href="#"><i className="icon-arrow-left" />&nbsp;Prev</a></div>
                    <div className="column"><a className="btn btn-outline-secondary view-all" href="/company#/blog" data-toggle="tooltip" data-placement="top" title="All posts"><i className="icon-menu" /></a></div>
                    <div className="column text-right"><a className="btn btn-outline-secondary btn-sm" href="#">Next&nbsp;<i className="icon-arrow-right" /></a></div>
                    </div>
                    {/* Relevant Posts*/}
                    <h3 className="padding-top-3x padding-bottom-1x">You May Also Like</h3>
                    <div className="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;loop&quot;: false, &quot;autoHeight&quot;: true, &quot;margin&quot;: 30, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;630&quot;:{&quot;items&quot;:2},&quot;991&quot;:{&quot;items&quot;:3},&quot;1200&quot;:{&quot;items&quot;:3}} }">
                    <div className="widget widget-featured-posts">
                        <div className="entry">
                        <div className="entry-thumb"><a href="#"><img src="img/blog/widget/01.jpg" alt="Post" /></a></div>
                        <div className="entry-content">
                            <h4 className="entry-title"><a href="#">Trending Winter Boots</a></h4><span className="entry-meta">by Olivia Reyes</span>
                        </div>
                        </div>
                    </div>
                    <div className="widget widget-featured-posts">
                        <div className="entry">
                        <div className="entry-content">
                            <h4 className="entry-title"><a href="#">Global Travel And Vacations Luxury Travel On A Tight Budget</a></h4><span className="entry-meta">by Logan Coleman</span>
                        </div>
                        </div>
                    </div>
                    <div className="widget widget-featured-posts">
                        <div className="entry">
                        <div className="entry-thumb"><a href="#"><img src="img/blog/widget/03.jpg" alt="Post" /></a></div>
                        <div className="entry-content">
                            <h4 className="entry-title"><a href="#">Perfect Shoes for Yamakasi</a></h4><span className="entry-meta">by Edward Solo</span>
                        </div>
                        </div>
                    </div>
                    <div className="widget widget-featured-posts">
                        <div className="entry">
                        <div className="entry-thumb"><a href="#"><img src="img/blog/widget/02.jpg" alt="Post" /></a></div>
                        <div className="entry-content">
                            <h4 className="entry-title"><a href="#">Hoop Earrings A Style From History</a></h4><span className="entry-meta">by Cynthia Gomez</span>
                        </div>
                        </div>
                    </div>
                    <div className="widget widget-featured-posts">
                        <div className="entry">
                        <div className="entry-content">
                            <h4 className="entry-title"><a href="#">How Fashion Industry Leads To A Melting Ice In Antarctica</a></h4><span className="entry-meta">by Johnathan Doe</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Comments*/}
                    <section className="padding-top-3x" id="comments">
                    <h3 className="padding-bottom-1x">Comments</h3>
                    {/* Comment*/}
                    <div className="comment">
                        <div className="comment-author-ava"><img src="img/reviews/01.jpg" alt="Comment author" /></div>
                        <div className="comment-body">
                        <div className="comment-header">
                            <h4 className="comment-title">Francis Burton</h4>
                        </div>
                        <p className="comment-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                        <div className="comment-footer">
                            <div className="column"><span className="comment-meta">2 days ago</span></div>
                            <div className="column"><a className="reply-link" href="#"><i className="icon-reply" />Reply</a></div>
                        </div>
                        {/* Comment reply*/}
                        <div className="comment comment-reply">
                            <div className="comment-author-ava"><img src="img/reviews/02.jpg" alt="Comment author" /></div>
                            <div className="comment-body">
                            <div className="comment-header">
                                <h4 className="comment-title">Maggie Scott</h4>
                            </div>
                            <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="comment-footer"><span className="comment-meta">1 day ago</span></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Comment*/}
                    <div className="comment">
                        <div className="comment-author-ava"><img src="img/reviews/03.jpg" alt="Comment author" /></div>
                        <div className="comment-body">
                        <div className="comment-header">
                            <h4 className="comment-title">Jacob Hammond</h4>
                        </div>
                        <p className="comment-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <div className="comment-footer">
                            <div className="column"><span className="comment-meta">5 days ago</span></div>
                            <div className="column"><a className="reply-link" href="#"><i className="icon-reply" />Reply</a></div>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* Comment Form*/}
                    <h4 className="padding-top-2x padding-bottom-1x">Leave a Comment</h4>
                    <form className="row" method="post">
                    <div className="col-sm-6">
                        <div className="form-group">
                        <label htmlFor="comment-name">Name</label>
                        <input className="form-control form-control-rounded" type="text" id="comment-name" placeholder="John Doe" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                        <label htmlFor="comment-email">E-mail</label>
                        <input className="form-control form-control-rounded" type="email" id="comment-email" placeholder="johndoe@email.com" required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                        <label htmlFor="comment-text">Comment</label>
                        <textarea className="form-control form-control-rounded" rows={7} id="comment-text" placeholder="Write your comment here..." required defaultValue={""} />
                        </div>
                    </div>
                    <div className="col-12 text-right">
                        <button className="btn btn-pill btn-primary" type="submit">Post Comment</button>
                    </div>
                    </form>
                </div>
                {/* Sidebar          */}
                <div className="col-xl-3 col-lg-4 order-lg-1">
                    <aside className="sidebar">
                    <div className="padding-top-2x hidden-lg-up" />
                    {/* Widget Search*/}
                    <section className="widget">
                        <form className="input-group form-group" method="get"><span className="input-group-btn">
                            <button type="submit"><i className="icon-search" /></button></span>
                        <input className="form-control" type="search" placeholder="Search blog" />
                        </form>
                    </section>
                    {/* Widget Categories*/}
                    <section className="widget widget-categories">
                        <h3 className="widget-title">Categories</h3>
                        <ul>
                        <li><a href="#">Editor's Choice</a><span>(24)</span></li>
                        <li><a href="#">Fashion</a><span>(12)</span></li>
                        <li><a href="#">Travel</a><span>(5)</span></li>
                        <li><a href="#">Online Shopping</a><span>(7)</span></li>
                        <li><a href="#">Closing Design</a><span>(3)</span></li>
                        </ul>
                    </section>
                    {/* Widget Featured Posts*/}
                    <section className="widget widget-featured-posts">
                        <h3 className="widget-title">Featured Posts</h3>
                        {/* Entry*/}
                        <div className="entry">
                        <div className="entry-thumb"><a href="/company#/blog"><img src="img/blog/widget/01.jpg" alt="Post" /></a></div>
                        <div className="entry-content">
                            <h4 className="entry-title"><a href="/company#/blog">Trending Winter Boots</a></h4><span className="entry-meta">by Olivia Reyes</span>
                        </div>
                        </div>
                        {/* Entry*/}
                        <div className="entry">
                        <div className="entry-content">
                            <h4 className="entry-title"><a href="/company#/blog">Global Travel And Vacations Luxury Travel On A Tight Budget</a></h4><span className="entry-meta">by Logan Coleman</span>
                        </div>
                        </div>
                        {/* Entry*/}
                        <div className="entry">
                        <div className="entry-thumb"><a href="/company#/blog"><img src="img/blog/widget/02.jpg" alt="Post" /></a></div>
                        <div className="entry-content">
                            <h4 className="entry-title"><a href="/company#/blog">Hoop Earrings A Style From History</a></h4><span className="entry-meta">by Cynthia Gomez</span>
                        </div>
                        </div>
                    </section>
                    {/* Widget Tags*/}
                    <section className="widget widget-tags">
                        <h3 className="widget-title">Popular Tags</h3><a className="tag" href="#">#design</a><a className="tag" href="#">#fashion</a><a className="tag" href="#">#travelling</a><span className="tag active">#active tag</span><a className="tag" href="#">#shopping</a>
                    </section>
                    {/* Promo Banner*/}
                    <section className="promo-box" style={{backgroundImage: 'url(img/banners/01.jpg)'}}>
                        {/* Choose between .overlay-dark (#000) or .overlay-light (#fff) with default opacity of 50%. You can overrride default color and opacity values via 'style' attribute.*/}<span className="overlay-dark" style={{opacity: '.35'}} />
                        <div className="promo-box-content text-center padding-top-2x padding-bottom-2x">
                        <h3 className="text-bold text-light text-shadow">New 2017<br />Handbag Collection</h3>
                        <h4 className="text-light text-thin text-shadow">has just arrived!</h4><a className="btn btn-sm btn-primary" href="/shopping#/shop-grid">Shop Now</a>
                        </div>
                    </section>
                    </aside>
                </div>
                </div>
            </div>
          
        );
    }
}