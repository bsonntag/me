import { Caption } from 'components/typography';
import { ExternalLink } from 'components/links';
import { spacing } from 'styles/spacing';
import Icon from 'components/icon';
import React from 'react';
import styled from 'styled-components';

const facebookUrl = url => `https://www.facebook.com/sharer/sharer.php?u=${url}`;

const twitterUrl = url => `https://twitter.com/home?status=${url}`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: ${spacing.medium};

  > :not(:last-child) {
    margin-right: ${spacing.small};
  }
`;

const ScallingLink = styled(ExternalLink)`
  display: block;
  transition: transform 200ms ease-in-out;

  &:focus, &:hover {
    transform: scale(1.4);
  }
`;

const Share = ({ className, label, url }) => (
  <Container className={className}>
    <Caption>
      {label}
    </Caption>

    <ScallingLink href={facebookUrl(url)}>
      <Icon.facebook size={'2rem'} />
    </ScallingLink>

    <ScallingLink href={twitterUrl(url)}>
      <Icon.twitter size={'2rem'} />
    </ScallingLink>
  </Container>
);

export default Share;
