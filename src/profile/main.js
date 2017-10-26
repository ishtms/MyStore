import React, { Component } from 'react';
import ReactDOM from 'react-dom'
class Profile extends Component {
    render () {
        return (
            <div>Hello from Profile</div>
        );
    }
}
ReactDOM.render(<Profile/>, document.getElementById('profile'))