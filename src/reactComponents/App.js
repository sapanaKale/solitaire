import React, { Component } from 'react';
import '../styelSheets/App.css';
import Stock from './stock';
import Waste from './waste';
import Foundations from './foundations';
import Tableau from './tableau';
import cards from '../model/cards.js'

const stockCards = cards.getStockCards();

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stockCards: stockCards,
			wasteCards: [],
		}
		this.drawCard = this.drawCard.bind(this);
	}

	drawCard() {
		this.state.wasteCards.unshift(this.state.stockCards.pop());
		this.setState({
			stockCards: this.state.stockCards, wasteCards: this.state.wasteCards 
		})
	}

	render() {
		return (
			<main>
				<div className='upperPart'>
					<div className='stock-waste'>
						<Stock className='stock' id='stock' cards={this.state.cards} onClick={this.drawCard} />
						<Waste className='waste' id='waste' cards={this.state.wasteCards} ref={(waste) => window.waste = waste }/>
					</div>
					<Foundations className='foundations' id='foundations'/>
				</div>
				<Tableau className='tableau' id='tableau' />
			</main>
		);
	}
}

export default App;