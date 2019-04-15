import React, { Component } from 'react';
import Card from './card';

class Pile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: this.props.cards,
			upCards: this.props.cards.splice(0, 1),
			downCards: this.getInitialDowncards(this.props.cards.length)
		}
		this.colors = {
			"clubs": 'black',
			"diamonds": 'red',
			"spades": 'black',
			"hearts": 'red'
		};
		this.allowedCardLocations = ['foundation', 'waste', 'pile'];
		this.getInitialDowncards = this.getInitialDowncards.bind(this);
		this.allowDrop = this.allowDrop.bind(this);
		this.removeCard = this.removeCard.bind(this);
		this.drop = this.drop.bind(this);
		this.getCardIndex = this.getCardIndex.bind(this);
		this.updateCard = this.updateCard.bind(this);
		this.isCardAddable = this.isCardAddable.bind(this);
		this.isFirstToPile = this.isFirstToPile.bind(this);
		this.isNextToPile = this.isNextToPile.bind(this);
		this.isPileEmpty = this.isPileEmpty.bind(this);
		this.addCard = this.addCard.bind(this);
		this.addCards = this.addCards.bind(this);
		this.generateCardsFrom = this.generateCardsFrom.bind(this);
	}

	componentDidMount() {
		this.setState(state => {
			if (state.upCards[0] !== undefined) {
				let suit = state.upCards[0].props.suit;
				let rank = state.upCards[0].props.rank;
				return { lastColor: this.colors[suit], currentRank: rank - 1 };
			}
		})
	}

	isPileEmpty() {
		return this.state.upCards[0] === undefined;
	}

	isFirstToPile(cardDetails) {
		return cardDetails.rank === "13";
	}

	isNextToPile(cardDetails) {
		return this.state.lastColor !== cardDetails.color && cardDetails.rank === this.state.currentRank.toString();
	}

	isCardAddable(cardDetails) {
		return (this.isPileEmpty() && this.isFirstToPile(cardDetails)) || this.isNextToPile(cardDetails);
	}

	getCardIndex(card) {
		return this.state.upCards.findIndex(upcard => {
			return upcard.props.id === card.id;
		});
	}

	getUpcardsFrom(cardPosition) {
		return this.state.upCards.slice(cardPosition);
	}

	getCardDetails(card) {
		return {
			suit: card.id.split('-')[0],
			rank: card.id.split('-')[1],
			id: card.id,
			color: this.colors[card.id.split('-')[0]]
		};
	}

	createCard(card, cardDetails) {
		return (
			<Card src={card.src} id={card.id} className={card.className} suit={cardDetails.suit} rank={cardDetails.rank} />
		)
	};

	getInitialDowncards(numberOfCards) {
		const downCards = [];
		for (let card = 0; card < numberOfCards; card++) {
			downCards.push(<Card src="./cardsImages/gray_back.png" className='card' key={card} />)
		}
		return downCards;
	}

	removeCard() {
		this.setState(state => {
			state.upCards.pop();
			if (state.upCards.length === 0) {
				state.upCards.push(state.cards.splice(0, 1)[0]);
				this.componentDidMount();
			}
			return { upCards: state.upCards, cards: state.cards, downCards: this.getInitialDowncards(state.cards.length) }
		})
	}

	removeCardsFrom(cardPosition) {
		this.setState(state => {
			state.upCards.splice(cardPosition);
			if (state.upCards.length === 0) {
				state.upCards.push(state.cards.splice(0, 1)[0]);
				this.componentDidMount();
			}
			return { upCards: state.upCards, cards: state.cards, downCards: this.getInitialDowncards(state.cards.length) }
		})
	}

	generateCardsFrom(pos, cardRef) {
		let draggedCards = cardRef.getUpcardsFrom(pos);
		let cardsToDrop = [];
		for (let index = 0; index < draggedCards.length; index++) {
			let card = document.getElementById(draggedCards[index].props.id);
			let cardDetails = this.getCardDetails(card);
			cardsToDrop.push(this.createCard(card, cardDetails));
		}
		return cardsToDrop;
	}

	addCard(card) {
		this.setState(state => {
			state.upCards.push(card);
			return {
				upCards: state.upCards,
				lastColor: this.colors[card.props.suit],
				currentRank: card.props.rank - 1
			};
		})
	}

	addCards(cards) {
		this.setState(state => {
			cards.forEach(card => state.upCards.push(card));
			let lastAddedCard = cards[cards.length - 1];
			return {
				upCards: state.upCards,
				lastColor: this.colors[lastAddedCard.props.suit],
				currentRank: lastAddedCard.props.rank - 1
			}
		})
	}

	updateCard(card) {
		let cardDetails = this.getCardDetails(card);
		let cardLocation = card.parentNode.className;
		if (this.isCardAddable(cardDetails)) {
			this.addCard(this.createCard(card, cardDetails));
			if (this.allowedCardLocations.includes(cardLocation)) {
				window[card.parentNode.id].removeCard();
			}
		}
	}

	allowDrop(event) {
		event.preventDefault();
	}

	drop(event) {
		let card = document.getElementById(event.dataTransfer.getData("text"));
		if (card === null) {
			return;
		}
		let cardLocation = card.parentNode.parentNode;
		let cardRef = window[cardLocation.id];
		let cardDetails = this.getCardDetails(card);
		if (cardLocation.className === 'pile' && this.isCardAddable(cardDetails)) {
			let pos = cardRef.getCardIndex(card);
			let cardsToDrop = this.generateCardsFrom(pos, cardRef);
			this.addCards(cardsToDrop);
			cardRef.removeCardsFrom(pos);
		} else {
			this.updateCard(card);
		}
	}

	render() {
		return (
			<div className={this.props.className} id={this.props.id} ref={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop}>
				{this.state.downCards}
				<div>
					{this.state.upCards}
				</div>
			</div>
		)
	}
}

export default Pile;