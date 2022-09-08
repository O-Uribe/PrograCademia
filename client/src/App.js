import React from 'react';
import './App.css';

import Inicio from './components/Inicio';
import Chat from './components/Chat';
import Quizz from './components/Quizz';




import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
	return (
		<Router> 
			<Switch>
				<Route exact path="/" component={Inicio} />
				<Route exact path="/chat" component={Chat} />
				<Route exact path="/quizz" component={Quizz} />
			</Switch>
		</Router>
		
	);
}

export default App;
