import React, { Component } from 'react';

export default class SearchBox extends Component {
    render () {
        return (
            <div>
                <form className="site-search" method="get">
                    <input type="text" name="site_search" placeholder="Type to search..." />
                    <div className="search-tools"><span className="clear-search">Clear</span><span className="close-search"><i className="icon-cross" /></span></div>
                    </form>
            </div>
        );
    }
}