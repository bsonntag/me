// @flow

import Home from 'client/components/home';
import React from 'react';
import Sidebar from 'client/components/sidebar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const App = () => (
  <Container>
    <Sidebar />

    <Home />
  </Container>
);

export default App;
