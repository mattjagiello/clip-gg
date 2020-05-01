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

    // TODO Lifecycle method of wrapping in ComponentDidMount didn't load props
    // clipSlug = () => {
    //     let slug = this.state.currentClip.post_url.slice(0, 14)
    //     console.log(slug);
    // }

    prevClip = (e) => {
        e.preventDefault();
        let post_url = this.state.currentClip.post_url
        console.log(post_url)
        // let slug = this.state.currentClip.post_url.slice(0, 14)
        this.setState((prevState, props) => ({
            counter: prevState.counter - 1,
            currentClip: this.state.clips[19]
            // TODO Fix setting current clip to state of counter
        }));
    }

    nextClip = (e) => {
        this.setState((prevState, props) => ({
            counter: prevState.counter + 1,
            currentClip: this.state.clips[19]
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