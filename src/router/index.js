// index.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/home" component={Home} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default AppRouter;