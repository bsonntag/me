import { ExternalLink } from 'components/links';
import { margin, units } from 'styles';
import Icon from 'components/icon';
import React from 'react';
import styled from 'styled-components';

const socialNetworks = [{
  Icon: Icon.github,
  key: 'github',
  url: 'https://github.com/bsonntag',
}, {
  Icon: Icon.twitter,
  key: 'twitter',
  url: 'https://twitter.com/benjamimsonntag',
}, {
  Icon: Icon.linkedIn,
  key: 'linkedIn',
  url: 'https://www.linkedin.com/in/benjamim-sonntag-6bb562aa/',
}];

const ScallingLink = styled(ExternalLink)`
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const Container = styled.div`
  display: flex;

  > :not(:last-child) {
    ${margin.right('small')}
  }
`;

const SocialNetwork = ({ Icon, url }) => (
  <ScallingLink href={url}>
    <Icon size={units(4)} />
  </ScallingLink>
);

const SocialNetworks = () => (
  <Container>
    {socialNetworks.map(socialNetwork => (
      <SocialNetwork {...socialNetwork} />
    ))}
  </Container>
);

export default SocialNetworks;
