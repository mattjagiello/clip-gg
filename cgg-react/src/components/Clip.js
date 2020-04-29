import React, { Component } from 'react';

class Clip extends Component {

    constructor() {
        super()
        this.state = {
            curUser: '',
        }
    }

    render() {
        return (
            <div className="Clip-Main">
                <header>
                    <p>Clip Component</p>
                </header>
            </div>
        )
    }
}

export default Clip;    