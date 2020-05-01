import React, { Component } from 'react';

class Clip extends Component {

    constructor(props) {
        super(props)
        this.state = {
            curUser: '',
            currentClip: props.currentClip
        }
    }

    render() {
        return (
            <div className="Clip-Main">
                <header>
                    <p><iframe 
                        src={"https://clips.twitch.tv/embed?clip="+ this.props.slug}
                        
                        // TODO - Accept props of url for clip
                        // frameborder="0"
                        // allowfullscreen="true"
                        height="378"
                        width="620"
                        title={this.props.currentClip.post_name}
                        >
                            </iframe></p>
                </header>
            </div>
        )
    }
}

export default Clip;    