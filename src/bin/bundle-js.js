// @flow
/* eslint-disable no-console */
/* eslint-disable no-process-exit */

import babelify from 'babelify';
import browserify from 'browserify';
import config from 'config';
import envify from 'envify';
import fs from 'fs';
import uglifyify from 'uglifyify';

if (!config.get('javascriptEnabled')) {
  console.log('Javascript is disabled. Skipping.');

  process.exit(0);
}

browserify()
  .transform(babelify)
  .transform(envify)
  .transform(uglifyify, { global: true })
  .require('./src/client/app', { entry: true })
  .bundle()
  .pipe(fs.createWriteStream('dist/app.js'));
