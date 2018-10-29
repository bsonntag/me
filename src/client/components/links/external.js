// @flow

import React, { type Node } from 'react';

type Props = {
  children: Node,
  className?: string,
  href: string,
  style?: Object,
};

export const ExternalLink = ({ children, ...rest }: Props) => (
  <a
    rel={'noreferrer noopener'}
    target={'_blank'}
    {...rest}
  >
    {children}
  </a>
);
