// @flow

import { Route, Switch } from 'react-router-dom';
import { colors, padding } from 'client/styles';
import BlogPost from 'client/components/pages/blog-post';
import Header from 'client/components/header';
import Home from 'client/components/pages/home';
import NotFound from 'client/components/pages/not-found';
import React from 'react';
import styled from 'styled-components';

const Content = styled.main`
  color: ${colors.textColor};
  margin: 0 auto;
  max-width: 1200px;

  ${padding('large')}
`;

const App = () => (
  <div>
    <Header />

    <Content>
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
    </Content>
  </div>
);

export default App;
