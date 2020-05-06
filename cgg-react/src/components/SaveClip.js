import React, { Component } from 'react';

class SaveClip extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    makeSelectionList = () => {
        return this.props.clips.map((item, idx) => <option key={idx} value={item.post_name} >{item.post_name}</option>)
    }

    handleSelectionChange = (e) => {
        console.log(e.target.value);
        this.setState({
            currentClip: e.target.value,
        })
    }

    render() {
        return (
            <div className="SaveClip-Main">
                <header>
                    <p>SaveClip Component</p>
                </header>
                <div id="timeline-selector">
                    <select onChange={this.handleSelectionChange}>
                        <option value='' >Select a Clip</option>
                        {this.makeSelectionList()}
                    </select>
                </div>
            </div>
        )
    }
}

export default SaveClip    