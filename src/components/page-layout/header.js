import { UnstyledLink } from 'components/links';
import { colors, media, units } from 'styles';
import { gridGap, margin, padding } from 'styles/spacing';
import { translate } from 'locales';
import Image from 'components/image';
import React from 'react';
import SocialNetworks from 'components/social-networks';
import Type from 'components/type';
import ben from 'images/ben.jpg';
import styled from 'styled-components';

const Container = styled.header`
  background-color: ${colors.primary};
  color: ${colors.alternateTextColor};
  display: grid;
  justify-items: center;

  ${gridGap('medium')}
  ${padding('large')}

  ${media.min.sm`
    grid-template-columns: auto auto;
    justify-content: center;
    justify-items: initial;
  `}
`;

const Avatar = styled(Image)`
  grid-row: span 2;
`;

const Heading = styled(Type.heading)`
  align-self: end;

  ${margin.bottom('none')}
`;

const Header = () => (
  <Container>
    <Avatar
      alt={translate('header.avatarAlt')}
      round
      size={units(15)}
      src={ben}
    />

    <Heading>
      <UnstyledLink to={'/'}>
        {translate('name')}
      </UnstyledLink>
    </Heading>

    <SocialNetworks />
  </Container>
);

export default Header;
