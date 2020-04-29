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
                </header>
            </div>
        )
    }
}

export default NavBar    