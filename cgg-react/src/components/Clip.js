import React, { Component } from 'react';

class Clip extends Component {

    constructor() {
        super()
        this.state = {
            curUser: '',
        }
    }

    render() {
        return (
            <div className="Clip-Main">
                <header>
                    <p><iframe 
                        src="https://clips.twitch.tv/embed?clip=GeniusAbstruseHawkAMPEnergy"
                        // TODO - Accept props of url for clip
                        frameborder="0"
                        allowfullscreen="true"
                        height="378"
                        width="620"
                        title="test"
                        // TODO - Add unique title for each clip
                        >
                            </iframe></p>
                </header>
            </div>
        )
    }
}

export default Clip;    