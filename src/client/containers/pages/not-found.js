// @flow

import { Link } from 'react-router-dom';
import type { TranslateProps } from 'client/types';
import React from 'react';
import Type from 'client/components/type';
import styled from 'styled-components';
import translator from 'client/hocs/translator';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const NotFound = ({ translate }: TranslateProps) => (
  <Container>
    <Type.heading>
      {translate('notFound.title')}
    </Type.heading>

    <Type.paragraph>
      {translate('notFound.go')}

      <Link to={'/'}>
        {translate('notFound.home')}
      </Link>
    </Type.paragraph>
  </Container>
);

export default translator(NotFound);
