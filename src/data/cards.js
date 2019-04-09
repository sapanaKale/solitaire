import React from 'react';
import Card from '../reactComponents/card';

const cards = [
	<Card src="./cardsImages/AC.png" suit='clubs' rank='1' className='card' id='clubs-1' type="upcard" draggable={true} />,
	<Card src="./cardsImages/2C.png" suit='clubs' rank='2' className='card' id='clubs-2' type="upcard" draggable={true} />,
	<Card src="./cardsImages/3C.png" suit='clubs' rank='3' className='card' id='clubs-3' type="upcard" draggable={true} />,
	<Card src="./cardsImages/4C.png" suit='clubs' rank='4' className='card' id='clubs-4' type="upcard" draggable={true} />,
	<Card src="./cardsImages/5C.png" suit='clubs' rank='5' className='card' id='clubs-5' type="upcard" draggable={true} />,
	<Card src="./cardsImages/6C.png" suit='clubs' rank='6' className='card' id='clubs-6' type="upcard" draggable={true} />,
	<Card src="./cardsImages/7C.png" suit='clubs' rank='7' className='card' id='clubs-7' type="upcard" draggable={true} />,
	<Card src="./cardsImages/8C.png" suit='clubs' rank='8' className='card' id='clubs-8' type="upcard" draggable={true} />,
	<Card src="./cardsImages/9C.png" suit='clubs' rank='9' className='card' id='clubs-9' type="upcard" draggable={true} />,
	<Card src="./cardsImages/10C.png" suit='clubs' rank='10' className='card' id='clubs-10' type="upcard" draggable={true} />,
	<Card src="./cardsImages/JC.png" suit='clubs' rank='11' className='card' id='clubs-11' type="upcard" draggable={true} />,
	<Card src="./cardsImages/QC.png" suit='clubs' rank='12' className='card' id='clubs-12' type="upcard" draggable={true} />,
	<Card src="./cardsImages/KC.png" suit='clubs' rank='13' className='card' id='clubs-13' type="upcard" draggable={true} />,
	<Card src="./cardsImages/AD.png" suit='diamonds' rank='1' className='card' id='diamonds-1' type="upcard" draggable={true} />,
	<Card src="./cardsImages/2D.png" suit='diamonds' rank='2' className='card' id='diamonds-2' type="upcard" draggable={true} />,
	<Card src="./cardsImages/3D.png" suit='diamonds' rank='3' className='card' id='diamonds-3' type="upcard" draggable={true} />,
	<Card src="./cardsImages/4D.png" suit='diamonds' rank='4' className='card' id='diamonds-4' type="upcard" draggable={true} />,
	<Card src="./cardsImages/5D.png" suit='diamonds' rank='5' className='card' id='diamonds-5' type="upcard" draggable={true} />,
	<Card src="./cardsImages/6D.png" suit='diamonds' rank='6' className='card' id='diamonds-6' type="upcard" draggable={true} />,
	<Card src="./cardsImages/7D.png" suit='diamonds' rank='7' className='card' id='diamonds-7' type="upcard" draggable={true} />,
	<Card src="./cardsImages/8D.png" suit='diamonds' rank='8' className='card' id='diamonds-8' type="upcard" draggable={true} />,
	<Card src="./cardsImages/9D.png" suit='diamonds' rank='9' className='card' id='diamonds-9' type="upcard" draggable={true} />,
	<Card src="./cardsImages/10D.png" suit='diamonds' rank='10' className='card' id='diamonds-10' type="upcard" draggable={true} />,
	<Card src="./cardsImages/JD.png" suit='diamonds' rank='11' className='card' id='diamonds-11' type="upcard" draggable={true} />,
	<Card src="./cardsImages/QD.png" suit='diamonds' rank='12' className='card' id='diamonds-12' type="upcard" draggable={true} />,
	<Card src="./cardsImages/KD.png" suit='diamonds' rank='13' className='card' id='diamonds-13' type="upcard" draggable={true} />,

	<Card src="./cardsImages/AS.png" suit='spades' rank='1' className='card' id='spades-1' type="upcard" draggable={true} />,
	<Card src="./cardsImages/2S.png" suit='spades' rank='2' className='card' id='spades-2' type="upcard" draggable={true} />,
	<Card src="./cardsImages/3S.png" suit='spades' rank='3' className='card' id='spades-3' type="upcard" draggable={true} />,
	<Card src="./cardsImages/4S.png" suit='spades' rank='4' className='card' id='spades-4' type="upcard" draggable={true} />,
	<Card src="./cardsImages/5S.png" suit='spades' rank='5' className='card' id='spades-5' type="upcard" draggable={true} />,
	<Card src="./cardsImages/6S.png" suit='spades' rank='6' className='card' id='spades-6' type="upcard" draggable={true} />,
	<Card src="./cardsImages/7S.png" suit='spades' rank='7' className='card' id='spades-7' type="upcard" draggable={true} />,
	<Card src="./cardsImages/8S.png" suit='spades' rank='8' className='card' id='spades-8' type="upcard" draggable={true} />,
	<Card src="./cardsImages/9S.png" suit='spades' rank='9' className='card' id='spades-9' type="upcard" draggable={true} />,
	<Card src="./cardsImages/10S.png" suit='spades' rank='10' className='card' id='spades-10' type="upcard" draggable={true} />,
	<Card src="./cardsImages/JS.png" suit='spades' rank='11' className='card' id='spades-11' type="upcard" draggable={true} />,
	<Card src="./cardsImages/QS.png" suit='spades' rank='12' className='card' id='spades-12' type="upcard" draggable={true} />,
	<Card src="./cardsImages/KS.png" suit='spades' rank='13' className='card' id='spades-13' type="upcard" draggable={true} />,
	<Card src="./cardsImages/AH.png" suit='hearts' rank='1' className='card' id='hearts-1' type="upcard" draggable={true} />,
	<Card src="./cardsImages/2H.png" suit='hearts' rank='2' className='card' id='hearts-2' type="upcard" draggable={true} />,
	<Card src="./cardsImages/3H.png" suit='hearts' rank='3' className='card' id='hearts-3' type="upcard" draggable={true} />,
	<Card src="./cardsImages/4H.png" suit='hearts' rank='4' className='card' id='hearts-4' type="upcard" draggable={true} />,
	<Card src="./cardsImages/5H.png" suit='hearts' rank='5' className='card' id='hearts-5' type="upcard" draggable={true} />,
	<Card src="./cardsImages/6H.png" suit='hearts' rank='6' className='card' id='hearts-6' type="upcard" draggable={true} />,
	<Card src="./cardsImages/7H.png" suit='hearts' rank='7' className='card' id='hearts-7' type="upcard" draggable={true} />,
	<Card src="./cardsImages/8H.png" suit='hearts' rank='8' className='card' id='hearts-8' type="upcard" draggable={true} />,
	<Card src="./cardsImages/9H.png" suit='hearts' rank='9' className='card' id='hearts-9' type="upcard" draggable={true} />,
	<Card src="./cardsImages/10H.png" suit='hearts' rank='10' className='card' id='hearts-10' type="upcard" draggable={true} />,
	<Card src="./cardsImages/JH.png" suit='hearts' rank='11' className='card' id='hearts-11' type="upcard" draggable={true} />,
	<Card src="./cardsImages/QH.png" suit='hearts' rank='12' className='card' id='hearts-12' type="upcard" draggable={true} />,
	<Card src="./cardsImages/KH.png" suit='hearts' rank='13' className='card' id='hearts-13' type="upcard" draggable={true} />
];

export default cards;