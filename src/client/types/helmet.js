// @flow

import type { Node } from 'react';

type StaticHelmetAttributes = {
  toComponent: () => Object,
  toString: () => string,
};

type StaticHelmetPart = {
  toComponent: () => Node,
  toString: () => string,
};

export type StaticHelmet = {
  bodyAttributes: StaticHelmetAttributes,
  htmlAttributes: StaticHelmetAttributes,
  link: StaticHelmetPart,
  meta: StaticHelmetPart,
  script: StaticHelmetPart,
  style: StaticHelmetPart,
  title: StaticHelmetPart,
};
