import React, { useState } from 'react';
import LandingPage from './components/pages/LandingPage';
import Dashboard from './components/pages/Dashboard';
import ProtectedRoute from './components/common/ProtectedRoute';
import Register from './components/account-creation/Register';
import Login from './components/account-creation/Login';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import './App.css';

const App = () => {
	const [token, setToken] = useState<boolean>(false);

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact>
						<LandingPage />
					</Route>
					<ProtectedRoute
						path="/dashboard"
						isAuthenticated={token}
						component={Dashboard}
					/>
					<Route path="/register" exact>
						<Register setToken={setToken} />
					</Route>
					<Route path="/login" exact>
						<Login setToken={setToken} />
					</Route>
					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
