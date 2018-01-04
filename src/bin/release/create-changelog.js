// @flow

import { createStep, exec } from 'bin/utils';

// Executes: git log --pretty=format:"%s" HEAD...<tag>
const getChangelog = tag => exec('git', [
  'log',
  '--pretty=format:* %s',
  `HEAD...${tag}`,
]);

export default (tag: string) => createStep(
  'Creating changelog',
  getChangelog(tag)
);
