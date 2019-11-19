import { Heading } from 'components/typography';
import { UnstyledLink } from 'components/links';
import { lines, spacing } from 'styles/spacing';
import { media } from 'styles/media';
import Image from 'components/image';
import React from 'react';
import SocialNetworks from 'components/social-networks';
import ben from 'images/ben.jpg';
import colors from 'styles/colors';
import styled from 'styled-components';

const Container = styled.header`
  background-color: ${colors.primary};
  color: ${colors.alternateTextColor};
  display: grid;
  grid-gap: ${spacing.small} ${spacing.medium};
  justify-items: center;
  padding: ${spacing.large} ${spacing.small};
  text-align: center;

  ${media.min.sm`
    grid-template-columns: auto auto;
    justify-content: center;
    justify-items: initial;
    text-align: initial;
  `}
`;

const Avatar = styled(Image)`
  grid-row: span 2;
`;

const StyledHeading = styled(Heading)`
  align-self: end;
  margin: 0;
`;

const Header = () => (
  <Container>
    <Avatar
      alt={'Photo of Benjamim Sonntag'}
      round
      size={lines(6)}
      src={ben}
    />

    <StyledHeading>
      <UnstyledLink to={'/'}>
        {'Benjamim Sonntag'}
      </UnstyledLink>
    </StyledHeading>

    <SocialNetworks />
  </Container>
);

export default Header;
