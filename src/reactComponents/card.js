import React, { Component } from 'react';

class Card extends Component {
	constructor(props) {
		super(props);
		this.id = this.props.id;
		this.dragStart = this.dragStart.bind(this);
	}

	dragStart(event) {
		event.dataTransfer.setData("text", event.target.id);
	}

	render() {
		let source = this.props.src;
		return (
			<img src={source} alt="cardImg" className={this.props.className} id={this.props.id} suit={this.props.suit} rank={this.props.rank} draggable='true' onDragStart={this.dragStart}/>
		)
	}
}

export default Card;