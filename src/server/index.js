// @flow
/* eslint-disable no-console */

import { renderClient } from 'client';
import { renderToString } from 'react-dom/server';
import express from 'express';
import morgan from 'morgan';

const port = 3000;

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
