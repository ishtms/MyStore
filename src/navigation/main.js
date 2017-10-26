import React, { Component } from 'react';
import MobileMenu from './mobile-menu'
import DrawerLayout from './drawer-layout';
import TopBar from './topbar';
import SearchBox from './search-box';
import NavigationBar from './navigation-bar';
import AccountInfo from './account-info';
export default class Navigation extends Component {
    render () {
        return (
            <div>
                <DrawerLayout />
                {/* Off-Canvas Mobile Menu*/}
                <MobileMenu />
                {/* Topbar*/}
                <TopBar />
                {/* Navbar*/}
                {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
                <header className="navbar navbar-sticky">
                    {/* Search*/}
                    <SearchBox/>
                    <div className="site-branding">
                        <div className="inner">
                            {/* Off-Canvas Toggle (#shop-categories)*/}<a className="offcanvas-toggle cats-toggle" href="#shop-categories" data-toggle="offcanvas" />
                            {/* Off-Canvas Toggle (#mobile-menu)*/}<a className="offcanvas-toggle menu-toggle" href="#mobile-menu" data-toggle="offcanvas" />
                            {/* Site Logo*/}<a className="site-logo" href="index-2.html"><img src="img/logo/logo.png" alt="Unishop" /></a>
                        </div>
                    </div>
                    {/* Main Navigation*/}
                   <NavigationBar />
                    {/* Toolbar*/}
                    <AccountInfo />
                </header>
            </div>
        );
    }
}