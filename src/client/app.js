import { BrowserRouter } from 'react-router-dom';
import { injectGlobalStyles } from './styles';
import App from './containers/app';
import React from 'react';
import ReactDom from 'react-dom';
import config from 'common/config';

const render = config.ssr ? ReactDom.hydrate : ReactDom.render;

const renderApplication = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const root = document.getElementById('root');

if (root) {
  injectGlobalStyles();

  render(renderApplication(), root);
}
