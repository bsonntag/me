// @flow

import type { ComponentType } from 'react';
import type { TypographyKeys } from 'client/styles';
import { compose, setDisplayName } from 'recompose';
import { createTypeStyle, typography } from 'client/styles';
import { reduce } from 'lodash';
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: any,
  className?: string,
  marginBottom?: string,
  raw?: boolean,
};

const type = Component => ({ children, raw, ...rest }: Props) => {
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

const createTypeComponent = (name, { element, ...typeConfig }) => {
  return compose(
    setDisplayName(`Type.${name}`),
    type
  )(styled(element)`${createTypeStyle(typeConfig)}`);
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
