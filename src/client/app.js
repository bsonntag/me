// @flow

// $FlowFixMe
import { hydrate } from 'react-dom';
import App from './components/app';
import React from 'react';

const root = document.getElementById('root');

if (root) {
  hydrate(<App />, root);
}
