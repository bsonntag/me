// @flow

import { Route, Switch } from 'react-router-dom';
import BlogPost from 'client/containers/pages/blog-post';
import Home from 'client/containers/pages/home';
import NotFound from 'client/containers/pages/not-found';
import React from 'react';

const Routes = () => (
  <Switch>
    <Route
      component={BlogPost}
      path={'/blog/:postId'}
    />

    <Route
      component={Home}
      exact
      path={'/'}
    />

    <Route component={NotFound} />
  </Switch>
);

export default Routes;
