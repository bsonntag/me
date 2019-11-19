import { Heading } from 'components/typography';
import { UnstyledLink } from 'components/links';
import { graphql, useStaticQuery } from 'gatsby';
import { lines, spacing } from 'styles/spacing';
import { media } from 'styles/media';
import Image from 'components/image';
import React from 'react';
import SocialNetworks from 'components/social-networks';
import colors from 'styles/colors';
import styled from 'styled-components';

const query = graphql`
  query {
    file(relativePath: { eq: "ben.jpg" }) {
      childImageSharp {
        fixed(height: 150, width: 150) {
          src
          srcSet
          height
          width
        }
      }
    }
  }
`;

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

function Header() {
  const data = useStaticQuery(query);

  return (
    <Container>
      <Avatar
        alt={'Photo of Benjamim Sonntag'}
        fixed={data.file.childImageSharp.fixed}
        round
        size={lines(6)}
      />
      <StyledHeading>
        <UnstyledLink to={'/'}>Benjamim Sonntag</UnstyledLink>
      </StyledHeading>
      <SocialNetworks />
    </Container>
  );
}

export default Header;
