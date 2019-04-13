import React, { Component } from 'react';
import Card from './card';

class Foundation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: []
		}
		this.allowDrop = this.allowDrop.bind(this);
		this.drop = this.drop.bind(this);
		this.isFoundationEmpty = this.isFoundationEmpty.bind(this);
		this.isNextCard = this.isNextCard.bind(this);
		this.dragStart = this.dragStart.bind(this);
		this.removeCard = this.removeCard.bind(this);
		this.isCardAddable = this.isCardAddable.bind(this);
	}


	dragStart(event) {
		event.dataTransfer.setData("text", event.target.id)
	}

	isFoundationEmpty() {
		return this.state.cards.length === 0;
	}

	isNextCard(cardDetails) {
		return cardDetails.suit === this.state.suit && cardDetails.rank === this.state.nextRank.toString();
	}

	isCardAddable(cardDetails) {
		return (this.isFoundationEmpty() && cardDetails.rank === "1") || this.isNextCard(cardDetails);
	}

	createCard(card, cardDetails) {
		return (
			<Card src={card.src} id={card.id} className={card.className} suit={cardDetails.suit} rank={cardDetails.rank} />
		)
	}

	removeCard() {
		this.setState(state => {
			state.cards.shift();
			return { cards: state.cards }
		})
	}

	addCard(card, cardDetails) {
		this.setState(state => {
			state.cards.unshift(this.createCard(card, cardDetails));
			return {
				cards: state.cards,
				suit: cardDetails.suit,
				nextRank: ++cardDetails.rank
			};
		})
	}

	allowDrop(event) {
		event.preventDefault();
	}

	drop(event) {
		let card = document.getElementById(event.dataTransfer.getData("text"));
		if (card === null) {
			return;
		}
		let cardDetails = { suit: card.id.split('-')[0], rank: card.id.split('-')[1] };
		if (this.isCardAddable(cardDetails)) {
			this.addCard(card, cardDetails);
			if (card.parentNode.id === 'waste') {
				window.waste.removeCard();
			}
			if (card.parentNode.parentNode.className === 'pile') {
				window[card.parentNode.parentNode.id].removeCard();
			}
		}
	}

	render() {
		return (
			<div className={this.props.className} id={this.props.id} onDragOver={this.allowDrop} onDrop={this.drop} ref={this.props.id}>
				{this.state.cards[0]}
			</div>
		);
	}
}

class Foundations extends Component {
	render() {
		return (
			<div className='foundations'>
				<Foundation className='foundation' id="foundation1" ref={(foundation1) => window.foundation1 = foundation1} />
				<Foundation className='foundation' id="foundation2" ref={(foundation2) => window.foundation2 = foundation2} />
				<Foundation className='foundation' id="foundation3" ref={(foundation3) => window.foundation3 = foundation3} />
				<Foundation className='foundation' id="foundation4" ref={(foundation4) => window.foundation4 = foundation4} />
			</div>
		);
	}
}

export default Foundations;