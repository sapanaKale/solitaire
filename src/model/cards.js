import cards from '../data/cards.js'
import ld from 'lodash';

const cardsDeck = ld.shuffle(cards.slice(0));

class Cards {
	constructor(){
		this.tableuCards = cardsDeck.slice(0,28);
		this.stockCards = cardsDeck.slice(28);
	}
	getStockCards(){
		return this.stockCards;
	}
	getTableauCards(){
		return this.tableuCards;
	}
}

export default new Cards();