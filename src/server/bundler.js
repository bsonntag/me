// @flow

import babelify from 'babelify';
import browserify from 'browserify';
import envify from 'envify';
import watchify from 'watchify';

const cache = {};
const packageCache = {};

export function bundleApplication() {
  return browserify({ cache, packageCache })
    .plugin(watchify)
    .transform(babelify)
    .transform(envify)
    .require('./src/client/app', { entry: true })
    .bundle();
}
