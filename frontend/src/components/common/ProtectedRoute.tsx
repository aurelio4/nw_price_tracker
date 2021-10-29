import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const ProtectedRoute = ({ component, ...rest }: any) => {
	if (cookies.get("auth_token")) {
		return <Route {...rest} render={component} />;
	} else {
		return <Redirect to="/login" />;
	}
};

export default ProtectedRoute;
