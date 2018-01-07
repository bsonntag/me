// @flow

export * from './helmet';
export * from './router';
export * from './translate';

import type { ComponentType } from 'react';

export type SocialNetwork = {|
  Icon: ComponentType<*>,
  key: string,
  url: string,
|};
