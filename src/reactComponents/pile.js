import React, { Component } from 'react';
import Card from './card';

class Pile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: this.props.cards,
			upCards: this.getUpcards(this.props.cards.splice(0, 1)),
			downCards: this.getInitialDowncards(this.props.cards)
		}
		this.colors = {
			"clubs": 'black',
			"diamonds": 'red',
			"spades": 'black',
			"hearts": 'red'
		};
		this.getUpcards = this.getUpcards.bind(this);
		this.getInitialDowncards = this.getInitialDowncards.bind(this);
		this.allowDrop = this.allowDrop.bind(this);
		this.removeCard = this.removeCard.bind(this);
		this.dragStart = this.dragStart.bind(this);
		this.drop = this.drop.bind(this);
	}

	componentDidMount() {
		this.setState(state => {
			if (state.upCards[0] !== undefined) {
				let suit = state.upCards[0].props.children.props.suit;
				let rank = state.upCards[0].props.children.props.rank;
				return { lastColor: this.colors[suit], currentRank: --rank };
			}
		})
	}

	dragStart(event) {
		event.dataTransfer.setData("text", event.target.id)
	}

	removeCard() {
		this.setState(state => {
			if (state.upCards.length === 1) {
				state.upCards.shift();
				state.upCards.push(this.getUpcards(state.cards.splice(0, 1))[0]);
				this.componentDidMount();
			} else {
				state.upCards.shift();
			}
			return { upCards: state.upCards, cards: state.cards, downCards: this.getInitialDowncards(state.cards) }
		})
	}

	getUpcards(cards) {
		let upCards = [];
		cards.forEach(element => {
			upCards.push(<div draggable='true' onDragStart={this.dragStart} >{element}</div>);
		});
		return upCards;
	}

	allowDrop(event) {
		event.preventDefault();
	}

	drop(event) {
		let card = document.getElementById(event.dataTransfer.getData("text"));
		let cardDetails = { suit: card.id.split('-')[0], rank: card.id.split('-')[1], id: card.id };
		cardDetails.color = this.colors[cardDetails.suit];
		if ((this.state.upCards[0] === undefined && cardDetails.rank === "13") || (this.state.lastColor !== cardDetails.color && cardDetails.rank === this.state.currentRank.toString())) {
			this.setState(state => {
				state.upCards.push(
					<div draggable="true" onDragStart={this.dragStart}>
						<Card src={card.src} id={card.id} className={card.className} suit={card.suit} rank={card.rank} />
					</div>
				);
				return {
					upCards: state.upCards,
					lastColor: cardDetails.color,
					currentRank: --cardDetails.rank
				};
			})
			if (card.parentNode.parentNode.className === 'foundation') {
				window[card.parentNode.parentNode.id].removeCard();
			}
			if (card.parentNode.parentNode.id === 'waste') {
				window.waste.removeCard();
			}
			if (card.parentNode.parentNode.parentNode.className === 'pile') {
				window[card.parentNode.parentNode.parentNode.id].removeCard();
			}
		}
	}

	getInitialDowncards(cards) {
		const flippedCards = [];
		for (let card = 0; card < cards.length; card++) {
			flippedCards.push(<Card src="./cardsImages/gray_back.png" className='card' key={card} />)
		}
		return flippedCards;
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