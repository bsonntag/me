// @flow

import { Link } from 'react-router-dom';
import { Translate } from 'client/containers/translations';
import React from 'react';
import Type from 'client/components/type';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const NotFound = () => (
  <Container>
    <Type.heading>
      <Translate path={'notFound.title'} />
    </Type.heading>

    <Type.paragraph>
      <Translate path={'notFound.go'} />

      <Link to={'/'}>
        <Translate path={'notFound.home'} />
      </Link>
    </Type.paragraph>
  </Container>
);

export default NotFound;
