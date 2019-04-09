import React, { Component } from 'react';

class Card extends Component {
	constructor(props) {
		super(props);
		this.id = this.props.id;
	}

	render() {
		let source = this.props.src;
		return (
			<img src={source} alt="cardImg" className={this.props.className} id={this.props.id} suit={this.props.suit} rank={this.props.rank} />
		)
	}
}

export default Card;