// @flow

import { BrowserRouter } from 'react-router-dom';
// $FlowFixMe
import { hydrate } from 'react-dom';
import App from './components/app';
import ConfigProvider from './components/config-provider';
import React from 'react';
import config from './config';

const renderApplication = () => (
  <ConfigProvider config={config}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);

const root = document.getElementById('root');

if (root) {
  hydrate(renderApplication(), root);
}
