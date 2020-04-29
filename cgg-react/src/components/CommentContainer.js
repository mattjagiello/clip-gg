import React, { Component } from 'react';

class CommentContainer extends Component {

    constructor() {
        super()
        this.state = {
            curUser: '',
        }
    }

    render() {
        return (
            <div className="CommentContainer-Main">
                <header>
                    <p>CommentContainer Component</p>
                </header>
            </div>
        )
    }
}

export default CommentContainer  