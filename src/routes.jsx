import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Navbar, Footer } from './components';

import HomePage from './pages/home';
import NotFoundPage from './pages/notFound';
import SearchPage from './pages/search';

export const history = createBrowserHistory();

const Routes = () => (
  <BrowserRouter history={history}>
    <div id="content">
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search/:searched" component={SearchPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <div className="push" />
    </div>
    <Footer />
  </BrowserRouter>
);

export default Routes;
