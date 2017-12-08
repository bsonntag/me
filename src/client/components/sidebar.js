// @flow

import type { Translate } from 'client/locales';
import { colors, spacing, units } from 'client/styles';
import { translator } from 'client/locales';
import React from 'react';
import RoundImage from 'client/components/round-image';
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
  min-height: 100vh;
  padding-bottom: ${spacing.large};
  padding-top: ${spacing.large};
  width: ${units(50)};
`;

const Picture = styled(RoundImage)`
  margin-bottom: ${spacing.medium};
`;

const Sidebar = ({ translate }: Props) => (
  <Container>
    <Picture />

    <Type.heading>
      {translate('name')}
    </Type.heading>

    <SocialNetworks />
  </Container>
);

export default translator(Sidebar);
