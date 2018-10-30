import { createTypeStyle, typography } from 'styles';
import { reduce } from 'lodash';
import { renderInnerHtml } from 'utils/html';
import React from 'react';
import styled from 'styled-components';

const createTypeComponent = (name, { element, ...typeConfig }) => {
  const StyledTypeElement = styled(element)`
    ${createTypeStyle(typeConfig)}
  `;

  const Type = ({ children, raw, ...rest }) => {
    const props = {
      ...rest,
      ...!raw ? { children } : {
        dangerouslySetInnerHTML: renderInnerHtml(children),
      },
    };

    return <StyledTypeElement {...props} />;
  };

  Type.displayName = `Type.${name}`;

  return Type;
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
