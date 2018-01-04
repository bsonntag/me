// @flow

import { createStep, exec } from 'bin/utils';
import semver from 'semver';

// Executes: npm version <version>
const updatePackageVersion = tag => exec('npm', ['version', semver.valid(tag)]);

// Executes on dist: git add package.json
const addPackageJson = () => exec('git', ['add', 'package.json']);

// Executes: git commit --message=<version>\n<changelog>
const commitVersion = (version, changelog) => exec('git', [
  'commit',
  `--message=${version}\n\n${changelog}`,
]);

// Executes: git tag <version>
const createVersionTag = version => exec('git', ['tag', version]);

// Executes: git push
const push = () => exec('git', ['push']);

// Executes: git push --tags
const pushTags = () => exec('git', ['push', '--tags']);

export default (tag: string, changelog: string) => createStep(
  `Publishing version tag ${tag}`,
  updatePackageVersion(tag)
    .then(addPackageJson)
    .then(() => commitVersion(tag, changelog))
    .then(() => createVersionTag(tag))
    .then(push)
    .then(pushTags)
);
