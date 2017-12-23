// @flow

import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
import { injectGlobalStyles } from './styles';
import { omit } from 'lodash';
import { renderToString } from 'react-dom/server';
import App from './components/app';
import ConfigProvider from './components/config-provider';
import Html from './components/html';
import React from 'react';
import config from 'config';

const getClientConfig = () => omit(config, [
  'private',
  'util',
  ...config.get('private'),
]);

export const renderClient = (location: string) => {
  const routerContext = { status: 200 };
  const styleSheet = new ServerStyleSheet();

  injectGlobalStyles();

  const app = renderToString(styleSheet.collectStyles(
    <ConfigProvider config={getClientConfig()}>
      <StaticRouter
        context={routerContext}
        location={location}
      >
        <App />
      </StaticRouter>
    </ConfigProvider>
  ));

  return (
    <Html
      baseUrl={config.get('baseUrl')}
      clientConfig={getClientConfig()}
      javascriptEnabled={config.get('javascriptEnabled')}
      styles={styleSheet.getStyleElement()}
    >
      {app}
    </Html>
  );
};
