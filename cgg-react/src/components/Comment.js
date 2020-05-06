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
                <ul>
                    <li>
                        {this.props.comments ? this.props.comments[this.props.counter] : null }
                    </li>
                    <li>
                        {this.props.comments ? this.props.comments[this.props.counter]  : null }
                    </li>
                    <li>
                        {this.props.comments ? this.props.comments[this.props.counter]  : null }
                    </li>
                </ul>
            </div>
        )
    }
}

export default Comment    