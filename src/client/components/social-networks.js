import { ExternalLink } from 'client/components/links';
import { margin, units } from 'client/styles';
import React from 'react';
import entities from 'client/entities';
import styled from 'styled-components';

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
    {entities.socialNetworks.map(socialNetwork => (
      <SocialNetwork {...socialNetwork} />
    ))}
  </Container>
);

export default SocialNetworks;
