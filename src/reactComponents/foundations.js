import React, { Component } from 'react';

class Foundation extends Component{
	constructor(props){
		super(props);
		this.state = {
			cards: []
		}
	}
	render(){
		return (
			<div className={this.props.className} id={this.props.id}></div>
		);
	}
}

class Foundations extends Component {
	render(){
		return(
			<div className='foundations'>
				<Foundation className='foundation' id="foundation1"/>
				<Foundation className='foundation' id="foundation2"/>
				<Foundation className='foundation' id="foundation3"/>
				<Foundation className='foundation' id="foundation4"/>
			</div>
		);
	}
}

export default Foundations;