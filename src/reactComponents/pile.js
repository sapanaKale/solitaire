import React, { Component } from 'react';
import Card from './card'

class Pile extends Component {
	constructor(props){
		super(props);
		this.state = {
			cards: this.props.cards
		}
		this.generatePile = this.generatePile.bind(this);
	}
	generatePile(cards){
		const flippedCards = [];
		for (let card=1; card<cards.length; card++){
			flippedCards.push(<Card src="./cardsImages/gray_back.png" className='card' />)
		}
		return (
			<div>
				{flippedCards}
				{cards[0]}
			</div>
		)
	}
	render(){
		return(
			<div className={this.props.className} id={this.props.id}>
			{this.generatePile(this.props.cards)}
			</div>
		)
	}
}

export default Pile;