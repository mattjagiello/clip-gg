import React, { Component } from 'react';

class NavBar extends Component {

    constructor() {
        super()
        this.state = {
            curUser: '',
        }
    }

    render() {
        return (
            <div className="NavBar-Main">
                <header>
                    <p>NavBar Component</p>
                    <div className="nav-bar">
                        <div id="header">Clip GG App</div>
                        <a href='/signup'>Signup</a>
                        <a href= '/login'>Login</a>
                    </div>
                </header>
            </div>
        )
    }
}

export default NavBar    