import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/home';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;