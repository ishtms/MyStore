import React, { Component } from 'react';

export default class Faq extends Component {
    componentDidMount(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;        
    }
    render () {
        return (
            <div className="container padding-bottom-3x">
            <div className="row">
              {/* Side Menu*/}
              <div className="col-lg-3 col-md-4">
                <nav className="list-group"><a className="list-group-item active" href="#">Most Popular Questions</a><a className="list-group-item" href="#">Managing Account</a><a className="list-group-item" href="#">Working With Dashboard</a><a className="list-group-item" href="#">Available Payment Methods</a><a className="list-group-item" href="#">Delivery Information</a><a className="list-group-item" href="#">Order Tracking Instructions</a><a className="list-group-item" href="#">Refund Policy</a><a className="list-group-item" href="#">Offers And Discounts</a><a className="list-group-item" href="#">Reward Points</a><a className="list-group-item" href="#">Affiliate Program</a><a className="list-group-item" href="#">Service Terms &amp; Conditions</a></nav>
                <div className="padding-bottom-3x hidden-md-up" />
              </div>
              {/* Content*/}
              <div className="col-lg-9 col-md-8">
                <div className="accordion" id="accordion" role="tablist">
                  <div className="card">
                    <div className="card-header" role="tab">
                      <h6><a href="#collapseOne" data-toggle="collapse" data-parent="#accordion">What payment methods do you accept?</a></h6>
                    </div>
                    <div className="collapse show" id="collapseOne" role="tabpanel">
                      <div className="card-body">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, harum. Asperiores mollitia sed ullam quae blanditiis explicabo, reprehenderit sint rerum, labore, fugit obcaecati laboriosam nulla voluptatem inventore nobis esse nemo.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab">
                      <h6><a className="collapsed" href="#collapseTwo" data-toggle="collapse" data-parent="#accordion">How long will delivery take?</a></h6>
                    </div>
                    <div className="collapse" id="collapseTwo" role="tabpanel">
                      <div className="card-body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab">
                      <h6><a className="collapsed" href="#collapseThree" data-toggle="collapse" data-parent="#accordion">Do you ship internationally?</a></h6>
                    </div>
                    <div className="collapse" id="collapseThree" role="tabpanel">
                      <div className="card-body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab">
                      <h6><a className="collapsed" href="#collapseFour" data-toggle="collapse" data-parent="#accordion">Do I need an account to place an order?</a></h6>
                    </div>
                    <div className="collapse" id="collapseFour" role="tabpanel">
                      <div className="card-body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab">
                      <h6><a className="collapsed" href="#collapseFive" data-toggle="collapse" data-parent="#accordion">Do you have discounts for returning customers?</a></h6>
                    </div>
                    <div className="collapse" id="collapseFive" role="tabpanel">
                      <div className="card-body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab">
                      <h6><a className="collapsed" href="#collapseSix" data-toggle="collapse" data-parent="#accordion">How can I track my order?</a></h6>
                    </div>
                    <div className="collapse" id="collapseSix" role="tabpanel">
                      <div className="card-body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab">
                      <h6><a className="collapsed" href="#collapseSeven" data-toggle="collapse" data-parent="#accordion">What are the product refund conditions?</a></h6>
                    </div>
                    <div className="collapse" id="collapseSeven" role="tabpanel">
                      <div className="card-body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                    </div>
                  </div>
                </div>
                <h3 className="padding-top-2x">Haven't found the answer? Ask us.</h3>
                <p className="text-muted mb-30">We normally respond within 2 business days. Most popular questions will appear on this page.</p>
                <form className="row" method="post">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="help_name">Your Name</label>
                      <input className="form-control form-control-rounded" type="text" id="help_name" required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="help_email">Your Email</label>
                      <input className="form-control form-control-rounded" type="email" id="help_email" required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="help_subject">Subject</label>
                      <input className="form-control form-control-rounded" type="text" id="help_subject" required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="help_category">Category</label>
                      <select className="form-control form-control-rounded" id="help_category">
                        <option>Account Management</option>
                        <option>Refund Policy</option>
                        <option>Payment Procedure</option>
                        <option>Shipping Info</option>
                        <option>Referral Program</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="help_question">Question </label>
                      <textarea className="form-control form-control-rounded" id="help_question" rows={8} required defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-12 text-right">
                    <button className="btn btn-outline-primary" type="submit">Submit Question</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        );
    }
}