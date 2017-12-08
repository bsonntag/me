// @flow

import { css } from 'styled-components';
import { round } from 'lodash';
import { spacing } from './spacing';

type TypeConfig = {|
  element: string,
  fontSize: number,
  fontWeight: string,
  lineHeight: number,
  marginBottom?: string,
|};

const heading: TypeConfig = {
  element: 'h1',
  fontSize: 24,
  fontWeight: 'normal',
  lineHeight: 32,
  marginBottom: spacing.medium,
};

const title: TypeConfig = {
  element: 'h2',
  fontSize: 20,
  fontWeight: 'bold',
  lineHeight: 24,
  marginBottom: spacing.small,
};

const subheading: TypeConfig = {
  element: 'h3',
  fontSize: 16,
  fontWeight: 'normal',
  lineHeight: 24,
};

const paragraph: TypeConfig = {
  element: 'p',
  fontSize: 14,
  fontWeight: 'normal',
  lineHeight: 20,
};

export const createTypeStyle = ({
  fontSize,
  fontWeight,
  lineHeight,
  marginBottom,
}: TypeConfig) => css`
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
  line-height: ${round(lineHeight / fontSize, 5)}em;

  ${marginBottom ? `margin-bottom: ${marginBottom};` : ''}
`;

export const typography = {
  heading,
  paragraph,
  subheading,
  title,
};

export type TypographyKeys = $Keys<typeof typography>;
