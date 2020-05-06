import React, { Component } from 'react';
import Comment from './Comment.js';

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
                <Comment />
                </header>
            </div>
        )
    }
}

export default CommentContainer  