import React, { Component } from 'react';

class Card extends Component {
	render() {
		let source=this.props.src;
		return (
				<img src={source} alt="cardImg" className={this.props.className} id={this.props.id}/>
		)
	}
}

export default Card;