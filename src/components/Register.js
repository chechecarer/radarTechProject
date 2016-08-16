import React from "react";
import "../styles/Register.scss";

class Register extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<form className="registerForm">
				<div className="formItem">
					<input type="text" className="username" name="username" placeholder="姓名" />
					<input type="text" className="userphone" name="userphone" placeholder="手机号（仅支持中国大陆）" />
					<input type="password" className="userpassword" name="userpassword" placeholder="密码（不少于6位）" />
					<input type="text" className="verifycode" name="verifycode" placeholder="验证码" />
				</div>
				<div className="submitBtn">
					<button type="button">注册Radar</button>
				</div>
				
			</form>
			);
	}

}

export default Register;