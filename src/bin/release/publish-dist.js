// @flow

import { createStep, exec } from 'bin/utils';

// Executes on dist: git add .
const addAll = () => exec('git', ['add', '.'], { cwd: 'dist' });

// Executes on dist: git commit --message=<version>\n<changelog>
const commitDist = (version, changelog = '') => exec('git', [
  'commit',
  `--message=${version}\n\n${changelog}`,
], { cwd: 'dist' });

// Executes on dist: git push
const pushDist = () => exec('git', ['push'], { cwd: 'dist' });

export default (version: string, changelog: string) => createStep(
  'Publishing dist folder',
  addAll().then(() => commitDist(version, changelog)).then(pushDist)
);
