import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import Details from './containers/Details';
import CounterPage from './containers/CounterPage';


export default (
  <Route path="/" component={App}>
    <Route path=":id" components={ {center: Details} } />
    <Route path="/counter" component={CounterPage} />
    {/* <Route path="/settings" component={ Settings } /> */}
  </Route>
);
