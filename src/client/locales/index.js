// @flow

import { get } from 'lodash';
import en from './en';

export const translate = (path: string): string => get(en, path, path);

export default en;
