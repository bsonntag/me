// @flow

import type { Translate } from 'client/locales';
import { colors, margin, media, padding, units } from 'client/styles';
import { translator } from 'client/locales';
import Image from 'client/components/image';
import React from 'react';
import SocialNetworks from 'client/components/social-networks';
import Type from 'client/components/type';
import styled from 'styled-components';

type Props = {
  translate: Translate,
};

const Container = styled.div`
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

  ${media.min.md`
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    width: ${units(50)};

    > :not(:last-child) {
      ${margin.bottom('medium')}
      ${margin.right('none')}
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

  ${media.min.md`
    align-items: center;
  `}
`;

const Sidebar = ({ translate }: Props) => (
  <Container>
    <Image
      fileName={'ben.jpg'}
      round
      size={units(15)}
    />

    <InfoContainer>
      <Type.heading>
        {translate('name')}
      </Type.heading>

      <SocialNetworks />
    </InfoContainer>
  </Container>
);

export default translator(Sidebar);
