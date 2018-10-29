import { css } from 'styled-components';
import { margin } from './spacing';
import { reduce, round } from 'lodash';

export const defaultFontSize = 16;

const heading = {
  element: 'h1',
  fontSize: 34,
  fontWeight: 'normal',
  lineHeight: 40,
  marginBottom: margin.bottom('medium'),
};

const title = {
  element: 'h2',
  fontSize: 24,
  fontWeight: 'bold',
  lineHeight: 32,
  marginBottom: margin.bottom('small'),
};

const subheading = {
  element: 'h3',
  fontSize: 20,
  fontWeight: 'normal',
  lineHeight: 24,
};

const paragraph = {
  element: 'p',
  fontFamily: `'Open Sans', sans-serif`,
  fontSize: defaultFontSize,
  fontWeight: 'normal',
  lineHeight: 24,
};

const caption = {
  element: 'small',
  fontFamily: `'Open Sans', sans-serif`,
  fontSize: 14,
  fontWeight: 'normal',
  lineHeight: 20,
};

export const createTypeStyle = ({
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  marginBottom,
}) => css`
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
  line-height: ${round(lineHeight / fontSize, 5)}em;

  ${fontFamily ? `font-family: ${fontFamily};` : ''}
  ${marginBottom}
`;

export const typography = {
  caption,
  heading,
  paragraph,
  subheading,
  title,
};

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
