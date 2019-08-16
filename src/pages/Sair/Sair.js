
import React, { Component } from 'react';

export class Sair extends Component {

	constructor(props){
		super(props);
		this.state = {}

		localStorage.setItem('jwt', '');
		this.props.history.push('/Login');

	}
	render() {
		
	}

}