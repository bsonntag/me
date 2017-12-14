// @flow

import { defaultFontSize } from './typography';
import { injectGlobal } from 'styled-components';
import normalize from 'styled-normalize';

export const injectGlobalStyles = () => injectGlobal`
  ${normalize}

  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: ${defaultFontSize}px;
    padding: 0;
  }

  a {
    color: inherit;
  }

  h1, h2, h3, h4, p {
    margin: 0;
  }
`;
