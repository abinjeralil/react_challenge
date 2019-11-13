import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/home/home.js';
import Report1 from './pages/reports';

const routing = (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/reports" component={Report1} />
		</Switch>
	</Router>
)

ReactDOM.render(routing, document.getElementById('App'));