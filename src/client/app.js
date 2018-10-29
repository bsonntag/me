import { BrowserRouter } from 'react-router-dom';
import App from './containers/app';
import React from 'react';
import ReactDom from 'react-dom';
import config from 'common/config';

const render = config.ssr ? ReactDom.hydrate : ReactDom.render;

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
