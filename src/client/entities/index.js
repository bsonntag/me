// @flow

import type { Project, SocialNetwork } from 'client/types';
import Icon from 'client/components/icon';

const projects: Array<Project> = [{
  key: 'me',
  name: 'bsonntag.me',
  type: 'project',
  url: 'https://github.com/bsonntag/me',
}, {
  key: 'react-remarkbox',
  name: 'react-remarkbox',
  type: 'module',
  url: 'https://github.com/bsonntag/react-remarkbox',
}, {
  key: 'npm-notifier',
  name: 'npm-notifier',
  type: 'project',
  url: 'https://github.com/bsonntag/npm-notifier',
  wip: true,
}, {
  key: 'badge-up-cli',
  name: 'badge-up-cli',
  type: 'module',
  url: 'https://github.com/bsonntag/badge-up-cli',
}, {
  key: 'stop-media-stream',
  name: 'stop-media-stream',
  type: 'module',
  url: 'https://github.com/bsonntag/stop-media-stream',
}];

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
  projects,
  socialNetworks,
};
