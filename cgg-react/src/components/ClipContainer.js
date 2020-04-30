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
                    <p>ClipContainer Component
                    <p><a href = "" target="_" >Previous Clip</a></p>
                    < Clip />
                    <p><a href = "" target="_" >Next Clip</a></p>
                    </p>
                </header>
            </div>
        )
    }
}

export default ClipContainer    