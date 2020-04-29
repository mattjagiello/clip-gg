import React, { Component } from 'react';

class Comment extends Component {

    constructor() {
        super()
        this.state = {
            curUser: '',
        }
    }

    render() {
        return (
            <div className="Comment-Main">
                <header>
                    <p>Comment Component</p>
                </header>
            </div>
        )
    }
}

export default Comment    