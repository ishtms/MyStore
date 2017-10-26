import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../navigation/main';
import {Switch, HashRouter,Route, Redirect} from 'react-router-dom';
import Footer from '../navigation/footer';
import Featured from './featured';
import SearchResults from './search-results';
import ShopCategories from './shop-categories';
import ShopGrid from './shop-grid';
import ShopSingle from './shop-single';
import Error from '../error'
import Showcase from './showcase'
 class Shopping extends Component {
    render () {
        return (
            <div>
                <Navigation  />
                <div style={{marginTop: "30px"}}>
                    <Switch>    
                        <Route exact path="/" component={ShopGrid}/>
                        <Route exact path="/featured" component={Featured}/>
                        <Route exact path="/search-results" component={SearchResults}/>
                        <Route exact path="/shop-categories" component={ShopCategories}/>
                        <Route exact path="/shop-grid" component={ShopGrid}/>
                        <Route exact path="/shop-single" component={ShopSingle}/>
                        <Route exact path="/showcase" component={Showcase}/>
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
ReactDOM.render(<HashRouter><Shopping/></HashRouter>, document.getElementById('shopping'))