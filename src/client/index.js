import { Helmet } from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
import { injectGlobalStyles } from './styles';
import { renderToString } from 'react-dom/server';
import App from './containers/app';
import Html from './containers/html';
import React from 'react';

export const renderClient = location => {
  const routerContext = { status: 200 };
  const styleSheet = new ServerStyleSheet();

  injectGlobalStyles();

  const app = renderToString(styleSheet.collectStyles(
    <StaticRouter
      context={routerContext}
      location={location}
    >
      <App />
    </StaticRouter>
  ));

  return (
    <Html
      helmet={Helmet.renderStatic()}
      styles={styleSheet.getStyleElement()}
    >
      {app}
    </Html>
  );
};
