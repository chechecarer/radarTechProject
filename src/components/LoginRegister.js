import Login from './Login';
import React from 'react';
import LoginRegisterTitle from './LoginRegisterTitle';
import '../styles/loginRegister.scss';

class LoginRegister extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			switch: "login"
		}

	}


	render(){
		
			return (
				<div className="loginregister">
					<LoginRegisterTitle />
					<Login />
				</div>
			);
		

		
	}
}

export default LoginRegister;