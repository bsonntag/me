// @flow

import type { Translate } from 'client/locales';
import { colors, spacing } from 'client/styles';
import { translator } from 'client/locales';
import React from 'react';
import Type from 'client/components/type';
import styled from 'styled-components';

type Props = {
  translate: Translate,
};

const Container = styled.div`
  color: ${colors.textColor};
  flex: 1;
  padding: ${spacing.large};
`;

const Home = ({ translate }: Props) => (
  <Container>
    <Type.heading>
      {translate('home.heading')}
    </Type.heading>

    <Type.title>
      {translate('home.whatIDo.title')}
    </Type.title>

    <Type.paragraph raw>
      {translate('home.whatIDo.description')}
    </Type.paragraph>
  </Container>
);

export default translator(Home);
