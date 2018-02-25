// @flow
/* eslint-disable no-console */

import { renderClient } from 'client';
import { renderToString } from 'react-dom/server';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

dotenv.config();

const port = process.env.SERVER_PORT || 3000; // eslint-disable-line no-process-env

const app = express();

app.use(morgan('tiny'));

app.use('/static', express.static('build/client'));

app.get('*', (request, response) => {
  const html = renderToString(renderClient(request.url));

  response.send(`<!DOCTYPE html>${html}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
