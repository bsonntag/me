import { css } from 'styled-components';
import {
  defaultFontFamily,
  defaultFontSize,
  defaultLineHeight,
  smallFontSize,
  smallLineHeight,
} from './typography';

import { media } from './media';
import normalize from 'styled-normalize';

export const globalStyle = css`
  ${normalize}

  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: ${defaultFontFamily};
    font-size: ${smallFontSize}px;
    line-height: ${smallLineHeight}px;
  }

  ${media.min.sm`
    html {
      font-size: ${defaultFontSize}px;
      line-height: ${defaultLineHeight}px;
    }
  `}

  body {
    padding: 0;
  }

  a {
    color: inherit;
  }

  h1, h2, h3, h4, p, pre {
    margin: 0;
  }

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
