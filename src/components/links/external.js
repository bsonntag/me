import React from 'react';

export const ExternalLink = ({ children, ...rest }) => (
  <a rel={'noreferrer noopener'} target={'_blank'} {...rest}>
    {children}
  </a>
);
