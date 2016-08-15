import React from "react";
import "../styles/loginRegisterTitle.scss"

class LoginRegisterTitle extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			option: this.props.option
		}
	}
	clickSpan(e){
		console.log(e);
		// e.classList.toggle(action);
	}
	render(){
		return (
				<div className="logregTitle">
					<span className="optionBtn " onclick={this.clickSpan.bind(this)}>登录</span>
					<span className="optionBtn">注册</span>
				</div>
			)
	}
}

export default LoginRegisterTitle;