// @flow

import { injectGlobal } from 'styled-components';
import normalize from 'styled-normalize';

export const injectStyles = () => injectGlobal`
  ${normalize}

  @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    padding: 0;
  }

  a {
    color: inherit;
  }

  h1, h2, h3, h4, p {
    margin: 0;
  }
`;
