import React, { Component } from 'react';
import Pile from './pile';
import cards from '../model/cards'

class Tableau extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: cards.getTableauCards()
		}
	}
	render() {
		return (
			<div className={this.props.className} id={this.props.id}>
				<Pile className='pile' id='pile1' cards={this.state.cards.slice(0,1)}/>
				<Pile className='pile' id='pile2' cards={this.state.cards.slice(1,3)}/>
				<Pile className='pile' id='pile3' cards={this.state.cards.slice(3,6)}/>
				<Pile className='pile' id='pile4' cards={this.state.cards.slice(6,10)}/>
				<Pile className='pile' id='pile5' cards={this.state.cards.slice(10,15)}/>
				<Pile className='pile' id='pile6' cards={this.state.cards.slice(15,21)}/>
				<Pile className='pile' id='pile7' cards={this.state.cards.slice(21)}/>
			</div>
		)
	}
}

export default Tableau;