import React, { Component } from 'react';
import Comment from './Comment.js';

class CommentContainer extends Component {

    constructor() {
        super()
        this.state = {
            curUser: '',
            comments: ['No comment data found','No comment data found','No comment data found']
        }
    }

    render() {
        return (
            <div className="CommentContainer-Main">
                <header>
                <Comment 
                comments = {this.state.comments}
                counter={this.props.counter}
                />
                </header>
            </div>
        )
    }
}

export default CommentContainer  