// @flow
/* eslint-disable no-console */

import { bundleApplication } from 'server/bundler';
import { renderClient } from 'client';
import { renderToString } from 'react-dom/server';
import config from 'config';
import express from 'express';
import morgan from 'morgan';

const port = 3000;

const app = express();

app.use(morgan('tiny'));

app.use('/assets', express.static('src/assets'));

bundleApplication()
  .then(bundle => {
    if (config.get('javascriptEnabled')) {
      app.get('/app.js', (request, response) => {
        response.setHeader('content-type', 'application/javascript');
        response.end(bundle);
      });
    }

    app.get('*', (request, response) => {
      const html = renderToString(renderClient(request.url));

      response.send(`<!DOCTYPE html>${html}`);
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  });
