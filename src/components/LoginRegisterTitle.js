import React from "react";
import "../styles/loginRegisterTitle.scss"

class LoginRegisterTitle extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			option: this.props.option
		}

	}
	
	render(){
		return (
				<div className="logregTitle">
					<span className="optionBtn action" onClick={this.props.clickopt} data-name="login">登录</span>
					<span className="optionBtn" onClick={this.props.clickopt} data-name="register">注册</span>
				</div>
			)
	}
}

export default LoginRegisterTitle;