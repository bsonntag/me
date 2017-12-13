// @flow

import babelify from 'babelify';
import browserify from 'browserify';
import envify from 'envify';
import fs from 'fs';
import uglifyify from 'uglifyify';

browserify()
  .transform(babelify)
  .transform(envify)
  .transform(uglifyify, { global: true })
  .require('./src/client/app', { entry: true })
  .bundle()
  .pipe(fs.createWriteStream('dist/app.js'));
