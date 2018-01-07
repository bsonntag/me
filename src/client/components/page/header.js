// @flow

import type { TranslateProps } from 'client/types';
import { UnstyledLink } from 'client/components/links';
import { colors, margin, media, padding, units } from 'client/styles';
import Image from 'client/components/image';
import React from 'react';
import SocialNetworks from 'client/components/social-networks';
import Type from 'client/components/type';
import styled from 'styled-components';
import translator from 'client/hocs/translator';

const Container = styled.header`
  align-items: center;
  background-color: ${colors.primary};
  color: ${colors.alternateTextColor};
  display: flex;
  flex-direction: column;

  ${padding('large')}

  > :not(:last-child) {
    ${margin.bottom('medium')}
  }

  ${media.min.sm`
    flex-direction: row;
    justify-content: center;

    > :not(:last-child) {
      ${margin.bottom('none')}
      ${margin.right('medium')}
    }
  `}
`;

const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;

  ${media.min.sm`
    align-items: flex-start;
  `}
`;

const Header = ({ translate }: TranslateProps) => (
  <Container>
    <Image
      fileName={'ben.jpg'}
      round
      size={units(15)}
    />

    <InfoContainer>
      <Type.heading>
        <UnstyledLink to={'/'}>
          {translate('name')}
        </UnstyledLink>
      </Type.heading>

      <SocialNetworks />
    </InfoContainer>
  </Container>
);

export default translator(Header);
