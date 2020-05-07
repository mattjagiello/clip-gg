import React, { Component } from 'react';
import { TwitchClip } from 'react-twitch-embed'
import ChangeClip from './ChangeClip.js';

class Clip extends Component {

    constructor(props) {
        super(props)
        this.state = {
            curUser: '',
            currentClip: props.currentClip,
            default: 'HilariousFairGoblinImGlitch'
        }
    }

    handleSelectionChange = (e) => {
        let clipObj = undefined;
        console.log(e.target.value);
        this.props.clips.forEach(element => {
            if (element.post_name === e.target.value) {
                clipObj = element
            }
        });
        this.setState({
            currentClip: clipObj,
        })
    }


    render() {
        console.log("Slug:", this.props.slug)
        return (
            <div className="Clip-Main">
                <header>
                    <div id="twitch-embed">
                        <script src="https://embed.twitch.tv/embed/v1.js"></script>
                        {this.props.slug ? <TwitchClip clip={this.props.slug} /> : <TwitchClip clip={this.state.default}/> }
                        {/* <iframe
                            // src={"https://clips.twitch.tv/embed?clip=" + this.props.slug + "&parent=clipgg.heroku.com"}
                            src={"https://clips.twitch.tv/embed?clip=" + this.props.slug + "&parent=streamernews.example.com&parent=embed.example.com"}
                            // TODO - Accept props of url for clip
                            // frameborder="0"
                            // allowfullscreen="true"
                            height="378"
                            width="620"
                            title={this.props.currentClip.post_name}
                            preload="auto"
                            parent="http://localhost/"
                        >
                        </iframe> */}
                    </div>
                </header >
                < ChangeClip
                    currentClip={this.state.currentClip}
                    clips={this.props.clips}
                    handleSelectionChange={this.handleSelectionChange}
                />
            </div >
        )
    }
}

export default Clip;

