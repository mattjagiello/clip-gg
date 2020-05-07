import React, { Component } from 'react';
import '../NavBar.css';

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
                        <div id="nav-header" className="nav-header">Clip.GG</div>
                        {this.props.curUser ? <input type="button" className="logout-btn" onClick={this.props.logout} value="Logout" /> : null}
                    </div>
                </header>
            </div>
        )
    }
}

export default NavBar    