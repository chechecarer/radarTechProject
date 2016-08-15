const React = require('react');
import '../styles/Login.scss';
class Login extends React.Component{
	constructor(props){
		super(props);
	}

	

	render(){
		return (
			<form className="loginForm">
				<div className="formItem">
					<input type="text" placeHolder="手机号或邮箱" />
					<input type="text" placeHolder="密码" />
				</div>
				<div className="submitBtn">
					<button type="button">登录</button>
				</div>
				<div className="infoMore">
					<div className="rememberMe">
						<input type="checkbox" />记住我
					</div>
					<div className="cannotLogin">
						<input type="button" value="无法登录？"/>
					</div>
				</div>
			</form>
			)
	}
}

module.exports = Login;