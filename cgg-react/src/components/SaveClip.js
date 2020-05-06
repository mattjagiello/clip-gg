import React, { Component } from 'react';

class SaveClip extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    makeSelectionList = () => {
        return this.props.clips.map((item, idx) => <option key={idx} value={item.value} >{item.post_name}</option>)
    }

    render() {
        return (
            <div className="SaveClip-Main">
                <header>
                    <p>SaveClip Component</p>
                </header>
                <div id="clip-selector">
                    <select onChange={this.props.handleSelectionChange}>
                        <option value='' >Select a Clip</option>
                        {this.makeSelectionList()}
                    </select>
                </div>
            </div>
        )
    }
}

export default SaveClip    