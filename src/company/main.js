import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Switch,Link, HashRouter, Route} from 'react-router-dom';
class First extends Component{
    render(){
        return (<div>First one</div>)
    }
}
class Second extends Component{
    render(){
        return (<div>Second One</div>)
    }
}

 class Company extends Component {
    render () {
        return (
            <div>
            <a href="/company#/builder/something">a href</a>
            <Switch>
            <Route exact path='/' component={ First } />
            <Route exact path='/builder/something' component={ Second } />
          </Switch>
          <Link to="/builder">Builder</Link>
          </div>
        );
    }
}
ReactDOM.render(<HashRouter><Company/></HashRouter>, document.getElementById('company'))