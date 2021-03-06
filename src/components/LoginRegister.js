
import React from 'react';
import LoginRegisterTitle from './LoginRegisterTitle';
import Login from './Login';
import Register from './Register';

import '../styles/loginRegister';

class LoginRegister extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			option: "login"
		}

	}

	clickOpt(e){
		var opts = document.getElementsByClassName('optionBtn');
		
		for(var i=0; i<opts.length; i++){
			opts[i].classList.toggle('action');
		}
		var opt = e.target;
		console.log(opt.dataset.name);
		this.setState(
				{
					option: opt.dataset.name
				}
			)
	}

	render(){
			var opt = this.state.option;
			return (
				<div className="loginregister">
					<div className="logo">
						<img src="http://www.impactprogram.org/wp-content/uploads/2014/09/RADAR_4color.png" />
					</div>
					
					<LoginRegisterTitle clickopt={this.clickOpt.bind(this)}/>
					{
						(function(){
							if(opt === "login"){
								return(
									<Login />
									);
							}else if(opt === "register"){
								return(
									<Register />
									);
							}
						})()
					}
				</div>
				
			);
		

		
	}
}

export default LoginRegister;