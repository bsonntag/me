// @flow
/* eslint-disable no-console */
/* eslint-disable no-process-exit */

import { renderClient } from 'client';
import { renderToString } from 'react-dom/server';
import Bluebird from 'bluebird';
import fs from 'fs';

const writeFile = Bluebird.promisify(fs.writeFile);

const html = `<!DOCTYPE html>${renderToString(renderClient())}`;

writeFile('dist/index.html', html)
  .catch(error => {
    console.log(error);

    process.exit(1);
  });
