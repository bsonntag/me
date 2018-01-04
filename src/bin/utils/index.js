// @flow

import execa from 'execa';
import ora from 'ora';

export const exec = execa.stdout;

export function createStep<T: any>(
  description: string,
  promise: Promise<T>
): Promise<T> {
  ora.promise(promise, description);

  return promise;
}
