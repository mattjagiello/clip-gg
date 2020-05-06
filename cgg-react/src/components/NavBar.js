import React, { Component } from 'react';

class NavBar extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <div className="NavBar-Main">
                <header>
                    <div className="nav-bar">
                        <div id="header">Clip GG</div>
                        {this.props.curUser ? <input type="button" onClick={this.props.logout} /> : null}
                    </div>
                </header>
            </div>
        )
    }
}

export default NavBar    