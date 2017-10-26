import React, { Component } from 'react';
import ReactDOM from 'react-dom'
 class Payment extends Component {
    render () {
        return (
            <div>Hello from Payment</div>
        );
    }
}
ReactDOM.render(<Payment/>, document.getElementById('payment'))