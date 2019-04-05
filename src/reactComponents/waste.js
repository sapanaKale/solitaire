import React, { Component } from 'react';

class Waste extends Component {
	render() {
		return (
			<div id={this.props.id} className={this.props.className}>
				{this.props.cards[0]}
			</div>
		)
	}
}

export default Waste;