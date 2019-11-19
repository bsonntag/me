import { ExternalLink } from 'components/links';
import { spacing } from 'styles/spacing';
import Icon from 'components/icon';
import React from 'react';
import styled from 'styled-components';

const socialNetworks = [{
  Icon: Icon.github,
  key: 'github',
  label: 'Github profile',
  url: 'https://github.com/bsonntag',
}, {
  Icon: Icon.twitter,
  key: 'twitter',
  label: 'Twitter profile',
  url: 'https://twitter.com/benjamimsonntag',
}, {
  Icon: Icon.linkedIn,
  key: 'linkedIn',
  label: 'LinkedIn profile',
  url: 'https://www.linkedin.com/in/benjamim-sonntag-6bb562aa/',
}];

const ScallingLink = styled(ExternalLink)`
  display: block;
  transition: transform 200ms ease-in-out;

  &:focus, &:hover {
    transform: scale(1.4);
  }
`;

const List = styled.ul`
  align-items: center;
  display: flex;
  height: ${spacing.medium};
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: ${spacing.small};
  }
`;

const SocialNetwork = ({ Icon, label, url }) => (
  <ListItem>
    <ScallingLink
      aria-label={label}
      href={url}
    >
      <Icon
        aria-hidden
        size={'2rem'}
      />
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
