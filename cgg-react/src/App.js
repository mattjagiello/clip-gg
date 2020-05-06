import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import ClipContainer from './components/ClipContainer.js';
// import Clip from './components/Clip.js';
// import SaveClip from './components/SaveClip.js';
import Account from './components/Account.js';
import CommentContainer from './components/CommentContainer.js';
import Comment from './components/Comment.js';
import UserContainer from './components/UserContainer.js';
import User from './components/User.js';

class App extends Component {

    constructor() {
        super()
        this.state = {
            curUser: '',
        }
    }

    loginAction = () => {
        this.setState({
            curUser: 'user'
        })
    }

    render() {

        return (
            <div className="App">
                <NavBar curUser = {this.state.curUser} login={this.loginAction} />
                {this.state.curUser ? null : <Account login={this.loginAction} />}
                {this.state.curUser ? <ClipContainer /> : null}
                {/* <Clip /> */}
                {this.state.curUser ? <CommentContainer />: null}
                {this.state.curUser ? <Comment />: null}
                {this.state.curUser ? <UserContainer />: null}
                {this.state.curUser ? <User />: null}
            </div>
        );
    }
}

export default App;
