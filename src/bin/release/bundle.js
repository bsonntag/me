// @flow

import { createStep, exec } from 'bin/utils';

export default () => createStep('Bundling', exec('npm', [
  'run',
  'bundle',
]));
