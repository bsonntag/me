// @flow

import { get } from 'lodash';

const config = window._config; // eslint-disable-line no-underscore-dangle

export default {
  ...config,
  get: path => get(config, path),
};
