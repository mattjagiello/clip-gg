import React, { Component } from 'react';
import '../Comment.css';

class Comment extends Component {
	constructor() {
		super();
		this.state = {
			curUser: ''
		};
	}

	render() {
		return (
			<div className="Comment-Main">
				<ol>
					<li>{this.props.comments ? this.props.comments[this.props.counter] : null}</li>
					<li>{this.props.comments ? this.props.comments[this.props.counter] : null}</li>
					<li>{this.props.comments ? this.props.comments[this.props.counter] : null}</li>
				</ol>
			</div>
		);
	}
}

export default Comment;
