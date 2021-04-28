import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Navbar } from './components';

import HomePage from './pages/home';
import NotFoundPage from './pages/notFound';
import SearchPage from './pages/search';

export const history = createBrowserHistory();

const Routes = () => (
  <BrowserRouter history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/search/:searched" component={SearchPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
