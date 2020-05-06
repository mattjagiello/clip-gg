import React, { Component } from 'react';
import { TwitchClip } from 'react-twitch-embed'
import SaveClip from './SaveClip.js';

class Clip extends Component {

    constructor(props) {
        super(props)
        this.state = {
            curUser: '',
            currentClip: props.currentClip
        }
    }



render() {
    console.log("Slug:", this.props.slug)
    return (
        <div className="Clip-Main">
            <header>
                <div id="twitch-embed">
                    <script src="https://embed.twitch.tv/embed/v1.js"></script>
                    {this.props.slug ? <TwitchClip clip={this.props.slug} /> : null}
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
            < SaveClip currentClip={this.state.currentClip} clips={this.props.clips} />
        </div >
    )
}
}

export default Clip;    

