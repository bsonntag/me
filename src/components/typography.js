import { renderInnerHtml } from 'utils/html';
import { spacing } from 'styles/spacing';
import { titleFontFamily } from 'styles/typography';
import React from 'react';
import styled from 'styled-components';

function createType(name, BaseComponent) {
  const Type = ({ children, raw, ...rest }) => {
    const props = {
      ...rest,
      ...(!raw
        ? { children }
        : { dangerouslySetInnerHTML: renderInnerHtml(children) }),
    };

    return <BaseComponent {...props} />;
  };

  Type.displayName = `Type.${name}`;

  return Type;
}

export const Heading = createType(
  'Heading',
  styled.h1`
    font-family: ${titleFontFamily};
    font-size: 3.375em;
    font-weight: normal;
    letter-spacing: -0.75px;
    line-height: ${spacing.large};
    margin-bottom: ${spacing.medium};
    margin-top: ${spacing.small};
  `
);

export const Title = createType(
  'Title',
  styled.h2`
    font-family: ${titleFontFamily};
    font-size: 2.25rem;
    font-weight: bold;
    letter-spacing: -0.25px;
    line-height: ${spacing.medium};
    margin-bottom: ${spacing.small};
    margin-top: ${spacing.medium};
  `
);

export const SubTitle = createType(
  'SubTitle',
  styled.h3`
    font-family: ${titleFontFamily};
    font-size: 1.5rem;
    font-weight: normal;
    line-height: ${spacing.medium};
    margin-top: ${spacing.small};
  `
);

export const Paragraph = createType(
  'Paragraph',
  styled.p`
    font-weight: normal;
    margin-bottom: ${spacing.small};
  `
);

export const Caption = createType(
  'Caption',
  styled.small`
    font-size: 14px;
    font-weight: normal;
  `
);
