import React, { Component } from 'react';

export class Login extends Component {

constructor(props){
	super(props);
	this.state = {
		errorMsg:''
	}

	this.sigin = this.sigin.bind(this);
}

sigin() {
	let email = document.getElementById('email').value;
	let pass = document.getElementById('pass').value;

	fetch('https://alunos.b7web.com.br/apis/loginteste/users/login', {
		method:'POST',
		body:JSON.stringify({email, pass})
	})
	.then(r=>r.json())
	.then(json=>{
		this.setState({errorMsg:json.error});

		if(json.error == '' && json.jwt != ''){
			localStorage.setItem('jwt', json.jwt);
			this.props.history.push('/');
			}

		});

}


	render() {
		return (
				<div class="areaGeral">
					<div class="form-area">
						<div class="form-title">
							<h3>Login</h3>
						</div>
			
						<div class="form-inputs">
							<p class="error">{this.state.errorMsg}</p>			
							<label>
								<input type="email" id="email" placeholder="Username"/>
							</label>
							<label>
								<input type="password" id="pass" placeholder="Password" />
							</label>
							<button onClick={this.sigin}>Sign In</button>
						</div>
					</div>
			</div>

		);
	}

}