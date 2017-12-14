// @flow

import { css } from 'styled-components';
import { margin } from './spacing';
import { reduce, round } from 'lodash';

type TypeConfig = {|
  element: string,
  fontFamily?: string,
  fontSize: number,
  fontWeight: string,
  lineHeight: number,
  marginBottom?: string,
|};

export const defaultFontSize = 16;

const heading: TypeConfig = {
  element: 'h1',
  fontSize: 34,
  fontWeight: 'normal',
  lineHeight: 40,
  marginBottom: margin.bottom('medium'),
};

const title: TypeConfig = {
  element: 'h2',
  fontSize: 24,
  fontWeight: 'bold',
  lineHeight: 32,
  marginBottom: margin.bottom('small'),
};

const subheading: TypeConfig = {
  element: 'h3',
  fontSize: 20,
  fontWeight: 'normal',
  lineHeight: 24,
};

const paragraph: TypeConfig = {
  element: 'p',
  fontFamily: `'Open Sans', sans-serif`,
  fontSize: defaultFontSize,
  fontWeight: 'normal',
  lineHeight: 24,
};

export const createTypeStyle = ({
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  marginBottom,
}: TypeConfig) => css`
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
  line-height: ${round(lineHeight / fontSize, 5)}em;

  ${fontFamily ? `font-family: ${fontFamily};` : ''}
  ${marginBottom}
`;

export const typography = {
  heading,
  paragraph,
  subheading,
  title,
};

export type TypographyKeys = $Keys<typeof typography>;

export const typeStyles = reduce(
  typography,
  (result, { element, ...typeConfig }) => css`
    ${result}

    ${element} {
      ${createTypeStyle(typeConfig)}
    }
  `,
  ''
);
