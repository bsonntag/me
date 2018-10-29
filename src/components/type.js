import { compose, setDisplayName } from 'recompose';
import { createTypeStyle, typography } from 'styles';
import { reduce } from 'lodash';
import React from 'react';
import styled from 'styled-components';

const type = Component => ({ children, raw, ...rest }) => {
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

const Type = reduce(
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
