// @flow
/* eslint-disable no-console */
/* eslint-disable no-process-exit */

import bundle from './bundle';
import createChangelog from './create-changelog';
import getVersionTags from './get-version-tags';
import publishDist from './publish-dist';
import publishNextVersionTag from './publish-next-version-tag';

const releaseTypes = ['major', 'minor', 'patch'];

const [releaseType] = process.argv.slice(2);

if (!releaseType || !releaseTypes.includes(releaseType)) {
  console.log('Usage: yarn release <patch|minor|major>');

  process.exit(1);
}

getVersionTags(releaseType)
  .then(({ nextTag, previousTag }) => {
    console.log('Releasing', nextTag);

    return bundle()
      .then(() => createChangelog(previousTag))
      .then(changelog => {
        return publishDist(nextTag, changelog)
          .then(() => publishNextVersionTag(nextTag, changelog));
      });
  })
  .catch(error => {
    console.log('Error:', error.message);

    process.exitCode = 1;
  });
