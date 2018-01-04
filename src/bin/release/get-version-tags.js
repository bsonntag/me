// @flow

import { exec } from 'bin/utils';
import semver from 'semver';

const isValidVersion = semver.valid;

const upVersion = (version: string, releaseType: string) => {
  return `v${semver.inc(version, releaseType)}`;
};

// Executes: git describe --abbrev=0 --tags
const getLatestTag = () => exec('git', [
  'describe',
  '--abbrev=0',
  '--tags',
]);

export default (releaseType: string) => getLatestTag()
  .then(previousTag => {
    if (!isValidVersion(previousTag)) {
      throw new Error('Latest tag is not a valid version.');
    }

    return {
      nextTag: upVersion(previousTag, releaseType),
      previousTag,
    };
  });
