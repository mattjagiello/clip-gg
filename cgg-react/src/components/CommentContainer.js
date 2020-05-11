import React, { Component } from 'react';
import Comment from './Comment.js';

class CommentContainer extends Component {
	constructor() {
		super();
		this.state = {
			curUser: '',
			comments: [
				'Single mother flees from violently autistic son.',
				'Clearly Mizkif abuses her and she has PTSD and his actions triggered her reaction',
				"I am Mizkif's ex-GF. I can confirm he used to abuse me daily, it was his version of 'quality time'. I am still doing my best at recovering from this dreadful period of my life. But to be fair, he had a pretty good reason to get upset here."
			]
		};
	}

	render() {
		return (
			<div className="CommentContainer-Main">
				<header>
					<Comment comments={this.state.comments} counter={this.props.counter + 1} />
				</header>
			</div>
		);
	}
}

export default CommentContainer;
