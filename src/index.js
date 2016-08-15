import LoginRegister from "./components/LoginRegister";
import React from "react";
// import ReactDOM from "react-dom";

// class App extends React.Component {
// 	constructor(props){
// 		super(props);
// 	}

// 	render(){
// 		return (
// 			<Login />
// 			);
// 	}
// }

// export default App;
React.render(
	<LoginRegister />,
	document.querySelector('#app')
	);
