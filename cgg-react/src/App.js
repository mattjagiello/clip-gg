import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import ClipContainer from './components/ClipContainer.js';
// import Clip from './components/Clip.js';
import SaveClip from './components/SaveClip.js';
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
    render() {

        return (
            <div className="App">
                <NavBar />
                <ClipContainer />
                {/* <Clip /> */}
                <SaveClip />
                <CommentContainer />
                <Comment />
                <UserContainer />
                <User />
            </div>
        );
    }
}

export default App;
