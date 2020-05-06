import React, { Component } from 'react';

class UserContainer extends Component {

    constructor() {
        super()
        this.state = {
            curUser: '',
        }
    }

    render() {
        return (
            <div className="UserContainer-Main">
                <header>
                    {/* <p>UserContainer Component</p> */}
                </header>
            </div>
        )
    }
}

export default UserContainer    