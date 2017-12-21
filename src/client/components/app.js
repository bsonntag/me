// @flow

import { Route, Switch } from 'react-router-dom';
import { ScrollRestoration } from 'client/components/routing';
import BlogPost from 'client/components/pages/blog-post';
import Home from 'client/components/pages/home';
import NotFound from 'client/components/pages/not-found';
import Page from 'client/components/page';
import React from 'react';

const App = () => (
  <Page>
    <ScrollRestoration />

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
  </Page>
);

export default App;
