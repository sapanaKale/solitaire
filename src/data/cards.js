import React from 'react';
import Card from '../reactComponents/card';
import cardsData from '../data/cards.json'

const generateCards = function (cardsData) {
	const cards = [];
	cardsData.forEach(cardData => {
		cards.push(<Card src={cardData.src} className='card' suit={cardData.suit} rank={cardData.rank} id={cardData.suit + '-' + cardData.rank} />);
	})
	return cards;
}

const cards = generateCards(cardsData);

export default cards;