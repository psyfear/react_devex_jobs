import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import JobsIndex from './components/jobs_index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={JobsIndex} />
  </Route>
);
// this.props.params.id