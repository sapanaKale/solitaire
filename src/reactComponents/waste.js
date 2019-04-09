import React, { Component } from 'react';

class Waste extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: this.props.cards
		}
		this.dragStart = this.dragStart.bind(this);
		this.removeCard = this.removeCard.bind(this);
	}

	drawCard() {
		this.state.wasteCards.unshift(this.state.stockCards.pop());
		this.setState({ stockCards: this.state.stockCards, wasteCards: this.state.wasteCards })
	}

	dragStart(event) {
		event.dataTransfer.setData("text", event.target.id)
	}

	removeCard() {
			this.setState(state => {
				state.cards.shift();
				return { cards: state.cards }
			})
	}

	render() {
		return (
			<div id={this.props.id} className={this.props.className} ref="waste">
				<div draggable='true' onDragStart={this.dragStart}>
					{this.state.cards[0]}
				</div>
			</div>
		)
	}
}

export default Waste;