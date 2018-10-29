import { ExternalLink } from 'client/components/links';
import { margin, units } from 'client/styles';
import Icon from 'client/components/icon';
import React from 'react';
import Type from 'client/components/type';
import styled from 'styled-components';

const facebookUrl = url => `https://www.facebook.com/sharer/sharer.php?u=${url}`;

const twitterUrl = url => `https://twitter.com/home?status=${url}`;

const Container = styled.div`
  align-items: center;
  display: flex;

  > :not(:last-child) {
    ${margin.right('small')}
  }
`;

const ScallingLink = styled(ExternalLink)`
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const Share = ({ className, label, url }) => (
  <Container className={className}>
    <Type.caption>
      {label}
    </Type.caption>

    <ScallingLink href={facebookUrl(url)}>
      <Icon.facebook size={units(4)} />
    </ScallingLink>

    <ScallingLink href={twitterUrl(url)}>
      <Icon.twitter size={units(4)} />
    </ScallingLink>
  </Container>
);

export default Share;
