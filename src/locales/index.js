import { get } from 'lodash';
import en from './en';

export const translate = path => get(en, path, path);

export default en;
