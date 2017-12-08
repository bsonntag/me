// @flow

import type { SocialNetwork } from 'client/types';
import Icon from 'client/components/icon';

const socialNetworks: Array<SocialNetwork> = [{
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

export default {
  socialNetworks,
};
