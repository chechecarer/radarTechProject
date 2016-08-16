import React from "react";
import "../styles/Register.scss";

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			passwordState: 1
		}
		
	}

	checkPassword(e){
		var pas = e.target.value;
		console.log(pas);
		if(pas.length < 6){
			this.setState({
				passwordState: 0
			})
		}else{
			this.setState({
				passwordState: 1
			})
		}
	}

	render(){
		var states = this.state;
		return(
			<form className="registerForm">
				<div className="formItem">
					<div className="item username">
						<input type="text"  name="username" placeholder="姓名" />
					</div>
					<div className="item userphone">
						<input type="text"  name="userphone" placeholder="手机号（仅支持中国大陆）"  />
					</div>
					<div className="item userpassword">
						<input type="password" className="userpassword" name="userpassword" placeholder="密码（不少于6位）" onBlur={this.checkPassword.bind(this)}/>
						{
						(function(){
							if(states.passwordState === 0){
								return (
										<span className="passwordError">密码不少于6位</span>
									)
							}
						})()
					}
					</div>
					
					<div className="item verifycode">
						<input type="text" className="verifycode" name="verifycode" placeholder="验证码" />
					</div>

					
					
				</div>
				<div className="submitBtn">
					<button type="button">注册Radar</button>
				</div>
				
			</form>
			);
	}

}

export default Register;