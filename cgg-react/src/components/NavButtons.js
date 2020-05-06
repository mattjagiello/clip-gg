import React, { Component } from 'react';

class NavButtons extends Component {

    constructor(props) {
        super(props)
        this.state = {
            curUser: '',
        }
    }

    render() {
        return (
            <div className="navbuttons">
                <p><input type="button" onClick={this.props.prevClip} />
                    <input type="button" onClick={this.props.nextClip} /></p>
            </div>
        )
    }
}

export default NavButtons;    