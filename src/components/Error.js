import React from "react";
import "../styles/Error";
class PasswordError extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(<span className="passwordError">密码不少于6位</span>);
	}
}

module.exports = {
	PasswordError: PasswordError
}