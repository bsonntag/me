// @flow

import { isProduction } from './environment';

export const getAssetUrl = (fileName: string): string => {
  if (isProduction()) {
    return `/${fileName}`;
  }

  return `/assets/${fileName}`;
};
