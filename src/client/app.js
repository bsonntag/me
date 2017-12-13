// @flow

import { BrowserRouter } from 'react-router-dom';
// $FlowFixMe
import { hydrate } from 'react-dom';
import App from './components/app';
import React from 'react';

const renderApplication = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const root = document.getElementById('root');

if (root) {
  hydrate(renderApplication(), root);
}
