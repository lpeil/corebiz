import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from './pages/home';
import NotFoundPage from './pages/notFound';

export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>
);

export default Routes;
