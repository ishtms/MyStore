import React, { Component } from 'react';
import ReactDOM from 'react-dom'
 class Company extends Component {
    render () {
        return (
            <div>Hello from company</div>
        );
    }
}
ReactDOM.render(<Company/>, document.getElementById('company'))