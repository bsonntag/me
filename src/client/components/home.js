// @flow

import type { Translate } from 'client/locales';
import { colors, margin, padding } from 'client/styles';
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

  ${padding('large')}
`;

const Section = styled.div`
  &:not(:last-child) {
    ${margin.bottom('medium')}
  }
`;

const Home = ({ translate }: Props) => (
  <Container>
    <Type.heading>
      {translate('home.heading')}
    </Type.heading>

    <Section>
      <Type.title>
        {translate('home.whatIDo.title')}
      </Type.title>

      <Type.paragraph raw>
        {translate('home.whatIDo.description')}
      </Type.paragraph>
    </Section>

    <Section>
      <Type.title>
        {translate('home.work.title')}
      </Type.title>

      <Type.paragraph raw>
        {translate('home.work.description')}
      </Type.paragraph>
    </Section>
  </Container>
);

export default translator(Home);
