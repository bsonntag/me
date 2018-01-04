// @flow

import ora from 'ora';

export default function createStep<T: any>(
  description: string,
  promise: Promise<T>
): Promise<T> {
  ora.promise(promise, description);

  return promise;
}
