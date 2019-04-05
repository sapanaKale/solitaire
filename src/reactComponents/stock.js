import React, { Component } from 'react';
import Card from './card.js'

class Stock extends Component {
	render() {
		return (
			<div className={this.props.className} id={this.props.id} onClick={this.props.onClick}>
				<Card src="./cardsImages/gray_back.png" className='stockCard' onClick={this.props.onClick} />
			</div>
		)
	}
}

export default Stock;