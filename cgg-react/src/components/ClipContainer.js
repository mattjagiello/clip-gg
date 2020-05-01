import React, { Component } from 'react';
import Clip from './Clip.js';

class ClipContainer extends Component {

    constructor() {
        super()
        this.state = {
            curUser: '',
            clips: [],
            currentClip: [],
            counter: 1
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/posts', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
        })
            .then(res => res.json())
            .then(json => this.setState({
                clips: json,
                currentClip: json[1],
            })
            )
    }

    prevClip = (e) => {
        e.preventDefault();
        this.setState((prevState, props) => ({
            counter: prevState.counter - 1,
            currentClip: this.state.clips[24]
            // TODO Fix setting current clip to state of counter
          }));          
    }

    nextClip = (e) => {
        e.preventDefault();
        this.setState((prevState, props) => ({
            counter: prevState.counter + 1,
            currentClip: this.state.clips[24]
          // TODO Fix setting current clip to state of counter
          }));          
    }

    render() {
        return (
            <div className="ClipContainer-Main">
                <header>
                    <p>ClipContainer Component</p>
                    <p><input type="button" onClick={this.prevClip} /></p>
                    < Clip clipArray={this.state.clips} currentClip={this.state.currentClip} />
                    <p><input type="button" onClick={this.nextClip} /></p>
                </header>
            </div>
        )
    }
}

export default ClipContainer    