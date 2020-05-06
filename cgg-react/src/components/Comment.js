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
                            Comment 1 - Placeholder
                        </li>
                        <li>
                            Comment 2 - Placeholder
                        </li>
                        <li>
                            Comment 3 - Placeholder
                        </li>
                    </ul>
            </div>
        )
    }
}

export default Comment    