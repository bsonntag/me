// @flow

export * from './helmet';
export * from './router';

import type { ComponentType } from 'react';

export type SocialNetwork = {|
  Icon: ComponentType<*>,
  key: string,
  url: string,
|};
