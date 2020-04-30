import React, { Component } from 'react';
import Clip from './Clip.js';

class ClipContainer extends Component {

    constructor() {
        super()
        this.state = {
            curUser: '',
        }
    }

    fetchClips = () => {
        console.log('fetch');
        
        fetch('http://localhost:3000/posts', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
        })
          .then(res => res.json())
          .then(json => console.log(json)
          )
      } 

    render() {
        this.fetchClips()
        return (
            <div className="ClipContainer-Main">
                <header>
                    <p>ClipContainer Component</p>
                    <p><a href = "/test" >Previous Clip</a></p>
                    < Clip />
                    <p><a href = "/test" >Next Clip</a></p>
                </header>
            </div>
        )
    }
}

export default ClipContainer    