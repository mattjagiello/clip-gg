import React, { Component } from 'react';
import '../NavButtons.css';

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
                <p>
                    <input className="example_c" type="button" onClick={this.props.prevClip} value="Previous Clip" />
                    <input className="example_c" type="button" onClick={this.props.nextClip} value="Next Clip" />
                </p>
            </div>
        )
    }
}

export default NavButtons;    