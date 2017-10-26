import React, { Component } from 'react';

export default class AccountPasswordRecovery extends Component {
    render () {
        return (
            <div className="container padding-bottom-3x mb-2">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <h2>Forgot your password?</h2>
                <p>Change your password in three easy steps. This helps to keep your new password secure.</p>
                <ol className="list-unstyled">
                  <li><span className="text-primary text-medium">1. </span>Fill in your email address below.</li>
                  <li><span className="text-primary text-medium">2. </span>We'll email you a temporary code.</li>
                  <li><span className="text-primary text-medium">3. </span>Use the code to change your password on our secure website.</li>
                </ol>
                <form className="card mt-4">
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="email-for-pass">Enter your email address</label>
                      <input className="form-control" type="text" id="email-for-pass" required /><small className="form-text text-muted">Type in the email address you used when you registered with Unishop. Then we'll email a code to this address.</small>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary" type="submit">Get New Password</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        );
    }
}