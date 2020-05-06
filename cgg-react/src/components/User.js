import React, { Component } from 'react';

class User extends Component {

    constructor() {
        super()
        this.state = {
            curUser: '',
        }
    }

    render() {
        return (
            <div className="User-Main">
                <header>
                    {/* <p>User Component</p> */}
                </header>
            </div>
            
        )
    }
}

export default User    