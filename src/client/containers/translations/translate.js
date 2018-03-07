// @flow

import { translate } from 'client/locales';

type Props = { path: string };

export const Translate = ({ path }: Props) => translate(path);
