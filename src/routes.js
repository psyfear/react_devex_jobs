import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import JobsIndex from './components/jobs_index';
import JobsShow from './components/jobs_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={JobsIndex} />
    <Route path="jobs/:id" component={JobsShow} />
  </Route>
);
// this.props.params.id