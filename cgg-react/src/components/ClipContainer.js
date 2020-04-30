import React, { Component } from 'react';
import Clip from './Clip.js';

class ClipContainer extends Component {

    constructor() {
        super()
        this.state = {
            curUser: '',
        }
    }

    render() {
        return (
            <div className="ClipContainer-Main">
                <header>
                    <p>ClipContainer Component</p>
                    < Clip />
                </header>
            </div>
        )
    }
}

export default ClipContainer    