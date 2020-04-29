import React, { Component } from 'react';

class SaveClip extends Component {

    constructor() {
        super()
        this.state = {
            curUser: '',
        }
    }

    render() {
        return (
            <div className="SaveClip-Main">
                <header>
                    <p>SaveClip Component</p>
                </header>
            </div>
        )
    }
}

export default SaveClip    