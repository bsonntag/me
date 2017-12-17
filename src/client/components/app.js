// @flow

import { Route, Switch } from 'react-router-dom';
import { colors, media, padding } from 'client/styles';
import BlogPost from 'client/components/pages/blog-post';
import Home from 'client/components/pages/home';
import NotFound from 'client/components/pages/not-found';
import React from 'react';
import Sidebar from 'client/components/sidebar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${media.min.md`
    flex-direction: row;
  `}
`;

const Content = styled.div`
  color: ${colors.textColor};
  flex: 1;

  ${padding('large')}
`;

const App = () => (
  <Container>
    <Sidebar />

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
  </Container>
);

export default App;
