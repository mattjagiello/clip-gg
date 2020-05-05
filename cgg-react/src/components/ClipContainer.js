import React, { Component } from 'react';
import Clip from './Clip.js';
// import ClipTest from './ClipTest.js';

class ClipContainer extends Component {

    constructor() {
        super()
        this.state = {
            curUser: '',
            clips: [],
            currentClip: [],
            counter: 1,
            slug: ''
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
        let post_url = this.state.currentClip.post_url
        console.log(post_url.slice(24, -1))
        // let slug = this.state.currentClip.post_url.slice(0, 14)
        this.setState((prevState, props) => ({
            counter: prevState.counter - 1,
            currentClip: this.state.clips[this.state.counter],
            slug: post_url.split('/').pop()
        }));
        console.log(this.state.slug)
    }

    nextClip = (e) => {
        let post_url = this.state.currentClip.post_url
        this.setState((prevState, props) => ({
            counter: prevState.counter + 1,
            currentClip: this.state.clips[this.state.counter],
            slug: post_url.split('/').pop()
        }));
        // this.fetchClip();
    }

    render() {
        return (
            <div className="ClipContainer-Main">
                <header>
                    <p>ClipContainer Component</p>
                    < Clip
                        clipArray={this.state.clips}
                        currentClip={this.state.currentClip}
                        slug={this.state.slug}
                    />
                    {/* < ClipTest /> */}
                    <p>{ this.state.counter ? <input type="button" onClick={this.prevClip} /> : null }
                       <input type="button" onClick={this.nextClip} /></p>
                </header>
            </div>
        )
    }
}



export default ClipContainer    