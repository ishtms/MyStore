import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';

import Navigation from '../navigation/main';
import Footer from '../navigation/footer'
import About from './about';
import Blog from './blog';
import Contacts from './contacts';
import Faq from './faq';
import Error from '../error';

 class Company extends Component {
    componentDidMount(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;        
    }
    render () {
        return (
            <div>
                <Navigation  />
                <div style={{marginTop: "30px"}}>
                <Switch>    
                    <Route exact path="/" component={About}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/blog" component={Blog}/>
                    <Route exact path="/contacts" component={Contacts}/>
                    <Route exact path="/faq" component={Faq}/>
                    <Route exact path="/error" component={Error} />
                    <Redirect to="/error"/>
                </Switch>
                </div>
                <Footer />
                <a className="scroll-to-top-btn" href="#"><i className="icon-arrow-up" /></a>
                {/* Backdrop*/}
                <div className="site-backdrop" />
            </div>
        );
    }
}
ReactDOM.render(<HashRouter><Company/></HashRouter>, document.getElementById('company'))