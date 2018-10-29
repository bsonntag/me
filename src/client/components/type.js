// @flow

import { type TypographyKeys, createTypeStyle, typography } from 'client/styles';
import { reduce } from 'lodash';
import React, { type ComponentType } from 'react';
import styled from 'styled-components';

type Props = {
  children: any,
  className?: string,
  marginBottom?: string,
  raw?: boolean,
};

const type = (displayName, Component) => {
  const Type = ({ children, raw, ...rest }: Props) => {
    const props = {
      ...rest,
      ...raw ? {
        dangerouslySetInnerHTML: {
          __html: children, // eslint-disable-line id-match
        },
      } : { children },
    };

    return <Component {...props} />;
  };

  Type.displayName = displayName;

  return Type;
};

const createTypeComponent = (name, { element, ...typeConfig }) => {
  return type(`Type.${name}`, styled(element)`${createTypeStyle(typeConfig)}`);
};

type Typography = {
  [key: TypographyKeys]: ComponentType<Props>,
};

const Type: Typography = reduce(
  typography,
  (result, typeConfig, name) => {
    return {
      ...result,
      [name]: createTypeComponent(name, typeConfig),
    };
  },
  {}
);

export default Type;
