import React from 'react';
import './App.css';

import Inicio from './components/Inicio';
import ChatC from './components/ChatC';
import Quizz from './components/Quizz';
import Login from './components/Login';
import Register from './components/Register';



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
	return (
		<Router> 
			<Switch>
				<Route exact path="/" component={Inicio} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/chat" component={ChatC} />
				<Route exact path="/quizz" component={Quizz} />
			</Switch>
		</Router>
		
	);
}

export default App;
