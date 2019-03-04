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
  display: block;
  transition: transform 200ms ease-in-out;

  &:focus, &:hover {
    transform: scale(1.2);
  }
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    ${margin.right('small')}
  }
`;

const SocialNetwork = ({ Icon, url }) => (
  <ListItem>
    <ScallingLink href={url}>
      <Icon size={units(4)} />
    </ScallingLink>
  </ListItem>
);

const SocialNetworks = () => (
  <List>
    {socialNetworks.map(({ key, ...rest }) => (
      <SocialNetwork
        key={key}
        {...rest}
      />
    ))}
  </List>
);

export default SocialNetworks;
