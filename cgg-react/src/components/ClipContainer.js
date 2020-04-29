import React, { Component } from 'react';

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
                </header>
            </div>
        )
    }
}

export default ClipContainer    