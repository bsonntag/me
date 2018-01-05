// @flow

import babelify from 'babelify';
import browserify from 'browserify';
import config from 'config';
import envify from 'envify';

export function bundleApplication(): Promise<?string> {
  if (!config.get('javascriptEnabled')) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    browserify()
      .transform(babelify)
      .transform(envify)
      .require('./src/client/app', { entry: true })
      .bundle((error, bundle) => {
        if (error) {
          reject(error);
        } else {
          resolve(bundle.toString());
        }
      });
  });
}
