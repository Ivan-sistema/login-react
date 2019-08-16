import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			jwt:localStorage.getItem('jwt')

		};
		this.lista = {
			lista:['dados1', 'dados2', 'dados3']

		};

		
		if(this.state.jwt == '' || typeof this.state.jwt == 'undefined'){
			this.props.history.push('/Login');
		}

	}


	render() {
		return (
			<div class="areaGeral">
				<div class="center-system">
				<ul>
					{this.lista.lista.map((item)=>{
						return (
							<li>{item}</li>
							);
					})}
				</ul>

				<Link to="/sair" class="logout">Logout</Link>
				</div>
			</div>
		);
	}

}
