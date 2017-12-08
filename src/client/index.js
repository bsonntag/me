// @flow

import { ServerStyleSheet } from 'styled-components';
import { injectStyles } from './styles';
import { renderToString } from 'react-dom/server';
import App from './components/app';
import Html from './components/html';
import React from 'react';

export const renderClient = () => {
  const styleSheet = new ServerStyleSheet();

  injectStyles();

  const app = renderToString(styleSheet.collectStyles(<App />));

  return (
    <Html styles={styleSheet.getStyleElement()}>
      {app}
    </Html>
  );
};
